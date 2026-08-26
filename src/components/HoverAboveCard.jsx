export default function HoverAboveCard({ children, title, info }) {
    return (
        <div className="z-2 min-w-40 h-10">
            <div className="bg-white shadow-sm flex rounded-4xl items-center gap-2 px-3 py-2 mb-4">
                <div className="rounded-4xl bg-[#1D4FD82F] opacity-50 w-10 h-10 text-primary flex items-center justify-center">
                    {children}
                </div>
                <div className="flex flex-col text-sm font-normal leading-4 text-gray-900">
                    <span className="font-bold">{title}</span>
                    <span className="text-xs">{info}</span>
                </div>
            </div>
        </div>
    )
}