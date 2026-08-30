import { Link } from "react-router-dom";

export default function FooterLinks({ title, array }) {
    return (
        array && (
            <div className="flex flex-col gap-2">
                <span className="inline-block font-semibold">{title}</span>
                {array.map(arr => {
                    const isRoute = arr.link.startsWith("/") && !arr.link.includes("#");

                    return isRoute
                        ? (
                            <a className="w-fit">{arr.title}</a>
                        ) : (
                            <a href={arr.link} className="w-fit">{arr.title}</a>
                        )
                })}
            </div>
        )
    )
}