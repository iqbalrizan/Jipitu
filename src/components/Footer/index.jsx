import React from 'react';
import "./style.css";
import logoJipitu from "../../assets/images/logo-jipitu.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column logo-section">
                    <img src={logoJipitu} alt="Company Logo" className="footer-logo" />
                </div>

                <div className="footer-column">
                    <h4>Tentang Kami</h4>
                    <p>Kami adalah agensi kreatif yang fokus pada pembuatan website yang menarik dan fungsional.</p>
                </div>

                <div className="footer-column">
                    <h4>Hubungi Kami</h4>
                    <p>Alamat: Jalan Contoh No. 123</p>
                    <p>Email: info@contoh.com</p>
                    <p>Telepon: (123) 456-7890</p>
                </div>
            </div>

            <div className="footer-bottom">
            <p>Develop by Jipitu Agency</p>
            </div>
        </footer>
    );
}

export default Footer;
