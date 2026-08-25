import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialMedia } from "../../data/academyData"

export default function Copyright() {

    const year = new Date().getFullYear()

    return (
        <div className="h-20 flex flex-col lg:flex-row lg:justify-between border-t items-center lg:px-8">
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