import { Link, NavLink } from "react-router-dom"
import dReelLogo from "../assets/images/dreel-academy-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { text: "Programs", link: "#programs" },
        { text: "Enterprise", link: "#enterprise" },
        { text: "Community", link: "#community" },
        { text: "Scholarship", link: "#scholarship" },
        { text: "DCNSP", link: "/dcnsp" },
        { text: "SUSE Partnership", link: "/suse" },
        { text: "LMS", link: "/lms" }
    ];
    const smallNav = [
        { text: "Careers", link: "/careers" },
        { text: "Get Started", link: "/get-started" }
    ];


    // ============================================================================================
    // EFFECTS & FUNCTIONS ======================
    // ============================================================================================

    function toggleNavbar() {
        setIsOpen(prev => !prev);
        console.log(isOpen);
    }

    return (
        <>
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex px-10 fixed w-full h-15 justify-center top-8 text-white z-50">
                <div className="container h-full flex justify-between items-center">
                    <div className="left bg-[#202020] h-full flex items-center gap-10 rounded-4xl px-8">
                        <Link to="/home" className="h-full flex">
                            <img src={dReelLogo} alt="Dreel Academy" className="w-full" />
                        </Link>
                        {navItems.map(nav => (
                            <a href={nav.link} key={nav.link}>{nav.text}</a>
                        ))}
                    </div>
                    <div className="right-nav h-full min-w-60 flex px-5 gap-6 rounded-[2.5rem] items-center justify-around bg-[#202020]">
                        {smallNav.map(nav => (
                            <a href={nav.link} key={nav.link}>{nav.text}</a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* MOBILE NAV */}
            <div className="fixed top-4 left-0 z-40 w-full px-4 flex flex-col lg:hidden">
                <div className="flex justify-between">
                    <Link to="/home" className="w-15 h-15 flex items-center justify-center bg-black rounded-[50%] p-0">
                        <img src={dReelLogo} />
                    </Link>
                    <Button type="button" className="text-white bg-black cursor-pointer flex items-center justify-center h-15 w-15 rounded-4xl text-3xl transition-all duration-700"
                        onClick={toggleNavbar}>
                        <FontAwesomeIcon icon={!isOpen ? faBars : faX} />
                    </Button>
                </div>

                {isOpen && (
                    <nav className="lg:hidden flex flex-col mt-3 rounded-4xl font-medium text-black z-50 sm:w-1/2 text-center bg-white py-2">
                        {navItems.map(nav => (
                            <a href={nav.link} className="overflow-hidden inline-flex justify-between py-3 px-8 transition-all duration-300"
                                onClick={() => setIsOpen(false)}>{nav.text}
                                <Button type="button" value="&gt;" className="text-black" />
                            </a>
                        ))}
                        {smallNav.map(nav => (
                            <Button type="button" className={`btn ${nav.text.includes("career") ? "btn-outline-bg" : "btn-bg-primary"}`} value={nav.text} />
                        ))}
                    </nav>
                )}
            </div>
        </>
    )
}