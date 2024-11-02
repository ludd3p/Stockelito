import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import { getRelatedNews, getRumorPosts, updateRumorPost } from '../../../../sanity/sanity-utils';
import { NewsItem } from '../../../../Types/SanityTypes';
import Image from 'next/image';

export interface NewsSliderProps {
  type?: string;
}

const NewsSlider = ({ type = 'default' }: NewsSliderProps) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [votedCards, setVotedCards] = useState<string[]>([]);

  useEffect(() => {
    // Load voted card IDs from local storage
    const storedVotes = JSON.parse(localStorage.getItem('votedCards') || '[]');
    setVotedCards(storedVotes);
  }, []);

  const saveVote = (id: string) => {
    const updatedVotes = [...votedCards, id];
    setVotedCards(updatedVotes);
    localStorage.setItem('votedCards', JSON.stringify(updatedVotes));
  };

  const hasVoted = (id: string) => votedCards.includes(id);

  const upVote = async (id: string) => {
    if (hasVoted(id)) {
      alert('You have already voted for this post.');
      return;
    }

    // Optimistically update the UI
    setNews(prevNews =>
      prevNews.map(item =>
        item._id === id ? { ...item, upVotes: (item.upVotes || 0) + 1 } : item
      )
    );

    // Mark as voted
    saveVote(id);

    try {
      await updateRumorPost(id, "upVotes");
    } catch (error) {
      console.error('Failed to update upVotes:', error);
      // Optionally, revert the state if the mutation fails
      setNews(prevNews =>
        prevNews.map(item =>
          item._id === id ? { ...item, upVotes: (item.upVotes || 0) - 1 } : item
        )
      );
    }
  };

  const downVote = async (id: string) => {
    if (hasVoted(id)) {
      alert('You have already voted for this post.');
      return;
    }

    // Optimistically update the UI
    setNews(prevNews =>
      prevNews.map(item =>
        item._id === id ? { ...item, downVotes: (item.downVotes || 0) + 1 } : item
      )
    );

    // Mark as voted
    saveVote(id);

    try {
      await updateRumorPost(id, "downVotes");
    } catch (error) {
      console.error('Failed to update downVotes:', error);
      // Optionally, revert the state if the mutation fails
      setNews(prevNews =>
        prevNews.map(item =>
          item._id === id ? { ...item, downVotes: (item.downVotes || 0) - 1 } : item
        )
      );
    }
  };

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
  const title = type === 'rumor' ? 'Tarotkorten visar...' : 'Nyheter';
  const threeNews = news?.slice(0, 3);

  return threeNews.length > 0 ? (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div className='container mx-auto p-4' style={{ height: "600px" }}>
        <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl/none tracking-tighter mb-6">{title}</h1>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {threeNews.map((newsItem: NewsItem) => (
            <div key={newsItem._id} className="flex justify-center items-center w-full h-full flex-col">
              <NewsCard {...newsItem} />
              <div className='mt-36 flex-row flex gap-4 justify-center items-center text-center'>
                <div>
                  <Image
                    onClick={() => upVote(newsItem._id)}
                    className={`cursor-pointer transform hover:scale-110 transition duration-300 ${hasVoted(newsItem._id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    width={36}
                    height={36}
                    src="/up.png"
                    alt='Icon for upvote'
                  />
                  <p>{newsItem.upVotes}</p>
                </div>
                <div>
                  <Image
                    onClick={() => downVote(newsItem._id)}
                    className={`cursor-pointer transform hover:scale-110 transition duration-300 ${hasVoted(newsItem._id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    width={36}
                    height={36}
                    src="/down.png"
                    alt='Icon for downvote'
                  />
                  <p>{newsItem.downVotes}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default NewsSlider;