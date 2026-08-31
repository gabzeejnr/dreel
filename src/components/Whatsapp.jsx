import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { socialMedia } from "../data/academyData";
import { Link, useNavigate } from "react-router-dom";

export default function WhatsApp() {

    return (
        <Link to="https://wa.me/2347037706544" className="fixed bottom-5 right-5 w-fit h-fit cursor-pointer">
            <Button type="button" value={<FontAwesomeIcon icon={socialMedia[3].icon} color="white" />}
                className="bg-green-500 hover:bg-green-400 cursor-pointer h-12 w-12 flex items-center justify-center text-2xl z-99999 rounded-[50%]" />
        </Link>
    )
}