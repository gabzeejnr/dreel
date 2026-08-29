import { useNavigate } from "react-router-dom"
import TopPill from "../components/Hero/TopPill";;
import Button from "../components/Button"
import SUSECard from "../components/SUSE/SUSECard";
import ListCard from "../components/SUSE/ListCard";
import Checks from "../components/SUSE/Checks";

export default function SUSE() {

    const navigate = useNavigate()
    const pillArray = ["Official SUSE One Partner"];
    const card1 = [
        {
            title: "Cloud Infrastructure",
            text: "Design, deploy and manage modern cloud-native infrastructure with enterprise-grade technologies for scalable, secure and resilient platforms."
        },
        {
            title: "Professional Services",
            text: "Deliver consulting, migration, implementation and support services that help organizations modernize and operate with confidence."
        },
        {
            title: "Enterprise Training",
            text: "Build high-performing cloud teams through instructor-led training, hands-on labs, certification preparation and workforce development."
        },
        {
            title: "Cloud Native Solutions",
            text: "Develop secure, scalable applications and platforms using cloud-native patterns, microservices and enterprise integration."
        },
        {
            title: "Managed Services",
            text: "Operate cloud environments with managed Kubernetes, infrastructure monitoring, backup, security hardening and performance optimization."
        },
        {
            title: "Open Source Innovation",
            text: "Help organizations adopt modern open-source technologies with reliability, security, support and long-term sustainability in mind."
        }
    ];
    const card2 = [
        {
            title: "Enterprise Solutions",
            text: "We design, deploy and manage modern cloud-native infrastructure using enterprise-grade technologies that enable organizations to build scalable, secure and resilient digital platforms.",
            list: [
                "Kubernetes Platforms",
                "Cloud Infrastructure",
                "Container Platforms",
                "Hybrid & Multi-Cloud",
                "High Availability Architecture",
                "Platform Engineering"
            ]
        },
        {
            title: "Professional Services",
            text: "From planning to production, we help organizations modernize infrastructure with expert consulting, migration, deployment, integration and enterprise support services.",
            list: [
                "Infrastructure Assessment",
                "Cloud Migration",
                "Kubernetes Deployment",
                "Linux Modernization",
                "Platform Automation",
                "DevOps Transformation"
            ]
        },
        {
            title: "Enterprise Training",
            text: "Through Dreel Academy, we provide instructor-led training, hands-on labs, certification preparation and workforce development programs that equip teams with enterprise-ready cloud skills.",
            list: [
                "• Linux Administration",
                "Kubernetes",
                "Cloud Computing",
                "DevOps",
                "Platform Engineering",
                "AI Infrastructure",
                "Enterprise Containers"
            ]
        },
        {
            title: "Solution Development",
            text: "We develop secure, scalable and cloud-native applications designed for modern businesses, integrating enterprise open-source technologies into production-ready solutions.",
            list: [
                "Cloud Native Applications",
                "API Platforms",
                "Microservices",
                "Enterprise Integration",
                "Digital Transformation",
                "Infrastructure Automation"
            ]
        },
        {
            title: "Cloud Marketplace & Managed Services",
            text: "Scale faster with managed cloud solutions, continuous monitoring, automation and operational support for enterprise environments.",
            list: [
                "• Managed Kubernetes",
                "Managed Linux Servers",
                "Infrastructure Monitoring",
                "Backup & Disaster Recovery",
                "Security Hardening",
                "Performance Optimization"
            ]
        },
        {
            title: "Innovation & Open Source Excellence",
            text: "We help organizations adopt modern open-source technologies while ensuring reliability, security, scalability and long-term sustainability.",
            list: [
                "Open Source First",
                "Enterprise Reliability",
                "Cloud Native Architecture",
                "Security by Design",
                "Continuous Innovation",
                "Long-Term Support"
            ]
        }
    ]
    const checks = [
        "Official SUSE One Partner",
        " Enterprise Open Source Expertise",
        "Cloud Native Engineering Specialists",
        "Professional Training & Certification",
        "End-to-End Consulting Services",
        "Scalable Infrastructure Solutions",
        "Africa-Focused Delivery",
        "Trusted Technology Partner"
    ]

    return (
        <section className="min-h-screen pt-20 sm:pt-5 px-3 lg:pt-30 lg:pb-25 bg-gray-50 lg:px-40">
            <div className="grid place-items-center">
                <TopPill array={pillArray} />
            </div>
            <div className="text-center flex flex-col items-center mt-5">
                <h1 className="font-bold text-[35px] lg:tracking-[2px] leading-10">
                    Delivering Enterprise Open Source Solutions Across Africa
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                    As an official member of the SUSE One Partner Program, Dreel delivers enterprise-grade cloud infrastructure, open-source technology, consulting, training and managed services backed by SUSE's trusted platform.
                </p>
            </div>
            <div className="flex gap-3 mt-4 mb-10 justify-center text-sm px-10 items-center">
                <Button type="button" value="View DCNSP" className="btn btn-outline-primary cursor-pointer"
                    onClick={() => navigate("/dcnsp")} />
            </div>
            <div className="text-center flex flex-col items-center mt-10 md:mt-20">
                <h1 className="font-bold text-[25px] lg:tracking-[1px] leading-10">
                    Our SUSE Partnership Capabilities
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                    Modern enterprise services and training built for organizations, governments, universities and future-focused teams across Africa.
                </p>
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4 sm:10 md:15">
                {card1.map(c => (
                    <SUSECard title={c.title} text={c.text} />
                ))}
            </div>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 mt-5">
                {card2.map(c => (
                    <ListCard title={c.title} text={c.text} list={c.list} />
                ))}
            </div>
            <div className="text-center flex flex-col items-center mt-10 md:mt-20">
                <h1 className="font-bold text-[25px] lg:tracking-[1px] leading-10">
                    Why Partner with Dreel?
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                    Enterprise open source expertise, cloud-native engineering, professional training and end-to-end consulting for organizations and teams across Africa.
                </p>
            </div>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10">
                {checks.map(c => (
                    <Checks text={c} />
                ))}
            </div>
        </section>
    )
}