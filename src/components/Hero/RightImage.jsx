import girl from "../../assets/images/hero-image.png"

export default function RightImage() {
    return (
        <div className="w-full rounded-4xl bg-white p-3"
            data-aos="fade-up">
            <img src={girl} className="rounded-4xl" loading="eager" />
        </div>
    )
}