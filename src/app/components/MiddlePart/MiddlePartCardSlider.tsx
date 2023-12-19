import { useState, useEffect } from 'react';
import MiddlePartCard from './MiddlePartCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { getNewsPosts } from '../../../../sanity/sanity-utils';

const MiddlePartCardSlider = () => {
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
      autoHeight: false
    }}>
      {news.map((newsPost) => (
        <SplideSlide key={newsPost._id}>
          <div className="flex justify-center items-center w-full h-full">
            <MiddlePartCard props={newsPost} />
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default MiddlePartCardSlider;
