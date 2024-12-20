import Link from "next/link";
import { NewsItem } from "../../../../Types/SanityTypes";
import "./NewsCard.css"
import Image from "next/image";

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
            <Image src="/tarot-card-dark.svg" alt="Avatar"  width={300} height={300}/>
          </div>
          <div className="flip-card-back">
            <div className="flex justify-center items-center w-full h-full">
              <div className="flex flex-col group relative rounded-xl 
        px-2 pt-4 pb-2 w-80 lg:h-120 lg:w-45 overflow-hidden justify-between
        transition hover:scale-105" style={{ height: "380px",marginTop:"86px" }}>
                <div className="absolute inset-0 bg-black opacity-30 dark:bg-white group-hover:opacity-60" />
                <div className="relative flex flex-col gap-3">
                  <h1 className="text-xl lg:text-2xl mx-auto">{newsItem.newsTitle}</h1>
                  <p className="lg:text-l">{newsItem.newsText}</p>
                </div>
                <div>
                  <p className="ml-auto text-sm w-fit text-gray-500">Skrivet {formattedDate} kl. {formattedTime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default NewsCard;
