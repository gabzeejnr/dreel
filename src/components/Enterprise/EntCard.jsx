import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EntCard({ icon, title, subtitle, text, left, right }) {

    return (
        <div className="flex flex-col bg-white h-full text-black p-5 rounded-4xl">
            <div className="flex flex-col items-center">
                <div className="card-icon-bg mb-4">
                    <FontAwesomeIcon icon={icon} className="text-[#1D4ED8]" />
                </div>
                <h3 className="mb-1 font-bold text-[.975rem]">{title}</h3>
                <span className="block mb-3 font-medium text-xs">{subtitle}</span>
            </div>
            <div className="w-full mb-5 text-[16px] font-medium leading-[1.7]">
                <p className="text-wrap text-center">{text}</p>
            </div>
            <div className="flex gap-3 justify-center px-1 py-2 items-center text-[14px]">
                <span className="inline-flex gap-1">
                    <span className="font-semibold">{String(left.split(" ")[0])}</span>
                    <span>{String(left.split(" ").slice(1).join(" "))}</span>
                </span>
                <span className="inline-flex">
                    <span>{right}</span>
                </span>
            </div>
        </div>
    )
}