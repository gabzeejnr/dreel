import dotSvg from "../../assets/SVGs/dot.svg"

export default function TopPill(){
    return(
        <span className="inline-flex gap-1 py-2 px-2 rounded-4xl border border-blue-600 bg-[#1D4ED81F] w-fit">
            <img src={dotSvg} className="text-white" />
             Kubernetes • DevOps • Cloud Native
        </span>
    )
}