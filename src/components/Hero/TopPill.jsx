import dotSvg from "../../assets/SVGs/dot.svg"

export default function TopPill({ array }) {
    return (
        <span className="inline-flex gap-1 py-2 px-2 rounded-4xl border text-[#1D4ED8] border-blue-600 bg-[#1D4ED81F] w-fit">
            {array ? (
                array.join(" • ")
            ) : (
                "Kubernetes • DevOps • Cloud Native"
            )}
        </span>
    )
}