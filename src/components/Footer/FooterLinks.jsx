import { Link } from "react-router-dom";
import Button from "../Button";

export default function FooterLinks({ title, array }) {

    function navigateToSection(sectionId) {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({
                    behavior: "smooth"
                })
            }, 500);
        } else {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth"
            })
        }
    }

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
                            <Button className="w-fit cursor-pointer"
                                onClick={() => navigateToSection(arr.link.slice(2))}>{arr.title}</Button>
                        )
                })}
            </div>
        )
    )
}