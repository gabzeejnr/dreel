import { Link } from "react-router-dom";

export default function HireCard({title, text, number, link}) {
    return (
        <div>
            <span>{title}</span>
            <p className="gray-text text-wrap">{text}</p>
            <div className="flex justify-between px-2">
                <div>{number} Available</div>
                <Link to={link} className="primary-color">
                    View Profiles &rarr;
                </Link>
            </div>
        </div>
    )
}