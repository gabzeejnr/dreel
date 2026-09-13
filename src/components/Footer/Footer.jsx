import { Link } from "react-router-dom";
import { contacts } from "../../data/academyData";
import dReelLogo from "../../assets/images/dreel-academy-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";
import { arrayOfArrays } from "./data";

export default function Footer() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    return (
        <footer id="footer">
            <div className="bg-[#00000099] h-full flex flex-col gap-10 text-white lg:px-10 lg:pt-10">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">
                    <div className="flex flex-col flex-1 pl-5">
                        <Link to="/home" className="h-fit flex w-40">
                            <img src={dReelLogo} alt="Dreel Academy" className="w-full" />
                        </Link>
                        <article className="text-wrap w-full sm:w-120 md:w-full">Africa's premier platform for cloud-native engineering talent. Building the next generation of DevOps and Infrastructure engineers across Africa.</article>
                        <div className="mt-4 flex flex-col gap-3">
                            {contacts.filter(c => !c.detail.includes("Lagos")).map(c => (
                                <span className="inline-flex gap-2" key={c.detail}>
                                    <span>
                                        <FontAwesomeIcon icon={c.icon} />
                                    </span>
                                    <a href={c.detail.includes("@")
                                        ? `mailto: ${c.detail}`
                                        : `tel:${c.detail}`
                                    }>{c.detail}</a>
                                </span>
                            ))}
                            <span className="inline-flex gap-2">
                                <span>
                                    <FontAwesomeIcon icon={contacts[2].icon} />
                                </span>
                                {contacts[2].detail}
                            </span>
                        </div>
                    </div>
                    <div className="pl-5 flex-2 grid grid-cols-2 sm:grid-cols-3 gap-10 md:grid-cols-4 lg:place-items-center">
                        {arrayOfArrays.map((aoa, i) => (
                            <FooterLinks title={aoa[0]} array={aoa[1]} key={i + 9} />
                        ))}
                    </div>
                </div>
                <Copyright />
            </div>
        </footer>
    )
}