import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import pMap from 'p-map';
import { getBusinesses } from '../sanity/sanity-utils';
import { Business } from '../Types/SanityTypes';

export interface MarketDataItem {
  slug: string;
  data: {
    title: string;
    value: string;
  }[];
}


// PITA to deploy on vercel
export async function scrapeMarketData(slug: string): Promise<MarketDataItem> {
  const browser = await puppeteer.launch({ headless: 'shell', args: ['--no-sandbox'], });
  const page = await browser.newPage();
  const query = slug;

  try {
    await page.goto(process.env.DI_ADDRESS + query);

    await page.waitForSelector('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div.search > section:nth-child(2) > div > table', { timeout: 10000 });

    await page.click('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div.search > section:nth-child(2) > div > table tbody tr:first-child td:first-child a');

    await page.waitForSelector('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div > div.market__content > div.market__content-main > article:nth-child(4) > section');

    const sectionContent = await page.$eval('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div > div.market__content > div.market__content-main > article:nth-child(4) > section',
      (section) => section.innerHTML
    );

    const $ = cheerio.load(sectionContent);

    const data: { title: string, value: string }[] = [];

    $('div.instrument-info__item').each((index, element) => {
      const title = $(element).find('h3').text();
      const value = $(element).find('p, a').text();

      data.push({ title, value });
    });

    console.log(`klar med en ${slug}`);
    return { slug, data };
  } finally {
    await browser.close();
  }
}

export async function scrapeBusinessByURL(URL: string): Promise<MarketDataItem> {
    const page = await fetch(URL);
    const html = await page.text();

    const $ = await cheerio.load(html);

    const sectionContent = $('body').html();

    const data: { title: string, value: string }[] = [];
    if (sectionContent) {
      const section$ = cheerio.load(sectionContent);

      section$('div.instrument-info__item').each((index, element) => {
        const title = section$(element).find('h3').text();
        const value = section$(element).find('p, a').text();

        data.push({ title, value });
      });
    }
    return { slug: URL, data };
}




export async function scrapeBusiness(slug: string): Promise<MarketDataItem> {
  try {
    return await scrapeBusinessByURL(slug);
  }
  catch (error) {
    console.error('Error:', error);
    return { slug, data: [] };
  }
}

export async function runScrapingForAllBusinesses(): Promise<MarketDataItem[]> {
  try {
    const businesses = await getBusinesses();

    const scrapedData = await pMap(businesses, async (business: Business) => {
      try {
        const query = business.slug;
        return await scrapeMarketData(query);
      } catch (error) {
        console.error(`Error processing business with ticker ${business.slug}:`);
        return [];
      }
    }, { concurrency: 5 }) as MarketDataItem[];

    console.log(scrapedData)
    return scrapedData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}