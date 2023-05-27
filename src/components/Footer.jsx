import "./FooterStyle.css";
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin,FaFacebook,FaHeart} from "react-icons/fa";

import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>123 Housing society
                            </p>
                            <p>
                                odisha , India
                            </p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            7978813614
                        </h4>

                    </div>
                    <div className="mail">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            Example@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                         voluptate quidem maxime sint vel officiis.
                    </p>
                    <div className="social-link">
                        <FaFacebook size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }}/>
                        <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }}/>

                    </div>
                </div>
            </div>
           
            <div className="footer-last-section">
                <p>
                    CopyRight @2023 All Rights Reserved | This template is made with <FaHeart size={20} style={{color:"red"}}/> by Abhisek.
                </p>
            </div>
        </div>
    )
}

export default Footer