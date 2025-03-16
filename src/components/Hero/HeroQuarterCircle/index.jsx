import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import './style.css';
import Button from '../../Button';

const HeroQuarterCircle = () => {

  const words = ["Solusi Jitu untuk Website Impian Anda"]

  useEffect(() => {
    AOS.init({
      duration: 1500,

    })

  }, [])

  return (
    <section className='home-banner'>
      <div className='w-1/2 home-banner-left'>
        <div className='hero-graphic'></div>
      </div>
      <div className="w-1/2 home-banner-right">
        <div className="h-[170px] mt-28 mb-4 home-banner-typewritter">
          <Typewriter options={{
            strings: words,
            autoStart: true,
            loop: true,
            delay: 100,
            wrapperClassName: "typewritter"
          }} />
        </div>
        <p className='mb-8 mt-20 typewritter-text' >Jangan lewatkan kesempatan emas! Hubungi kami sekarang untuk konsultasi gratis dan wujudkan kehadiran digital yang luar biasa!</p>
        <div className="button-container">
          <a className='button-1' href="/">View Project</a>
          <a className='button-2' href="/">Contact Us</a>
        </div>
       
      </div>
    </section>
  );
}

export default HeroQuarterCircle;
