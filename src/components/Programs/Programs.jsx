import { useState } from "react";
import Button from "../Button";
import ProgCards from "./ProgCards";
import CloudNative from "../../assets/images/Cloud-Native-Icon.png";
import DevOps from "../../assets/images/DevOps-Engineering-icon.png";
import LinuxSystems from "../../assets/images/Linux-Administration-Engineering.png";
import Platform from "../../assets/images/Platform-Engineering-Icon.png";

export default function Programs() {

    const [toggle, setToggle] = useState(4)
    const cardInfo = [
        {
            img: CloudNative,
            title: "Cloud Native Engineering",
            subtitle: "Kubernetes, containers, service mesh, and cloud platforms.",
            duration: "12 weeks",
            link: "/programs/cloud-native-engineering"
        },
        {
            img: DevOps,
            title: "DevOps Engineering",
            subtitle: "CI/CD, IaC, pipelines and automation at scale.",
            duration: "10 weeks",
            link: "/programs/devops-engineering"
        },
        {
            img: LinuxSystems,
            title: "Linux Systems Engineering",
            subtitle: "Systems adminisstration, networking, and security fundamentals.",
            duration: "8 weeks",
            link: "/programs/linux-systems-engineering"
        },
        {
            img: Platform,
            title: "Platform Engineering",
            subtitle: "Playform design, SRE practices and observability.",
            duration: "14 weeks",
            link: "/programs/platform-engineering"
        },
        {
            img: CloudNative,
            title: "Kubernetes Engineering",
            subtitle: "Advanced cluster architecture, orchestration, and production-ready deployments.",
            duration: "10 weeks",
            link: "/programs/kubernetes-engineering"
        },
        {
            img: DevOps,
            title: "DevSecOps",
            subtitle: "Security-first DevOps practices with CI/CD, compliance, and threat modeling.",
            duration: "12 weeks",
            link: "/programs/devsecops"
        },
        {
            img: Platform,
            title: "Site Reliability Engineering (SRE)",
            subtitle: "Reliability, observability, incident response, and resilient platform operations.",
            duration: "12 weeks",
            link: "/programs/site-reliability-engineering"
        },
        {
            img: Platform,
            title: "AI Infrastructure Engineering",
            subtitle: "Building scalable, efficient AI infrastructure for training and deployment.",
            duration: "14 weeks",
            link: "/programs/ai-infrastructure-engineering"
        },
        {
            img: LinuxSystems,
            title: "SUSE Linux Enterprise Administration",
            subtitle: "Enterprise Linux administration, automation, and systems management.",
            duration: "14 weeks",
            link: "/programs/SUSE-linux"
        }
    ]

    return (
        <section className="text-center mt-15 pb-10">
            <h3 className="font-semibold text-3xl mb-5">Our Programs</h3>
            <p className="mb-4 text-[#1a1919] font-medium">Practical, instructor-led programs that prepare you for real-world cloud-native engineering roles.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 transition-all duration-1000">
                {cardInfo.slice(0, toggle).map((card) => (
                    <div data-aos="zoom-in">
                        <ProgCards image={card.img} title={card.title} subtitle={card.subtitle} duration={card.duration} link={card.link} />
                    </div>
                ))}
            </div>
            <Button type="button" value={toggle === 4 ? "View All Programs" : "Collapse All"} onClick={() => setToggle(prev => {
                if (prev === 4) return cardInfo.length;
                return 4;
            })}
                className="btn btn-outline-primary mt-6 justify-self-center cursor-pointer" />
        </section>
    )
}