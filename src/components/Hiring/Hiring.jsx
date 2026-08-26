import HireCard from "./HireCard";

export default function Hiring() {

    const data = [
        {
            title: "Kubernetes Engineers",
            text: ""
        }
    ];

    return (
        <section className="bg-gray-50 pt-20 border">
            <div className="mb-10 text-center flex flex-col gap-5 items-centr">
                <h1 className="primary-color font-bold tracking-[3px]">HIRING PIPELINE</h1>
                <h2 className="font-bold text-4xl">Hire <span className="primary-color">Dreel Engineers</span></h2>
                <p className="text-[15.6px] text-wrap w-3/4 font-medium self-center tracking-[1px]">Access Africa's most talented cloud engineers and DevOps specialists trained on industry-leading infrastructure technologies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-center px-5 md:px-10 gap-5 lg:px-13">
                {data.map(d => (
                    <HireCard key={d.link} text={d.text} title={d.title} number={d.number} link={d.link} />
                ))}
            </div>
        </section>
    )
}