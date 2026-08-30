import { ArrowUpCircle } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function BackToTop({top}) {
    const navigate = useNavigate();
    return (
        <div className="flex md:hidden mr-4 flex-row-reverse items-center gap-2 rounded-[50%] fixed bottom-5 right-0">
            <Button type="button" value={<ArrowUpCircle />}
            onClick={navigate(top)} />
            <div className="bg-gray-200 px-3 py-2 back-to-top">Back to Top</div>
        </div>
    )
}