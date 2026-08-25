import { Link, NavLink } from "react-router-dom"
import dReelLogo from "../assets/images/dreel-academy-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { text: "Programs", link: "/programs" },
        { text: "Enterprise", link: "/enterprise" },
        { text: "Community", link: "/community" },
        { text: "Scholarship", link: "/scholarship" },
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
            <nav className="hidden lg:flex fixed w-full h-15 justify-center top-8 text-white z-50">
                <div className="container h-full flex justify-between items-center">
                    <div className="left bg-[#202020] h-full flex items-center gap-10 rounded-4xl px-8">
                        <Link to="/home" className="h-full flex">
                            <img src={dReelLogo} alt="Dreel Academy" className="w-full" />
                        </Link>
                        {navItems.map(nav => (
                            <NavLink to={nav.link} key={nav.link}
                                className={({ isActive }) => isActive ? "bg-blue-700" : ""}>{nav.text}</NavLink>
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
            <div className="fixed flex flex-col lg:hidden items-end z-50 w-full pt-2">
                <Button type="button" className="text-white bg-gray-900 cursor-pointer w-10 h-9 text-2xl"
                    onClick={toggleNavbar}>
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                {isOpen && (
                    <nav className="text-white z-50 w-full h-screen md:w-1/2 text-center flex flex-col bg-gray-800 py-2 transition-all duration-1000">
                        {navItems.map(nav => (
                            <NavLink to={nav.link} className="overflow-hidden py-2 border">{nav.text}</NavLink>
                        ))}
                        {smallNav.map(nav => (
                            <NavLink to={nav.link} className={({ isActive }) => (`py-2 ${isActive ? "bg-blue" : ""}`)}>{nav.text}</NavLink>
                        ))}
                    </nav>
                )}
            </div>
        </>
    )
}