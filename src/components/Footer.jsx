import React from 'react';
import logo from '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 border-t border-gray-400">
            <aside className='-mt-4'>
                <img src={logo} alt="" className='w-24 h-24' />
                <p>
                    <span className="text-xl font-bold">QuestWork</span><br />
                    Providing reliable tech since 2002
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Bill Tracking</a>
                <a className="link link-hover">Card Payments</a>
                <a className="link link-hover">Reports</a>
                <a className="link link-hover">Balance Insights</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Blog</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of Use</a>
                <a className="link link-hover">Privacy Policy</a>
                <a className="link link-hover">Cookie Policy</a>
            </nav>
        </footer>
    );
};

export default Footer;