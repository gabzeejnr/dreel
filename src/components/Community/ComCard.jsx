export default function ComCard({ children, title, text }) {
    return (
        <div className="flex flex-col gap-3 bg-white">
            <div>{children}</div>
            <span>{title}</span>
            <p>{text}</p>
        </div>
    )
}