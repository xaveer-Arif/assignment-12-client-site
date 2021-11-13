import React from 'react';
import './Footer.css'
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        // <div className = ''>
            <div className = 'footer bg-dark text-white'>
                
            <Row className = 'pt-5'>
                
                <Col xm = {2} md = {2} className = ' ms-5 text-start ' >
                    
                    <h5 className ='mb-3'>About</h5>
                    <p>A Powerful & Beautiful Multi-Purpose WordPress theme with tons of advanced features.</p>
                    
                </Col>
               
                <Col xm = {1} md = {3} className = 'footer-border text-start'>
                    <h5>CONTACT INFO</h5>
                    <ul >
                        <li>732/21 Second Street, Manchester, King Street, Kingston United Kingdom</li>
                        <li>345-677-554</li>
                        <li>323-678-567</li>
                        <li>info@altairtheme.com</li>
                  
                        <li>themegoods.com</li>
                 
                    </ul>
                </Col>
                <Col xm = {1} md = {3} className = 'footer-border text-start'>
                    <h5>RECENT POSTS</h5>

                    <ul>
                        <li>Standard Blog Post With Image</li>
                        <li>Amazing Fullwidth Post</li>
                        <li>Link Post</li>
                        <li>Quote Post</li>
                    </ul>
                </Col>
                <Col xm = {1} md  = {2} className = 'footer-border text-start'>
                    <h5>WEBMD NETWORK</h5>
                    <ul>
                        <li>Medscape Live Events</li>
                        <li>WebMD</li>
                        <li>MedicineNet</li>
                        <li>eMedicineHealth</li>
                        <li>RxList</li>
                        <li>WebMD Corporate</li>
                    </ul>
                </Col>
               
            </Row>
            </div>
        // </div>
    );
};

export default Footer;