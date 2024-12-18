// import React from 'react';
import { Link } from 'react-router-dom';
import {   Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">IIIT-B Startup Cell</h3>
            <p className="text-gray-400">Empowering innovation and entrepreneurship at IIIT Bhagalpur.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><a href="#startups" className="text-gray-400 hover:text-white">Startup</a></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Team</Link></li>
              <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic">
              IIIT Bhagalpur<br />
              Bihar, India<br />
              <a href="mailto:startup@iiitbh.ac.in" className="hover:text-white">startupcell@iiitbh.ac.in</a>
            </address>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a> */}
              {/* <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a> */}
              <Link to="https://www.instagram.com/startupcelliiitbhagalpur?igsh=MXUyYTRkcWljbGx0eg==" className="text-gray-400 hover:text-white"><Instagram /></Link>
              <Link to="https://www.linkedin.com/in/start-up-cell-iiit-bhagalpur-641054305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white"><Linkedin /></Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IIIT Bhagalpur Startup Cell. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;