"use client"
import acmeLogo from '@/assets/logo-acme.png'
import apexLogo from '@/assets/logo-apex.png'
import celestialLogo from '@/assets/logo-celestial.png'
import pulseLogo from '@/assets//logo-pulse.png'
import echoLogo from '@/assets/logo-echo.png'
import quantemlogo from '@/assets/logo-quantum.png'
import {motion} from "framer-motion"



export const LogoTicker = () => {
  return( 
  <section className=' py-20 md:py-24 '>
    <div className='container'>
      <div className='flex items-center gap-5 '>
        <div className='flex-1 md:flex-none'>
          <h2>Teurusted by top innovative teams</h2>
        </div>
        <div 
        

        className=' flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          <motion.div
          initial={{
          
            translateX:'-500%'
          }}
           animate={{
            translateX:'0'
          }}
          transition={{
            duration:30,
            repeat:Infinity,
            ease:"linear",
          }}
           className='flex flex-non gap-14 pr-14  -translate-x-1/2'>
            {[acmeLogo, pulseLogo ,echoLogo,celestialLogo,apexLogo,acmeLogo, pulseLogo ,echoLogo,celestialLogo,apexLogo,quantemlogo].map((logo)=>(
              <img src={logo.src} key={logo.src} alt='image' className='h-6 w-auto' />          
              ))}
          </motion.div>
          </div>
      </div>
    </div>
  </section>);
};
