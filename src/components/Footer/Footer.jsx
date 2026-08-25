import { Link } from "react-router-dom";
import { contacts } from "../../data/academyData";
import dReelLogo from "../../assets/images/dreel-academy-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Copyright from "./Copyright";
import FooterLinks from "./FooterLinks";

export default function Footer() {

    const PRO = [
        "Products", [
            {
                title: "Programs",
                link: "/programs"
            },
            {
                title: "Enterprise Services",
                link: "/enterprise"
            },
            {
                title: "Scholarship",
                link: "/scholarship"
            },
            {
                title: "Community",
                link: "/community"
            }
        ]]

    const COM = [
        "Company", [
            {
                title: "About Us",
                link: "/about"
            },
            {
                title: "Careers",
                link: "/careers"
            },
            {
                title: "Blog",
                link: "/blog"
            },
            {
                title: "Press",
                link: "/press"
            }
        ]]

    const SUP = [
        "Support", [
            {
                title: "Help Center",
                link: "/help"
            },
            {
                title: "Contact Us",
                link: "/contact"
            },
            {
                title: "Privacy Policy",
                link: "/privacy-policy"
            },
            {
                title: "Terms of Service",
                link: "/terms-of-service"
            }
        ]]

    const PROG = [
        "Programs", [
            {
                title: "Cloud Native",
                link: "/programs/cloud-native-engineering"
            },

            {
                title: "DevOps Engineering",
                link: "/programs/devops-engineering"
            },
            {
                title: "Linux Systems",
                link: "/programs/linux-systems-engineering"
            },
            {
                title: "Platform Engineering",
                link: "/programs/platform-engineering"
            },
            {
                title: "Kubernetes Engineering",
                link: "/programs/kubernetes-engineering"
            }
        ]]

    const arrayOfArrays = [PRO, COM, SUP, PROG]

    return (
        <footer id="footer">
            <div className="bg-[#00000099] h-full flex flex-col gap-10 text-white lg:px-10 lg:pt-10">
                <div className="flex flex-col">
                    <div className="flex flex-col flex-1">
                        <Link to="/home" className="h-fit flex w-40">
                            <img src={dReelLogo} alt="Dreel Academy" className="w-full" />
                        </Link>
                        <article className="text-wrap ">Africa's premier platform for cloud-native engineering talent. Building the next generation of DevOps and Infrastructure engineers across Africa.</article>
                        <info className="mt-4 flex flex-col gap-3">
                            {contacts.filter(c => !c.detail.includes("Lagos")).map(c => (
                                <span className="inline-flex gap-2">
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
                        </info>
                    </div>
                    <div className="flex-2 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:grid-cols-4 lg:place-items-center">
                        {arrayOfArrays.map(aoa => (
                            <FooterLinks title={aoa[0]} array={aoa[1]} />
                        ))}
                    </div>
                </div>
                <Copyright />
            </div>
        </footer>
    )
}