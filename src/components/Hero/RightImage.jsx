

export default function RightImage({ src }) {
    return (
        <div className="w-full rounded-4xl bg-white p-3"
            data-aos="fade-up">
            <img src={src} alt="Hero Secondary Image" className="rounded-4xl w-full h-auto max-h-105 object-cover" loading="eager" />
        </div>
    )
}