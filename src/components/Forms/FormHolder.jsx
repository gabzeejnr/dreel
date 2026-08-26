import Button from "../Button"

export default function FormHolder({ title, subtitle, children, onClick }) {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60" >
            <div className="flex min-h-full items-start justify-center pt-10">
                <form className="w-full max-w-115 rounded-4xl bg-white px-6 py-5 shadow-xl"
                    style={{ animation: "modal-drop 0.4s ease-out" }}>
                    <header className="relative mb-4">
                        <Button type="button" value="&times;" aria-label="Close" onClick={onClick}
                            className="absolute right-0 top-0 text-3xl leading-none text-gray-500 hover:text-gray-700"
                        />
                        <h1 className="text-xl font-bold text-[#4B5563]">
                            {title}
                        </h1>
                        <p className="mt-1 max-w-105 text-sm leading-5 text-gray-500">
                            {subtitle}
                        </p>
                    </header>
                    <div className="flex flex-col gap-2">
                        {children}
                    </div>
                </form>
            </div>
        </div>
    )
}