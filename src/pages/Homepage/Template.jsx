import React, { useEffect } from 'react'
import "./template.css"
import placeholder from "@images/placeholder.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SimpleButton from '../../components/SimpleButton/Index';
import TemplateData from "../../constants/template.json"

function Template() {

    useEffect(() => {
        AOS.init({
            duration : 1500,
           
          })
    }, [])


  return (
    <div className='template' id="our-template">
        <div className="template-intro">
        <h2 className='section-title'>Our Service</h2>
        <br />
        <br />
        </div>
        <div className="list-template">
            <div className="template-box" data-aos="zoom-in">
                <h3 className='template-heading'>Landing Page</h3>
                <p>  Landing page adalah halaman web yang dibuat khusus untuk kampanye pemasaran atau promosi.
    Tujuannya adalah mengarahkan pengunjung untuk melakukan tindakan tertentu, seperti mendaftar,
    membeli produk, atau mengunduh sesuatu, dengan desain yang fokus dan tanpa distraksi.</p>
                <ul className='features-list'>
                <li>Menentukan tujuan landing page</li>
    <li>Menyiapkan konten (teks, gambar, video, dll.)</li>
    <li>Memilih desain atau referensi tampilan</li>
    <li>Memberikan informasi kontak atau CTA</li>
    <li>Menyetujui proposal & melakukan pembayaran</li>
                </ul>
                
                <a href='https://wa.me/6281268110311' className='contact-button'>Contact Us</a>
            </div>
            <div className="template-box" data-aos="zoom-in">
    <h3 className='template-heading'>E-commerce Development</h3>
    <p>Website e-commerce yang kami buat dirancang untuk memberikan pengalaman belanja online yang lancar dan menarik. Kami menyediakan fitur lengkap untuk mendukung bisnis Anda dalam menjual produk secara digital dengan mudah dan efektif.</p>
    <ul className='features-list'>
        <li>Menentukan jenis e-commerce (toko online, marketplace, katalog digital, dll.)</li>
        <li>Menyiapkan konten produk</li>
        <li>Memilih desain atau referensi tampilan yang sesuai dengan brand</li>
        <li>Mengintegrasikan sistem pembayaran</li>
        <li>Menyetujui proposal & melakukan pembayaran</li>
    </ul>
    
    <a href='https://wa.me/6281268110311' className='contact-button'>Contact Us</a>
</div>

<div className="template-box" data-aos="zoom-in">
    <h3 className='template-heading'>Custom Apps</h3>
    <p>Custom apps dirancang khusus sesuai dengan kebutuhan bisnis Anda. Kami mengembangkan aplikasi jitu yang dapat membantu meningkatkan efisiensi operasional, mengotomatiskan tugas, dan memberikan pengalaman terbaik bagi semua pengguna.</p>
    <ul className='features-list'>
        <li>Menentukan kebutuhan aplikasi</li>
        <li>Menyiapkan spesifikasi dan fitur yang dibutuhkan</li>
        <li>Memilih desain atau referensi tampilan</li>
        <li>Mengembangkan aplikasi sesuai dengan kebutuhan bisnis</li>
        <li>Menyetujui proposal & melakukan pembayaran</li>
    </ul>
    <a href='https://wa.me/6281268110311' className='contact-button'>Contact Us</a>
</div>

           
           
           
           
           
            
            
           
        </div>
    </div>
  )
}

export default Template