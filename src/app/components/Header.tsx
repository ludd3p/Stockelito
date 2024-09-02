import { useState, useEffect } from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';

const Header = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const atTop = scrollTop === 0;

      setIsTop(atTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 px-5 py-2 z-10 w-full flex items-center justify-between font-mono text-sm lg:flex-wrap 
      transition-all duration-500 ease-in-out dark:border-slate-500/80

      ${isTop ? 'bg-transparent' : 'bg-black bg-opacity-20 dark:bg-slate-500 dark:bg-opacity-30'}`}
    >
      <Link href={'/'} className="text-4xl">STOCKELITO</Link>
      <Link href={'/wisdoms'}>WISDOMS</Link>
      {/* <DarkModeButton /> */}
    </nav>
  );
};

export default Header;
