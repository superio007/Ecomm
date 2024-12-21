import {Link} from 'react-router-dom'
import Qr from '../assets/QrCode.png'
import playStore from '../assets/GooglePlay.png'
import appStore from '../assets/appStore.png'
import {FaFacebookF,FaTwitter ,FaInstagram ,FaLinkedinIn} from 'react-icons/fa'
const Footer = ()=>{
    return(
        <>
        <div className='d-flex justify-content-between align-items-center bg-black text-white p-5'>
            <span className='container d-flex justify-content-between'>
                <div>
                    <h4 className="fw-bold">Exclusive</h4>
                    <p>Subscribe</p>
                    <p>Get 10% off your first order</p>
                    
                </div>
                <div>
                    <h4 className="fw-bold">Support</h4>
                    <p>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
                    <p>exclusive@gmail.com</p>
                    <p>+88015-88888-9999</p>
                </div>
                <div>
                    <h4 className="fw-bold">Account</h4>  
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/account'}><p>My Account</p></Link>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/login'}><p>Login / Register</p></Link>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/cart'}><p>Cart</p></Link>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/wishlist'}><p>Wishlist</p></Link>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/shop'}><p>Shop</p></Link>
                </div>
                <div>
                    <h4 className="fw-bold">Quick Link</h4>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/privacy'}><p>Privacy Policy</p></Link>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/terms'}><p>Terms & Conditions</p></Link>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/faq'}><p>FAQ</p></Link>
                    <Link className='nav-color text-white link-underline link-underline-opacity-0' to={'/contact'}><p>Contact Us</p></Link>
                </div>
                <div>
                    <h4 className="fw-bold">Download App</h4>
                    <p>Save $3 with App New User Only</p>
                    <div className="row">
                        <div className="col-4">
                            <img src={Qr} alt="" />
                        </div>
                        <div className="col-6">
                            <img src={playStore} alt="" />
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                    <div className='d-flex gap-5 py-3 align-items-center'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedinIn />
                    </div>
                </div>
            </span>
        </div>
        </>
    )
}
export default Footer