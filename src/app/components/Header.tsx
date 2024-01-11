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
    <header
      className={`px-5 py-2 z-10 w-full flex items-center justify-between font-mono text-sm lg:flex-wrap 
      ${isTop ? 'bg-transparent' : 'bg-black bg-opacity-50 dark:bg-slate-500 dark:bg-opacity-80'
      } fixed top-0 w-full transition-all duration-500 ease-in-out`}
    >
      <p>
        <Link href={'/'}>STOCKELITO</Link>
      </p>
      <DarkModeButton />
    </header>
  );
};

export default Header;
