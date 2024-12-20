import { useState, useEffect } from 'react';
import Link from 'next/link';
import DarkModeButton from './DarkModeButton';
import Image from "next/image";

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
      className={`fixed top-0 inset-x-0 px-5 py-2 z-10 w-full flex items-center justify-start gap-3 font-mono text-sm lg:flex-wrap 
      transition-all duration-500 ease-in-out dark:border-slate-500/80

      ${isTop ? 'bg-transparent' : 'bg-black bg-opacity-20 dark:bg-slate-500 dark:bg-opacity-30'}`}
      style={{ maxWidth: '2100px', width: '100%',margin: '0 auto' }}
    >
      <Link href={'/'}><Image width={120} height={120} src={"/karas.png"} alt="smth" /></Link>
      <Link href={'/'} className="text-4xl">STOCKELITO</Link>
      <Link href={'/wisdoms'}>Wisdoms</Link>
      <Link href={'/horoscope'}>Horoskop</Link>
      {/* <DarkModeButton /> */}
    </nav >
  );
};

export default Header;
