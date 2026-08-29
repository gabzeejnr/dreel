export default function SUSECard({ title, text }) {
    return (
        <div className="card px-3 py-5 rounded-2xl">
            <h1 className="block mb-2 font-bold text-xl">{title}</h1>
            <p className="text-gray-500 text-[15px] mb-2">{text}</p>
        </div>
    )
}