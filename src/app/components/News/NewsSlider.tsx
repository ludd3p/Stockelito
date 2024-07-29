import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { getRelatedNews, getRumorPosts } from '../../../../sanity/sanity-utils';
import { NewsItem } from '../../../../Types/SanityTypes';

interface NewsSliderProps {
  type?: string;
}

const NewsSlider = ({ type = 'default' }: NewsSliderProps) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      if (type === 'rumor') {
        const newsData = await getRumorPosts();
        setNews(newsData);
      } else {
        const newsData = await getRelatedNews(type);

        setNews(newsData);
      }

    };

    fetchNewsPosts();
  }, [type]);

  const perPage = news.length > 3 ? 3 : news.length;
  const title = type === 'rumor' ? 'Färska rykten' : 'Nyheter';

  const threeNews = news?.slice(0, 3);

  return threeNews.length > 0 ? (
    <div className='container mx-auto p-4' style={{ minHeight: "50vh" }}>
      <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl/none tracking-tighter mb-6">{title}</h1>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {threeNews.map((newsItem: NewsItem) => (
          <div key={newsItem._id} className="flex justify-center items-center w-full h-full">
            <NewsCard {...newsItem} />
          </div>
        ))}
      </div>

      {/* <Splide hasTrack={false} options={{
        label: 'Nyheter',
        type: 'loop',
        perPage: perPage,
        perMove: 1,
        gap: '1rem',
        padding: { top: 5 },
        autoWidth: false,
        autoHeight: false,
        breakpoints: {
          900: {
            perPage: 2,
          },
          600: {
            perPage: 1,
          }
        }
      }}>
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl/none tracking-tighter mb-0">{title}</h1>
        <SplideTrack className="p-5">
          {news.map((newsItem: NewsItem) => (
            <SplideSlide key={newsItem._id}>
              <div className="flex justify-center items-center w-full h-full" style={{ minHeight: "80vh" }}>
                <NewsCard {...newsItem} />
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide> */}

    </div>
  ) : null;
};

export default NewsSlider;
