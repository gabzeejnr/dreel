export default function ComCard({ children, title, text }) {
    return (
        <div className="flex flex-col gap-3 shadow-[0_0_3px_1px_#0000001F] bg-white p-5 text-wrap rounded-2xl">
            <div className="p-2 w-fit rounded-4xl flex items-center justify-center bg-[#1D4FD82F] primary-color">{children}</div>
            <span className="text-lg font-bold">{title}</span>
            <p className="gray-text">{text}</p>
        </div>
    )
}