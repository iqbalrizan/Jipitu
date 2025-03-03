import React, { useState } from 'react'
import "./style.css"
import faqImg from "../../assets/images/faq-img.png"

const Faq = () => {

    const Data = [
        {
            question : "Apa yang membedakan agensi Anda dari yang lain dalam hal pembuatan website?",
            answer : "Kami menonjol dalam menggabungkan desain kreatif dengan fungsionalitas yang kuat. Tim ahli kami memastikan setiap situs yang kami buat tidak hanya terlihat bagus tetapi juga berkinerja optimal."
        },
        {
            question : "Apa yang membedakan agensi Anda dari yang lain dalam hal pembuatan website?",
            answer : "Kami menonjol dalam menggabungkan desain kreatif dengan fungsionalitas yang kuat. Tim ahli kami memastikan setiap situs yang kami buat tidak hanya terlihat bagus tetapi juga berkinerja optimal."
        },
        {
            question : "Apa yang membedakan agensi Anda dari yang lain dalam hal pembuatan website?",
            answer : "Kami menonjol dalam menggabungkan desain kreatif dengan fungsionalitas yang kuat. Tim ahli kami memastikan setiap situs yang kami buat tidak hanya terlihat bagus tetapi juga berkinerja optimal."
        },
        {
            question : "Apa yang membedakan agensi Anda dari yang lain dalam hal pembuatan website?",
            answer : "Kami menonjol dalam menggabungkan desain kreatif dengan fungsionalitas yang kuat. Tim ahli kami memastikan setiap situs yang kami buat tidak hanya terlihat bagus tetapi juga berkinerja optimal."
        },
        {
            question : "Apa yang membedakan agensi Anda dari yang lain dalam hal pembuatan website?",
            answer : "Kami menonjol dalam menggabungkan desain kreatif dengan fungsionalitas yang kuat. Tim ahli kami memastikan setiap situs yang kami buat tidak hanya terlihat bagus tetapi juga berkinerja optimal."
        },

    ]

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        } 
        setSelected(i)
    }



  return (
    <div className='faq' id="faq">
        <h1 className='section-title'>Frequently Ask Question</h1>
        <br />
        <br />
        <div className="faq-wrapper">
            <div className="faq-wrapper-left">
                <img src={faqImg} alt="" />
            </div>
            <div className="faq-wrapper-right">
            <div className="faq-container">
            {Data.map((item, i) => (
                <div className="faq-item">
                    <div className="faq-title" onClick={() => toggle(i)}>
                    {item.question}
                    <span>{selected == i ? "-" : "+"}</span>
                    </div>
                    <div className={selected == i ? "faq-content show" : "faq-content"}>
                    {item.answer}
                    </div>
                </div>
            ))}
        </div>
            </div>
        </div>
       
    </div>
  )
}

export default Faq