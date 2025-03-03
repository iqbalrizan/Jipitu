import React, { useEffect } from 'react';
import Template from './Template';
import Alasan from './Alasan';
import AOS from 'aos';
import './style.css';
import HeroQuarterCircle from '../../components/Hero/HeroQuarterCircle';
import Faq from '../../components/FAQ';
import Footer from '../../components/Footer';
import FlyingButton from '../../components/FlyingButton/Index';

const Home = () => {

  

  useEffect(() => {
    AOS.init({
      duration: 1500,

    })

  }, [])

  return (
    <>
      <HeroQuarterCircle />
      <Alasan />
      {/* <Template /> */}
      <Faq />
      {/* <FlyingButton /> */}
      <Footer />
    </>
  );
}

export default Home;
