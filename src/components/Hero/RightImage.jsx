export default function RightImage({ src, alt }) {
    return (
        <div className="w-full rounded-4xl bg-white p-3"
            data-aos="fade-down">
            <img src={src} alt={alt} className="rounded-4xl w-full h-auto max-h-105 object-cover" loading="eager" />
        </div>
    )
}