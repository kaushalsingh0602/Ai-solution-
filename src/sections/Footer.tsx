import Logo from '@/assets/logo.svg'
import XSocial  from '@/assets/social-x.svg'
import Insta  from '@/assets/social-instagram.svg'
import YTSocial  from '@/assets/social-youtube.svg'

export const Footer = () => {
  return (
  <footer className='py-5 border-t border-white/15'>
    <div className='container '>
    <div className='flex flex-col lg:flex-row items-center gap-8  '>
      <div className='flex gap-2 items-center lg:flex-1  lg:justify-start'>
        <Logo className="h-6 w-6"/>
        <div className=' font-medium'>
          AI Startup Landing Page
        </div>
      </div>
      
      <nav className=" flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
              <a href="#" className=" text-white/70 hover:text-white translate text-xs md:text-sm transition">Features</a>
              <a href="#" className=" text-white/70 hover:text-white translate text-xs md:text-sm transition">Developers</a>
              <a href="#" className=" text-white/70 hover:text-white translate text-xs md:text-sm transition">Pricing</a>
              <a href="#" className=" text-white/70 hover:text-white translate text-xs md:text-sm transition">Changelog</a>
      </nav>
      
      <div className=' flex gap-5 lg:flex-1 lg:justify-end'>
        <XSocial className="text-white/40 hover:text-white transition"/>
        <Insta className="text-white/40 hover:text-white transition"/>
        <YTSocial className="text-white/40 hover:text-white transition"/>
      </div>
      </div>
    </div>
  </footer>);
};
