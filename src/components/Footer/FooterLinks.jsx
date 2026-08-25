import { Link } from "react-router-dom";

export default function FooterLinks({ title, array }) {
    return (
        array && (
            <div className="flex flex-col gap-2">
                <span className="inline-block font-semibold">{title}</span>
                {array.map(arr => (
                    <Link to={arr.link}>{arr.title}</Link>
                ))}
            </div>
        )
    )
}