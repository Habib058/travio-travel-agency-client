import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol/FooterCol';
import './Footer.css'

const Footer = () => {
        const noNamed = [
            {name: "Emergency Dental Care" , link: "/emergency"},
            {name: "Check Up" , link: "/checkup"},
            {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
            {name: "Tooth Extraction" , link: "/tooth-extract"},
        ]
        const ourAddress = [
            {name: "New York - 101010 Hudson" , link: "//google.com/map"},
            {name: "Yards" , link: "//google.com/map"},
           
        ]
        const oralHealth = [
            {name: "Emergency Dental Care" , link: "/emergency"},
            {name: "Check Up" , link: "/checkup"},
            {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
            {name: "Tooth Extraction" , link: "/tooth-extract"},
           
        ]
        const services = [
            {name: "Emergency Dental Care" , link: "/emergency"},
            {name: "Check Up" , link: "/checkup"},
            {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
            {name: "Tooth Extraction" , link: "/tooth-extract"},
            
        ]
        return (
            <footer className="footer-area clear-both mt-5 pt-5">
                <div className="container pt-5">
                    <div className="row py-5">
                        <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                        <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                        <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                        <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                            <ul className="social-media list-inline">
                                
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                            <div className="mt-5">
                                <h6>Call now</h6>
                                <button className="btn btn-primary">+2025550295</button>
                            </div>
                        </FooterCol>
                    </div>
                    <div className="copyRight text-center">
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;