import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Info({ icon, title, text }) {
    return (
        <div className="flex gap-4">
            <div className="h-8 w-8 px-3 rounded-[50%] flex items-center justify-center text-white text-[16px] bg-[#1d4fd8b0]">
                <FontAwesomeIcon icon={icon} />
            </div>
            <div >
                <h1 className="font-semibold">{title}</h1>
                <p className="text-gray-600 text-wrap text-[14px]">{text}</p>
            </div>
        </div>
    )
}