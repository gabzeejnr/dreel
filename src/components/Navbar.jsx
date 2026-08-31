import { Link, NavLink, useNavigate } from "react-router-dom"
import dReelLogo from "../assets/images/dreel-academy-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useState } from "react";

export default function Navbar() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { text: "Programs", link: "/#programs" },
        { text: "Enterprise", link: "/#enterprise" },
        { text: "Community", link: "/#community" },
        { text: "Scholarship", link: "/#scholarship" },
        { text: "DCNSP", link: "/dcnsp" },
        { text: "SUSE Partnership", link: "/suse-partnership" },
        { text: "LMS", link: "/lms" }
    ];
    const smallNav = [
        { text: "Careers", link: "/careers" },
        { text: "Get Started", link: "/get-started" }
    ];


    // ============================================================================================
    // EFFECTS & FUNCTIONS ======================
    // ============================================================================================

    function navigateToSection(sectionId) {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth"
                })
            }, 500);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth"
            })
        }
    }
    function navigateToPage(page, top) {
        navigate(page);
        setTimeout(() => {
            document.getElementById(top)?.scrollIntoView({
                behavior: "instant"
            })
        }, 500);
    }

    function toggleNavbar() {
        setIsOpen(prev => !prev);
        console.log(isOpen);
    }

    return (
        <>
            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex lg:px-10 fixed w-full h-15 justify-center items-center top-8 text-white z-50">
                <div className="h-full flex justify-between items-center lg:gap-3">
                    <div className="left bg-[#202020] h-full flex items-center lg:gap-5 lg:text-[15px] rounded-4xl lg:pl-4 xl:px-8">
                        <Link to="/home" className="flex flex-1">
                            <img src={dReelLogo} alt="Dreel Academy" className="w-full h-auto" />
                        </Link>
                        {navItems.map(nav => {
                            const isRoute = nav.link.startsWith("/") && !nav.link.includes("#")

                            return isRoute ? (
                                nav.link === "/lms"
                                    ? <a className="flex-1 xl:py-3 lg:px-3 text-center xl:px-4" key={nav.link}>{nav.text}
                                    </a>
                                    : <button key={nav.link} className="flex-1 cursor-pointer"
                                        onClick={() => {
                                            navigateToPage(nav.link, "top")
                                        }}>{nav.text}
                                    </button>
                            ) : (
                                <Button key={nav.text} className="flex-1 cursor-pointer"
                                value={nav.text}
                                    onClick={() => {
                                        navigateToSection(nav.link.slice(2))
                                    }} />
                            )
                        })}
                    </div>
                    <div className="right-nav h-full min-w-50 flex xl:px-5 xl:gap-5 rounded-[2.5rem] items-center justify-around bg-[#202020]">
                        {smallNav.map(nav => (
                            <a key={nav.text}>{nav.text}</a>
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
                        {navItems.map(nav => {
                            const isRoute = nav.link.startsWith("/") && !nav.link.includes("#")
                            return isRoute
                                ? nav.link === "/lms"
                                    ? <a className="overflow-hidden inline-flex justify-between py-3 px-8" key={nav.link}>{nav.text}
                                        <Button type="button" value="&gt;" className="text-black" />
                                    </a>
                                    : <NavLink to={nav.link} key={nav.link} className="overflow-hidden inline-flex justify-between py-3 px-8"
                                        onClick={() => setIsOpen(false)}>{nav.text}
                                        <Button type="button" value="&gt;" className="text-black" />
                                    </NavLink>
                                : <Button key={nav.link} className="overflow-hidden cursor-pointer inline-flex justify-between py-3 px-8"
                                    onClick={() => {
                                        setIsOpen(false);
                                        navigateToSection(nav.link.slice(2))
                                    }}>{nav.text}
                                    <span className="text-black">&gt;</span>
                                </Button>
                        })}
                        <div className="flex gap-4 justify-center">
                            {smallNav.map(nav => (
                                <Button type="button" key={nav.link} className={`btn ${nav.text.includes("career") ? "btn-outline-bg" : "btn-bg-primary"}`} value={nav.text} />
                            ))}
                        </div>
                    </nav>
                )}
            </div>
        </>
    )
}