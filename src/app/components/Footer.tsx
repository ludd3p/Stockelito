import Link from 'next/link';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div id="section_footer" className='w-full'>
        <div className='text-center py-4'>
          <Link href="localhost:3000" className='btn btn-link hover:underline'>
            Inegritetspolicy
          </Link>
          <span className='mx-2'>|</span>
          <Link href="/anvandarvillkor" className='btn btn-link hover:underline'>
            Användarvillkor
          </Link>
          <span className='mx-2'>|</span>
          <Link href="mailto:Stockelito<Info@stockelito.se>" className='btn btn-link hover:underline'>
            Kontakt
          </Link>
          <p className='text-xs'>Copyright © {year}, Stockelito. All Rights Reserved.</p>
        </div>
      </div>
    )
}

export default Footer;