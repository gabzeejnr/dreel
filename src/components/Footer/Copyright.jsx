import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialMedia } from "../../data/academyData"

export default function Copyright() {

    const year = new Date().getFullYear()

    return (
        <div className="flex flex-col md:flex-row py-3 md:justify-between mx-5 border-t items-center lg:px-8 px-4 text-sm md:text-[15px]">
            <span className=" lg:text-[17px]">&copy;{year} Dreel Limited. All rights reserved. Building Africa's Cloud-Native Engineering Talent Ecosystem.</span>
            <div className="inline-flex gap-2">
                {socialMedia.map(s => (
                    <a href={s.link}>
                        <div className="h-10 w-10 grid place-items-center text-2xl">
                            <FontAwesomeIcon icon={s.icon} color={s.color} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}