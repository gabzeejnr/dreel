import { useState, useEffect } from "react"
import { Code2, Square, Users } from "lucide-react"
import ComCard from "./ComCard"
import Button from "../Button"
import FormModal from "./FormModal"

export default function MainComunity() {

    const [showModal, setShowModal] = useState(false);

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


    /*  useEffect(() => {
         document.body.style.overflow = showModal ? "hidden" : "";
 
         return () => {
             document.body.style.overflow = "";
         };
     }, [showModal]); */

    return (
        <section className="bg-gray-50 border">
            <div className="flex flex-col text-black gap-10 items-center pt-10 pb-10">
                <div className="mb-10 mt-4 text-center flex flex-col gap-5 max-w-150 px-10">
                    <h1 className="primary-color font-bold tracking-[3px]">COMMUNITY</h1>
                    <h2 className="font-bold text-4xl">Dreel Cloud Native <span className="primary-color">Community</span></h2>
                    <p className="text-[15.6px] text-wrap w-full md:w-3/4 font-medium self-center tracking-[1px]">Join 3000+ engineers building Africa's cloud-native future through collaboration, knowledge sharing, and innovation.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-center px-5 md:px-10 gap-5 lg:px-13">
                    {data.map(d => (
                        <ComCard key={d.title} text={d.text} title={d.title}>{d.icon}</ComCard>
                    ))}
                </div>
                <Button type="button" value="Join Our Community" className="btn btn-bg-primary mt-10"
                    onClick={() => setShowModal(true)} />
            </div>
            <FormModal showModal={showModal} setShowModal={setShowModal} />
        </section>
    )
}