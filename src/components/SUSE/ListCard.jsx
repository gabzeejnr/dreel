export default function ListCard({ title, text, list }) {
    return (
        <div className="card rounded-2xl py-4 px-5">
            <h1 className="block mb-2 font-bold text-xl">{title}</h1>
            <p className="text-gray-500 text-[15px] mb-2">{text}</p>
            <ul className="gray-text ml-5 leading-7">
                {list && (
                    list.map(li => (
                        <li key={li[0]} className="list-disc">{li}</li>
                    ))
                )}
            </ul>
        </div>
    )
}