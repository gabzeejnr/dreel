export default function BottomInfo({ children, value, name }) {
    return (
        <span className="inline-flex gap-2 text-sm">
            <span className="text-blue-700">{children}</span>
            <span className="font-semibold">{value} <span className="font-normal">{name}</span></span>
        </span>
    )
}