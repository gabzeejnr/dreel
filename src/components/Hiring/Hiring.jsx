import HireCard from "./HireCard";

export default function Hiring() {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const data = [
        {
            title: "Kubernetes Engineers",
            text: "Container orchestration experts with hands-on Rancher, helm, and multi-cloud deployment experience.",
            available: 95
        },
        {
            title: "DevOps Specialists",
            text: "CI/CD pipeline builders with expertise in Docker, Jenkins, GitLab, and infrastructure automation.",
            available: 80
        },
        {
            title: "Platform Engineers",
            text: "Infrastructure architects designing cloud platforms and operational standards.",
            available: 45
        }
    ];

    return (
        <section className="bg-gray-50 py-20">
            <div className="mb-10 text-center flex flex-col gap-5 items-centr">
                <h1 className="primary-color font-bold tracking-[3px]">HIRING PIPELINE</h1>
                <h2 className="font-bold text-4xl">Hire <span className="primary-color">Dreel Engineers</span></h2>
                <p className="gray-text text-[15.6px] text-wrap w-3/4 font-medium self-center tracking-[1px]">Access Africa's most talented cloud engineers and DevOps specialists trained on industry-leading infrastructure technologies.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-center px-5 md:px-10 gap-5 lg:px-13">
                {data.map(d => (
                    <HireCard key={d.title} text={d.text} title={d.title} available={d.available} link={d.link} />
                ))}
            </div>
        </section>
    )
}