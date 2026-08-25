export default function Card() {
    return (
        <div className="mt-10 shadow-[0_0_10px_5px_whitesmoke] rounded-4xl bg-white md:px-4">
            <div className="flex flex-col p-8 py-8">
                <div className="text-center mb-10">
                    <h4 className="h4 font-bold mb-4">Scholarship Stats</h4>
                    <div className="flex justify-around text-center">
                        <div>
                            <h2 className="font-bold primary-color text-2xl md:text-4xl">₦2.5M+</h2>
                            <small>Tuition Funded</small>
                        </div>
                        <div>
                            <h2 className="font-bold primary-color text-2xl md:text-4xl">850+</h2>
                            <small>Scholars</small>
                        </div>
                        <div>
                            <h2 className="font-bold primary-color text-2xl md:text-4xl">92%</h2>
                            <small>Placement Rate</small>
                        </div>
                    </div>
                </div>
                <p className="text-center text-[#4B5563BF] mt-10">
                    "The Dreel scholarship changed my life. I went from struggling student to DevOps Engineer at a top
                    tech company in under a year."
                </p>
                <div className="text-center mt-6">
                    <small className="text-[#4B5563BF]">— Blessing, Dreel Scholar 2024</small>
                </div>
            </div>

        </div>
    )
}