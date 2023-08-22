import React from 'react'
import { BsFacebook, BsInstagram, BsGoogle, BsTwitter, BsLinkedin, BsMessenger } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="social">
                <p>Get Connected with us on social networks:</p>

                <ul>
                    <li><BsFacebook /></li>
                    <li><BsInstagram /></li>
                    <li><BsGoogle /></li>
                    <li><BsTwitter /></li>
                    <li><BsLinkedin /></li>
                    <li><BsMessenger /></li>
                </ul>
            </div>
            <div className="footer-detail">
                <div className="f-detail">
                    <h4>Company Name</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia natus, quae aliquam similique commodi tempore expedita sed porro illo magnam.</p>
                </div>
                <div className="f-detail">
                    <h4>Products</h4>
                    <ul>
                        <li>Fruits</li>
                        <li>Chicken</li>
                        <li>Vagetalbes</li>
                        <li>Rice</li>
                    </ul>
                </div>
                <div className="f-detail">
                    <h4>Usefull links</h4>
                    <ul>
                        <li>Your Account</li>
                        <li>Became an affilate</li>
                        <li>Shipping Rates</li>
                        <li>Help</li>
                    </ul>
                </div>
                <div className="f-detail">
                    <h4>Contact</h4>
                    <ul>
                        <li>Hyderabd, Sadar Pakistant</li>
                        <li>info@gmail.com</li>
                        <li>+923043042589</li>
                        <li>+923043042589</li>
                    </ul>
                </div>
            </div>
            <div className="copy-right">
                All right &copy; Reserved By @Amaar Hassnain
            </div>
        </div>
    )
}

export default Footer