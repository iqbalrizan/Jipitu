import React, { useEffect } from 'react'
import "./Alasan.css"
import quality from "../../assets/images/quality.png"
import alasan from "../../assets/images/alasan.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

function Alasan() {

    useEffect(() => {
        AOS.init({
            duration : 1500,
           
          })
    }, [])


  return (
    <div className='alasan' id="why-us">
        <h1 className='section-title'>Alasan Memilih Kami</h1>
        <br />
        <br />
        <div className="alasan-wrapper">
        <div className="alasan-left">
            <div className="alasan-box-container">
            <div className="alasan-box" data-aos="flip-up">
                <img src={quality} alt="" />
                <h2>Quality</h2>
                <p>Kami menawarkan kualitas layanan yang tinggi dan solusi yang inovatif yang dapat membawa bisnis Anda ke level berikutnya.</p>
            </div>
            <div className="alasan-box" data-aos="flip-up">
                <img src={quality} alt="" />
                <h2>Quality</h2>
                <p>Kami menawarkan kualitas layanan yang tinggi dan solusi yang inovatif yang dapat membawa bisnis Anda ke level berikutnya.</p>
            </div>
            <div className="alasan-box" data-aos="flip-up">
                <img src={quality} alt="" />
                <h2>Quality</h2>
                <p>Kami menawarkan kualitas layanan yang tinggi dan solusi yang inovatif yang dapat membawa bisnis Anda ke level berikutnya.</p>
            </div>
            <div className="alasan-box" data-aos="flip-up">
                <img src={quality} alt="" />
                <h2>Quality</h2>
                <p>Kami menawarkan kualitas layanan yang tinggi dan solusi yang inovatif yang dapat membawa bisnis Anda ke level berikutnya.</p>
            </div>
            </div>
        </div>
        <div className="alasan-right">
            <img src={alasan} alt="" />
        </div>
        </div>
    </div>
  )
}

export default Alasan