// import { Link } from "react-router-dom";

export default function ProgCards({ image, title, subtitle, duration, link }) {
    return (
        <div className="card h-full rounded-3xl p-4 flex flex-col items-center text-center">
            <img src={image} alt={`${title} icon`} className="program-card-icon mb-4 w-18 h-18 object-contain block m-[0px auto 1rem] align-middle overflow-clip" />
            <h3 className="font-bold mb-1">{title}</h3>
            <p className="text-sm text-gray-500 mb-3">{subtitle}</p>
            <div className="flex justify-center gap-3 font-semibold items-center text-[#1D4ED8]">
                <span className="bg-[#1D4ED81F] opacity-90 p-[4.9px] rounded-lg">{duration}</span>
                <a className="font-[0.875em] hover:bg-[#1D4ED81F] p-[4.9px] rounded-lg">Learn more</a>
            </div>
        </div>
    )
}