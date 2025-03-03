import React from 'react';
import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
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
                <p>&copy; 2024 Contoh Agency. Hak Cipta Dilindungi.</p>
            </div>
        </footer>
    );
}

export default Footer;
