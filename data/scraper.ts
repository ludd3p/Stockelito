import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
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

export async function scrapeMarketData(slug: string): Promise<MarketDataItem> {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'],});
  const page = await browser.newPage();
  const query = slug;

  try {
    // Navigate to the search results page
    await page.goto(`https://www.di.se/search/?query=${query}`);

    // Wait for the search results to load
    await page.waitForSelector('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div.search > section:nth-child(2) > div > table', { timeout: 10000 });

    // Click the link in the first <td> in the first <tr> of the table
    await page.click('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div.search > section:nth-child(2) > div > table tbody tr:first-child td:first-child a');

    // Wait for the market data section to load
    await page.waitForSelector('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div > div.market__content > div.market__content-main > article:nth-child(4) > section');

    // Use Cheerio to parse the HTML of the targeted section
    const sectionContent = await page.$eval('body > div.js_site-wrapper.site-wrapper.panorama-is-scrolled-out > div.js_main-content.site-body > div > div.market__content > div.market__content-main > article:nth-child(4) > section',
      (section) => section.innerHTML
    );

    const $ = cheerio.load(sectionContent);

    // Example: Extract data from each item in the section
    const data: { title: string, value: string }[] = [];

    $('div.instrument-info__item').each((index, element) => {
      const title = $(element).find('h3').text();
      const value = $(element).find('p, a').text();

      // Add the extracted data to the array
      data.push({ title, value });
    });

    console.log(`klar med en ${slug}`);

    // Return the structured data
    return { slug, data };
  } finally {
    // Close the browser
    await browser.close();
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

export async function scrapeBusiness(slug: string): Promise<MarketDataItem> {
  try {
    return await scrapeMarketData(slug);
  }
  catch (error) {
    console.error('Error:', error);
    return { slug, data: [] };
  } 
}