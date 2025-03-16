import React, { useEffect } from 'react'
import "./Alasan.css"
import quality from "../../assets/images/quality.png"
import tech from "../../assets/images/tech.png"
import profesional from "../../assets/images/profesional.png"
import price from "../../assets/images/price.png"
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
                <h2>Best Quality</h2>
                <p>Kami menghadirkan layanan dengan standar kualitas tinggi dan solusi inovatif untuk membawa bisnis Anda ke level berikutnya.</p>
            </div>
            <div className="alasan-box" data-aos="flip-up">
                <img src={tech} alt="" />
                <h2>Latest Technology</h2>
                <p>Kami selalu mengikuti perkembangan terbaru dalam dunia digital agar website Anda selalu unggul dan relevan.</p>
            </div>
            <div className="alasan-box" data-aos="flip-up">
                <img src={profesional} alt="" />
                <h2>Professional Support</h2>
                <p>Tim ahli kami siap membantu Anda kapan saja dengan layanan yang responsif dan profesional.</p>
            </div>
            <div className="alasan-box" data-aos="flip-up">
                <img src={price} alt="" />
                <h2>Competitive Pricing</h2>
                <p>Dapatkan website berkualitas tinggi dengan harga yang bersaing, tanpa kompromi dalam hasil akhir!</p>
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