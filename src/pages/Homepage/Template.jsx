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
                
                <button className='contact-button'>Contact Us</button>
            </div>
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
                
                <button className='contact-button'>Contact Us</button>
            </div>
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
                <button className='contact-button'>Contact Us</button>
            </div>
           
           
           
           
           
            
            
           
        </div>
    </div>
  )
}

export default Template