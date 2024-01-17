import Link from 'next/link';
import { Business } from '../../../../Types/SanityTypes';

const TopPartItem = (business: Business) => {
  return (
    <Link href={`/business/${business.slug}`}
      key={business._id}
      className="flex flex-col items-center justify-center text-center rounded-full overflow-hidden border h-16 w-16 xs:h-[4.5rem] xs:w-[4.5rem] sm:h-28 sm:w-28 transition-colors
               hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <h1 className="text-lg sm:text-2xl font-semibold">
        {business.businessTicker}
      </h1>
      <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
        -&gt;
      </span>
    </Link>
  );
};

export default TopPartItem;
