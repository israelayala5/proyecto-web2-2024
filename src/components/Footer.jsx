import React from 'react';
import './Footer.css'; // Archivo de estilos para el footer
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTiktok, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
                <div className="social-icons">
                    <button><FontAwesomeIcon icon={faWhatsapp} /></button>
                    <button><FontAwesomeIcon icon={faTiktok} /></button>
                    <button><FontAwesomeIcon icon={faInstagram} /></button>
                    <button><FontAwesomeIcon icon={faYoutube} /></button>
                </div>
                <p>@2024 Israel Ayala M. - todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;
