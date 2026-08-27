import Button from "../Button";
import EntCard from "./EntCard";
import { faComputer, faServer, faPeace, faBriefcase, faEye } from "@fortawesome/free-solid-svg-icons";

export default function Enterprise() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const cardItems = [
        {
            icon: faServer,
            title: "Kubernetes Deployment",
            subtitle: "Rancher & Cloud Native",
            text: "Deploy and manage production-grade Kubernetes clusters with Rancher. Multi-cloud orchestration and GitOps workflows.",
            left: "50+ Deployments",
            right: "99.99% Uptime"
        },
        {
            icon: faPeace,
            title: "Cloud Migration",
            subtitle: "AWS, Azure, On-Prem",
            text: "Seamless migration of workloads from legacy systems to cloud-native platforms. Zero-downtime deployments.",
            left: "100+ Migrations",
            right: "0 Downtime"
        },
        {
            icon: faBriefcase,
            title: "DevOps Transformation",
            subtitle: "CI/CD Infrastructure",
            text: "Build robust CI/CD pipelines, infrastructure as code, and automated deployment strategies with security-first approach.",
            left: "2x Faster Deploy",
            right: "60% Cost Reduction"
        },
        {
            icon: faEye,
            title: "Observability & Monitoring",
            subtitle: "Prometheus, Grafana, SuSE",
            text: "Real-time monitoring, logging, and alerting for mission-critical infrastructure with industry-standard tools.",
            left: "Real-time Alerts",
            right: "100% Visibility"
        }
    ]

    return (
        <section id="enterprise" className="">
            <div className="background-overlay flex flex-col text-white gap-10 items-center pt-10 pb-10">
                <div className="mb-10 mt-4 text-center flex flex-col gap-5 max-w-150">
                    <h1 className="primary-color font-bold tracking-[3px]">ENTERPRISE SERVICES</h1>
                    <h2 className="font-bold text-4xl">Cloud & DevOps <span className="primary-color">Expertise</span></h2>
                    <p className="text-[15.6px] text-wrap w-3/4 font-medium self-center tracking-[1px]">Beyond training—Dreel Limited provides enterprise-grade cloud infrastructure, Kubernetes deployment, and DevOps transformation services.</p>
                </div>
                <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-center lg:grid-cols-4 px-3 md:px-10 gap-5 lg:px-13">
                    {cardItems.map(card => (
                        <div data-aos="zoom-in">
                            <EntCard key={card.title} icon={card.icon} title={card.title} subtitle={card.subtitle}
                            text={card.text} left={card.left} right={card.right} />
                        </div>
                    ))}
                </div>
                <Button type="button" className="btn btn-bg-primary cursor-pointer" value="Request Enterprise Demo" />
            </div>
        </section>
    )
}