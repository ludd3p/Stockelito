import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
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

  return news.length > 0 ? (
    <div className='w-full'>
      <h1 className='my-0 pl-20'>Nyheter</h1>
      <Splide options={{
        label: 'Nyheter',
        type: 'loop',
        perPage: perPage,
        perMove: 1,
        gap: '1rem',
        padding: { top: 0 },
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
        {news.map((newsItem: NewsItem) => (
          <SplideSlide key={newsItem._id}>
            <div className="flex justify-center items-center w-full h-full">
              <NewsCard {...newsItem} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  ) : null;
};

export default NewsSlider;
