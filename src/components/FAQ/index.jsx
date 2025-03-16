import React, { useState } from 'react'
import "./style.css"
import faqImg from "../../assets/images/faq-img.png"

const Faq = () => {

    const Data = [
        {
            question: "Apa yang membedakan agensi Anda dalam pembuatan website?",
            answer: "Kami menggabungkan desain kreatif dengan fungsionalitas yang optimal. Tim kami memastikan setiap website yang kami buat tidak hanya menarik secara visual, tetapi juga cepat dan responsif"
        },
        {
            question: "Berapa lama waktu yang dibutuhkan untuk membuat sebuah website?",
            answer: "Waktu pengerjaan tergantung pada kompleksitas proyek. Umumnya, website sederhana membutuhkan 2-4 minggu, sementara proyek yang lebih kompleks bisa memakan waktu hingga 2-3 bulan."
        },
        {
            question: "Apakah saya bisa mengedit website sendiri setelah selesai dibuat?",
            answer: "Tentu! Kami menyediakan CMS (Content Management System) yang mudah digunakan, sehingga Anda bisa memperbarui konten sendiri tanpa harus memiliki keahlian coding."
        },
        {
            question: "Apakah website yang dibuat sudah mobile-friendly?",
            answer: "Ya, semua website yang kami buat sudah dioptimalkan agar tampil sempurna di berbagai perangkat, baik desktop, tablet, maupun smartphone."
        },
        {
            question: "Apakah Anda menyediakan layanan maintenance setelah website selesai?",
            answer: "Ya, kami menawarkan layanan maintenance untuk memastikan website Anda tetap berjalan dengan baik, termasuk update keamanan, backup, dan perbaikan jika ada masalah teknis."
        },
        {
            question: "Apakah bisa integrasi dengan payment gateway atau sistem lainnya?",
            answer: "Tentu! Kami dapat mengintegrasikan website Anda dengan payment gateway seperti Midtrans, Xendit, atau lainnya, serta sistem ERP, CRM, atau API pihak ketiga sesuai kebutuhan Anda."
        }
    ];
    

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