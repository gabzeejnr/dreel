import TopPill from "../components/Hero/TopPill";
import Button from "../components/Button";
import DCNSPCard from "../components/DCNSPCard";

export default function DCNSP() {
    const pillArray = ['DCNSP', 'Scholarship Program'];
    const PLT = [
        "SUSE Linux Enterprise Administration",
        "Kubernetes Engineering",
        "Cloud Native Engineering",
        "DevOps Engineering",
        "Platform Engineering",
        "DevSecOps",
        "Site Reliability Engineering (SRE)",
        "AI Infrastructure Engineering"
    ]
    const WSRR = [
        "Instructor-led live training",
        "Weekly mentorship and coaching sessions",
        "Hands-on cloud laboratories",
        "Real-world industry projects",
        "Career development workshops",
        "Technical mock interviews",
        "Exclusive Dreel engineering community",
        "Digital certificates of completion",
        "Internship opportunities with Dreel and partners"
    ]

    return (
        <section className="min-h-screen pt-5 px-3 lg:pt-30 bg-gray-50 lg:px-40">
            <div className="grid place-items-center">
                <TopPill array={pillArray} />
            </div>
            <div className="text-center flex flex-col items-center mt-5">
                <h1 className="font-bold text-[35px] lg:tracking-[2px] leading-10">
                    Dreel Cloud Native Scholarship Program
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                    One of our flagship initiatives designed to remove financial barriers and create opportunities for thousands of aspiring technology professionals across Africa.
                </p>
            </div>
            <div className="flex gap-3 mt-4 justify-center">
                <Button type="button" value="Apply for a Scholarship" className="btn btn-bg-primary" />
                <Button type="button" value="Become a Sponsor" className="btn btn-outline-primary" />
                <Button type="button" value="Wishlist" className="btn btn-outline-primary" />
                {/* 
                <Button type="button" value="Apply for a Scholarship" className="btn btn-bg-primary border" />
                <Button type="button" value="Become a Sponsor" className="btn btn-outline-primary" />
                <Button type="button" value="Wishlist" className="btn btn-outline-primary" /> */}
            </div>
            <div className="cards flex flex-col gap-5 mt-15 px-3 py-10">
                <DCNSPCard title="Program Vision">
                    <div className="text-gray-500 text-[15px] mb-2">
                        We envision a future where every talented African has access to world-class cloud education regardless of financial background. The Dreel Cloud Native Scholarship Program exists to expand access to enterprise technology education, build practical cloud engineering skills, increase employment opportunities, support career transitions into technology, strengthen Africa's open-source ecosystem, and develop a sustainable pipeline of cloud-native professionals.
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">Our mission is simple: </span>
                        <span className="text-gray-500 text-[15px]">
                            build the next generation of Cloud Engineers, DevOps Engineers, Platform Engineers, Kubernetes Administrators, and AI Infrastructure Specialists that will power Africa's digital economy.
                        </span>
                    </div>
                </DCNSPCard>
                <DCNSPCard title="Scholarship Journey">
                    <div className="mb-2">
                        <div className="text-gray-500 font-bold">Phase 1 — Open Registration</div>
                        <p className="text-gray-500 text-[15px] mb-2">
                            Applications are open across Africa for students, graduates, developers, IT professionals, career changers, and technology enthusiasts.
                        </p>
                    </div>
                    <div className="mb-2">
                        <div className="text-gray-500 font-bold">Phase 2 — Foundations Challenge</div>
                        <p className="text-gray-500 text-[15px] mb-2">
                            Accepted learners study Linux fundamentals, Git & GitHub, cloud computing, Docker, Kubernetes, CI/CD, and AI for Developers over 4-6 weeks.
                        </p>
                    </div>
                    <div className="mb-2">
                        <div className="text-gray-500 font-bold">Phase 3 — Scholarship Awards</div>
                        <p className="text-gray-500 text-[15px] mb-2">
                            Merit-based selection supports 300 full scholarships, 500 partial scholarships, and continued learning opportunities for many others.
                        </p>
                    </div>
                </DCNSPCard>
                <div className="grid grid-cols-2 gap-5">
                    <DCNSPCard title="Premium Learning Tracks" list={PLT} />
                    <DCNSPCard title="What Scholarship Recipients Receive" list={WSRR} />
                </div>
            </div>
        </section>
    )
}