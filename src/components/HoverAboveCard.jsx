export default function HoverAboveCard({ children, title, info }) {
    return (
        <div className="z-2 min-w-40 h-10">
            <div className="bg-white shadow-sm flex rounded-4xl items-center gap-2 px-3 py-2 mb-4 border">
                <div className="rounded-4xl bg-blue-400 opacity-50 w-10 h-10 text-primary flex items-center justify-center">
                    {children}
                </div>
                <div className="flex flex-col text-xs leading-4 text-black">
                    <span className="font-bold">{title}</span>
                    <span>{info}</span>
                </div>
            </div>
        </div>
    )
}