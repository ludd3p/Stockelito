import Link from 'next/link';
import { Business } from '../../../../Types/SanityTypes';
import Image from 'next/image';
import "./Business.css"

const BusinessMenuItem = (business: Business) => {
  const hasLogo = business.businessLogo;
  

  return (
    <Link
      href={`/business/${business.slug}`}
      key={business._id}
      style={{ width: "100px", height: "100px" }}
      className="fire-ball flex flex-col items-center justify-center text-center rounded-full overflow-hidden border h-16 w-16 xs:h-[4.5rem] xs:w-[4.5rem] sm:h-28 sm:w-28 group transition hover:scale-110 shadow-md"
    >
      {hasLogo ? (
        <Image
          src={business.businessLogo}
          alt={business.businessTicker}
          height={1000}
          width={1000}
          className="w-full h-full p-1"
        />
      ) : (
        <div>
          <h1 className="text-lg sm:text-2xl font-semibold">
            {business.businessTicker}
          </h1>
        </div>
      )}
    </Link>
  );
};

export default BusinessMenuItem;
