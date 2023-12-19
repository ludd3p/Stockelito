import { NewsItem } from "../../../../Types/SanityTypes";

const MiddlePartCard = (newsItem: NewsItem) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col group relative text-white rounded-xl 
        px-6 py-8 h-80 w-80 lg:h-90 lg:w-45 overflow-hidden cursor-pointer ">
        <div className="absolute inset-0 bg-cover bg-center"/> 
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
        <div className="relative flex flex-col gap-3">

          <h1 className="text-xl lg:text-2xl">{newsItem.newsTitle}</h1>
          <p className="lg:text-[18px]">{newsItem.newsText}</p>
        </div>
      </div>
    </div>
  );
}
export default MiddlePartCard;