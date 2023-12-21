import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { getNewsPosts } from '../../../../sanity/sanity-utils';
import { NewsItem } from '../../../../Types/SanityTypes';

const NewsSlider = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNewsPosts = async () => {
      const newsData = await getNewsPosts();
      setNews(newsData);
    };

    fetchNewsPosts();
  }, []);

  return (
    <Splide options={{
      type: 'loop',
      perPage: 3,
      perMove: 1,
      gap: '1rem',
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
        <SplideSlide key={ newsItem._id}>
          <div className="flex justify-center items-center w-full h-full">
            <NewsCard {...newsItem} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default NewsSlider;
