import React from 'react';
import { Link} from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div id="foot" className="row">
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4 className="ps-3">About Us</h4>
                
        <Link className="nav-link active fs-5 text-light" aria-current="page" to="/home"><small>Home</small></Link>
        <Link className="nav-link fs-5 text-light" to="/service"><small>Service</small></Link>
        <Link className="nav-link fs-5 text-light" to="/covid"><small>Covid</small></Link>
        <Link className="nav-link fs-5 text-light" to="/finddoctor"><small>Find Doctor</small></Link>
        <Link className="nav-link fs-5 text-light" to="/visitorPolicy"><small>Visitors Policy</small></Link>
        
                
                
                </div>

            </div>
            <div className="col-md-3 mt-3">
                <div style={{marginLeft:"15px"}}>
                <h4>Contact Us</h4>
                <p>
                <li>Email:ahmod.fateh@gmail.com</li> 
                <li>Phone: +1646524892</li> 
                <li>Address: Bronx,0 st,Nyc,USA</li> 
                </p>
                </div>

            </div>
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4>Quality & Innonation</h4>
                <li>Arts in Medicine</li>
                <li>Health Home – Care</li>
                <li>Coordination Program</li>
                <li>Leadership in Health Care</li>
                

            </div>
                </div>
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4>Follow Us</h4>
                <h6  ><i className="fab fa-facebook-square text-primary fs-2"></i><Link href=""> <small className="text-light">Facbook</small></Link></h6>
                <h6 className="text-light"><i className="fab fa-youtube-square text-danger fs-2"></i><Link href=""> <small className="text-light"> YouTube</small></Link></h6>
                <h6 ><i className="fab fa-instagram-square fs-2"></i><Link href=""><small className="text-light"> instagram</small></Link></h6>
                
                <h6  ><i className="fab fa-snapchat fs-2 text-warning"></i><Link href=""> <small className="text-light"> Snapchat</small></Link></h6>

                </div>
            </div>
            
        </div>
        <div className="footer2 " >
                <p className="d-flex justify-content-center">Privacy Policy|Terms of Services|Cookies Policy</p>
                <small className="d-flex justify-content-center">© 2021 Bumrungrad International Hospital A Joint Commission International (JCI) accredited hospital
               </small>
            </div>
        </div>
    );
};

export default Footer;