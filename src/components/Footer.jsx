import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-700 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-gray-400">
                            We have been successfully delivering car rental services since August 2016. At Wowcarz, we focus on making your travel plan come true by offering you affordable with hygienic interior and maintained car services.
                        </p>
                        <div className="flex space-x-4 py-3">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Facebook />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Twitter />
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Instagram />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Linkedin />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                    {/* Contact Us Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li>Email: <a href="mailto:contact@company.com" className="text-gray-300 hover:text-white">contact@company.com</a></li>
                            <li>Phone: <a href="tel:+1234567890" className="text-gray-300 hover:text-white">+1 234 567 890</a></li>
                        </ul>
                        <div className="mt-4">
                            <a
                                href="#"
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm"
                            >
                                Contact Form
                            </a>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="text-sm text-gray-400 space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">Blogs</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
