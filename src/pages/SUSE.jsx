import { useNavigate } from "react-router-dom"
import TopPill from "../components/Hero/TopPill";;
import Button from "../components/Button"
import SUSECard from "../components/SUSE/SUSECard";
import ListCard from "../components/SUSE/ListCard";
import Checks from "../components/SUSE/Checks";
import { useTitle } from "../hooks/title.hook";
import { pillArray, card1, card2, checks } from "../components/SUSE/data";

export default function SUSE() {

    const navigate = useNavigate()


    useTitle("SUSE Partnership")

    return (
        <section className="min-h-screen pt-20 sm:pt-5 px-3 lg:pt-30 mb-10 lg:pb-25 bg-gray-50 lg:px-40">
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
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 sm:10 md:15">
                {card1.map(c => (
                    <div data-aos="flip-down">
                        <SUSECard title={c.title} text={c.text} />
                    </div>
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
                {checks.map((c, i) => (
                    <div data-aos="flip-up" data-aos-delay={i * 500}>
                        <Checks text={c} />
                    </div>
                ))}
            </div>
        </section>
    )
}