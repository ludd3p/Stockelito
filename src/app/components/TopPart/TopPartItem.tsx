import { Business } from "../../../../Types/SanityTypes";

const TopPartItem = (business: Business) => {
  return (
    <a
      href="https://github.com/spgarn"
      className="group rounded-full overflow-hidden border h-28 w-28 p-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 py-7"
      target="_blank"
      rel="noopener noreferrer"
      title={business.businessName}
    >
      <div className="text-center">
        <h2 className={`mb-1 text-2xl font-semibold`}>
          {business.businessTicker}
        </h2>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </div>
    </a>
  );
};

export default TopPartItem;
