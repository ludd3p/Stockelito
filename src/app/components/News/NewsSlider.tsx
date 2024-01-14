import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { getNewsPosts, getRelatedNews, getRumorPosts } from '../../../../sanity/sanity-utils';
import { NewsItem } from '../../../../Types/SanityTypes';

interface NewsSliderProps {
  type: string;
}

const NewsSlider = ({ type }: NewsSliderProps) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      if (type === 'rumor') {
        const newsData = await getRumorPosts();
        setNews(newsData);
      } else {
        console.log(type);
      }
      
    };

    fetchNewsPosts();
  }, [type]);

  return (
    <div className='w-full'>
      <h1 className='my-0 pl-20'>Nyheter</h1>
      <Splide options={{
        label: 'Nyheter',
        type: 'loop',
        perPage: 3,
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
  );
};

export default NewsSlider;
