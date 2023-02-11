import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/image/logo-removebg-preview.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>

                <img className='h-[60px]' src={img}></img>
                <p className='text-secondary'>MotorBike Fragments<br />A Motorbike Parts Manufacturing Company</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blogs</Link>

                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link to='/blogs'>My Portfolio</Link>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;