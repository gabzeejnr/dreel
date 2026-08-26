import { faBell, faCalendarDay, faGlobe, faMessage, faUsers } from "@fortawesome/free-solid-svg-icons"
import Info from "../Info"
import Button from "../Button"
import RightImage from "../Hero/RightImage";
import community from "../../assets/images/Dreel-community-image.png";
import HoverAboveCard from "../HoverAboveCard";
import { Globe, MessageCircle } from "lucide-react";
import FormModal from "./FormModal";
import { useState } from "react";

export default function Community() {

    const [showModal, setShowModal] = useState(false)
    const data = [
        {
            icon: faUsers,
            title: "Study Groups",
            text: "Connect with like-minded learners and form study groups for collaborative learning."
        },
        {
            icon: faCalendarDay,
            title: "Live Sessions",
            text: "Join live Q&A sessions and workshops with industry experts."
        },
        {
            icon: faGlobe,
            title: "Global Community",
            text: "Connect with students from 150+ countries worldwide."
        },
        {
            icon: faMessage,
            title: "Discussion Forums",
            text: "Engage in meaningful discussions and get answers from peers and mentors."
        },
        {
            icon: faBell,
            title: "Peer Support",
            text: "Get help and support from fellow learners anytime you need it."
        },
        {
            icon: faUsers,
            title: "Project Collaboration",
            text: "Work on real-world projects with your peers."
        }
    ]

    return (
        <section id="community" className="px-5 pt-0 md:p-20 py-24 flex flex-col lg:flex-row gap-8 bg-gray-50"> {/* px-5 md:p-20 py-24 flex flex-col lg:flex-row gap-8 */}
            <div className="flex flex-col flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-5">
                    {data.map(d => (
                        <Info key={d.title} icon={d.icon} title={d.title} text={d.text} />
                    ))}
                </div>
                <div className="mt-10">
                    <Button type="button" value="Join Community" className="btn btn-bg-primary" onClick={() => setShowModal(true)} />
                </div>
            </div>
            <div className="flex-1 relative rounded-4xl grid place-items-center lg:px-20"
                data-aos="fade-down">
                <div className="absolute z-3 -top-5 right-0">
                    <HoverAboveCard title="24/7 Support" info="Always here">
                        <MessageCircle color="#1D4ED8" />
                    </HoverAboveCard>
                </div>
                <RightImage src={community} />
                <div className="absolute z-3 bottom-0 left-10">
                    <HoverAboveCard title="150+ Countries" info="Worldwide reach">
                        <Globe color="#1D4ED8" />
                    </HoverAboveCard>
                </div>
            </div>
            <FormModal showModal={showModal} setShowModal={setShowModal} />
        </section>
    )
}