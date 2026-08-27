import { Link } from "react-router-dom";

export default function HireCard({title, text, available, link}) {
    return (
        <div className="card rounded-4xl px-5 py-8 bg-white grid gap-2">
            <span className="font-semibold">{title}</span>
            <p className="gray-text text-wrap">{text}</p>
            <div className="flex justify-between items-center">
                <div className="bg-primary">{available}+ Available</div>
                <Link to={link} className="primary-color">
                    View Profiles &rarr;
                </Link>
            </div>
        </div>
    )
}