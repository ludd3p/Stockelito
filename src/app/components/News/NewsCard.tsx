import Link from "next/link";
import { NewsItem } from "../../../../Types/SanityTypes";
import "./NewsCard.css"

const NewsCard = (newsItem: NewsItem) => {
  const createdAt = new Date(newsItem._createdAt);
  const formattedDate = createdAt.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  const formattedTime = createdAt.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });
  

  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src="https://taroteca-studio.com/userdata/public/gfx/073c62f486bc27ae35361abcf4149049.jpg" alt="Avatar" style={{ width: "300px", height: "300px", }} />
          </div>
          <div className="flip-card-back">
            <div className="flex justify-center items-center w-full h-full">
              <Link href={`/news/${newsItem.slug}`} className="flex flex-col group relative rounded-xl 
        px-2 pt-4 pb-2 h-80 w-80 lg:h-90 lg:w-45 overflow-hidden cursor-pointer justify-between
        transition hover:scale-105">
                <div className="absolute inset-0 bg-black opacity-10 dark:bg-white group-hover:opacity-20" />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl mx-auto">{newsItem.newsTitle}</h1>
                  <p className="lg:text-l">{newsItem.newsText}</p>
                </div>
                <div>
                  <p className="ml-auto text-sm w-fit text-gray-500">Skrivet {formattedDate} kl. {formattedTime}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default NewsCard;
