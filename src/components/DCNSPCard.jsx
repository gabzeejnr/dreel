export default function DCNSPCard({ title, children, list }) {
    return (
        <div className="card px-3 rounded-xl py-4">
            <span className="block mb-2 font-bold text-xl">{title}</span>
            <div>{children}</div>
            {list && (
                <ul className="gray-text ml-5 leading-7">
                    {list.map(li => (
                        <li className="list-disc">{li}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}