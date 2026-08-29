export default function Checks({ text }) {
    return (
        <div className="card rounded-2xl p-2 flex gap-4 ">
            ✔
            <span className="gray-text">{text}</span>
        </div>
    )
}