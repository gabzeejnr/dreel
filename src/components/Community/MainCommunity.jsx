import { Code2, Computer, Square, Users } from "lucide-react"
import ComCard from "./ComCard"

export default function MainComunity() {

    const data = [
        {
            icon: <Users />,
            title: "Kubernetes Day Lagos",
            text: "Annual flagship event bringing together 500+ cloud engineers for talks, workshops, and networking."
        },
        {
            icon: <Square />,
            title: "Weely Webinars",
            text: "DevOps Fridays: Industry experts share best practices, case studies, and emerging technologies every Friday."
        },
        {
            icon: <Code2 />,
            title: "Hackathons & Challenges",
            text: "Build infrastructure projects, compete for prizes, and showcase your skills in real-world scenarios."
        }
    ]
    return (
        <section>
            <div className="bg-gray-50 flex flex-col text-black gap-10 items-center pt-10 pb-10">
                <div className="mb-10 mt-4 text-center flex flex-col gap-5 max-w-150">
                    <h1 className="primary-color font-bold tracking-[3px]">ENTERPRISE SERVICES</h1>
                    <h2 className="font-bold text-4xl">Cloud & DevOps <span className="primary-color">Expertise</span></h2>
                    <p className="text-[15.6px] text-wrap w-3/4 font-medium self-center tracking-[1px]">Join 3000+ engineers building Africa's cloud-native future through collaboration, knowledge sharing, and innovation.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-center px-3 md:px-10 gap-5 lg:px-13">
                    {data.map(d => (
                        <ComCard key={d.title} text={d.text}>{d.icon}</ComCard>
                    ))}
                </div>
            </div>
        </section>
    )
}