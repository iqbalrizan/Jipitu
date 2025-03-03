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
        <h2>Our List Template</h2>
        </div>
        <div className="list-template">
            <div className="template-box" data-aos="zoom-in">
                <div className="template-img">
                <img src={placeholder} alt="" />
                </div>
                <div className="template-text">
                    <h1>Judul Template</h1>
                    <SimpleButton title="See More" />
                </div>
                <div className="template-button">
                    
                </div>
            </div>
            <div className="template-box" data-aos="zoom-in">
                <div className="template-img">
                <img src={placeholder} alt="" />
                </div>
                <div className="template-text">
                    <h1>Judul Template</h1>
                    
                </div>
                <div className="template-button">
                    <button>See More</button>
                </div>
            </div>
            <div className="template-box" data-aos="zoom-in">
                <div className="template-img">
                <img src={placeholder} alt="" />
                </div>
                <div className="template-text">
                    <h1>Judul Template</h1>
                    
                </div>
                <div className="template-button">
                    <button>See More</button>
                </div>
            </div>
            <div className="template-box" data-aos="zoom-in">
                <div className="template-img">
                <img src={placeholder} alt="" />
                </div>
                <div className="template-text">
                    <h1>Judul Template</h1>
                    
                </div>
                <div className="template-button">
                    <button>See More</button>
                </div>
            </div>
            <div className="template-box" data-aos="zoom-in">
                <div className="template-img">
                <img src={placeholder} alt="" />
                </div>
                <div className="template-text">
                    <h1>Judul Template</h1>
                    
                </div>
                <div className="template-button">
                    <button>See More</button>
                </div>
            </div>
            <div className="template-box" data-aos="zoom-in">
                <div className="template-img">
                <img src={placeholder} alt="" />
                </div>
                <div className="template-text">
                    <h1>Judul Template</h1>
                    
                </div>
                <div className="template-button">
                    <button>See More</button>
                </div>
            </div>
           
           
            
            
           
        </div>
        {TemplateData.map ((item, i) => (
            <>
            <h1>{item.title}</h1>
            <img src={item.img} alt="" />
            </>
        ))}
    </div>
  )
}

export default Template