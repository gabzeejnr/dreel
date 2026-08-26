import Info from "../Info"
import Button from "../Button"
import Card from "./Card"
import { faAnchorLock, faBriefcase, faScaleBalanced, faShield } from "@fortawesome/free-solid-svg-icons"

export default function Scholarship() {

    const scholarshipInfo = [
        {
            icon: faAnchorLock,
            title: "NYSC Members",
            text: "National Youth Service Corps members receive full tuition sponsorship. Flexible schedules for service commitments."
        },
        {
            icon: faShield,
            title: "300-Level Students",
            text: "Undergraduates in 300-level (CGPA ≥ 4.0) eligible for merit-based scholarships. Pathway to career acceleration."
        },
        {
            icon: faBriefcase,
            title: "Career Guarantee",
            text: "Dreel job pipeline for graduates. Placement assistance and corporate partnerships across Nigeria and Africa."
        },
        {
            icon: faScaleBalanced,
            title: "Industry Certification",
            text: "Dreel + Partner certifications in Kubernetes, DevOps, and Linux. Recognized credentials for job market."
        }
    ]

    return (
        <section id="scholarship" className="px-5 md:p-20 py-24 flex flex-col lg:flex-row gap-8 bg-gray-50">
            <div className="flex flex-col flex-1">
                <div>
                    <h1 className="primary-color tracking-[1px] mb-2 font-bold">SCHOLARSHIP PROGRAM</h1>
                    <div className="font-bold text-[26px] mb-2">Dreel Future Tech <span className="primary-color">Scholarship</span></div>
                    <p className="text-gray-600 text-wrap mb-10">We believe in democratizing access to world-class cloud and DevOps training. The Dreel Future Tech Scholarship offers 100% tuition-free programs to qualified candidates.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5">
                    {scholarshipInfo.map(s => (
                        <Info key={s.title} icon={s.icon} title={s.title} text={s.text} />
                    ))}
                </div>
                <div className="mt-10">
                    <Button type="button" value="Apply for Scholarship" className="btn btn-bg-primary" /></div>
            </div>
            <div className="flex-1 grid place-items-center">
                <Card />
            </div>
        </section>
    )
}