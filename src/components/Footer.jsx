import React from "react";
import { FOOTER_LINKS } from "../constants";
import { Link } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div>
                <footer className="bg-black bg-[url('../images/all-img/footer-bg-1.html')] bg-cover bg-center bg-no-repeat">
                    <div className="section-padding container">
                        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                            <div className="single-footer">
                                <div className="lg:max-w-[270px]">
                                    <a href="#" className="mb-10 block">
                                        <img
                                            src="/images/logo/footer-logo.svg"
                                            alt=""
                                        />
                                    </a>
                                    <p>
                                        Lorem ipsum amet, consectetur adipiscing
                                        elit. Suspendis varius enim eros
                                        elementum tristique. Duis cursus.
                                    </p>
                                    <ul className="flex space-x-4 pt-8">
                                        <li>
                                            <a
                                                href="#"
                                                className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                                            >
                                                <FaFacebook />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                                            >
                                                <FaWhatsapp />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                                            >
                                                <FaLinkedin />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
            transition hover:bg-primary hover:text-white"
                                            >
                                                <FaInstagram />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="single-footer">
                                <div className="flex space-x-[80px]">
                                    {FOOTER_LINKS.map((section, i) => (
                                        <div
                                            key={i}
                                            className="flex-1 lg:flex-none"
                                        >
                                            <h4 className="mb-8 text-2xl font-bold text-white">
                                                {section.title}
                                            </h4>
                                            <ul className="list-item space-y-5">
                                                {section.menu.map((tab, i) => (
                                                    <li key={i}>
                                                        <Link to={tab.link}>
                                                            {tab.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="single-footer">
                                <h4 className="mb-8 text-2xl font-bold text-white">
                                    Newsletter
                                </h4>
                                <div className="mb-8">
                                    Join over
                                    <span className="text-primary underline">
                                        68,000
                                    </span>
                                    people getting our emails Lorem ipsum dolor
                                    sit amet consectet
                                </div>
                                <div className="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
                                    <div className="flex-none">
                                        <span className=" ">
                                            <img
                                                src="/images/icon/mail.svg"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder="Enter your mail"
                                            className="border-none focus:ring-0"
                                        />
                                    </div>
                                </div>
                                <button className="btn btn-primary block w-full text-center">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base">
                        © Copyright 2022 | Edumim Template | All Rights Reserved
                    </div>
                </footer>
                <div className="rt-mobile-menu-overlay" />
            </div>
        </>
    );
};

export default Footer;
