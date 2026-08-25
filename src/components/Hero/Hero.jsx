import TopPill from "./TopPill";
import LargeText from "./LargeText";
import SmallText from "./SmallText";
import Button from "../Button";
import { ArrowRight, Badge, BookOpen, Download, Users } from "lucide-react";
import BottomInfo from "./BottomInfo";
import RightImage from "./RightImage";
import HoverAboveCard from "../HoverAboveCard";
import dreelLogo from "../../assets/images/dreel-academy-logo.png"
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section id="home-hero" className="relative flex flex-col lg:flex-row min-h-screen text-white pt-10 pb-10 lg:pt-30 px-5 lg:px-20 gap-10 items-center">
            <Link to="/home" className="lg:hidden z-1 flex self-start -mb-10 -mt-10 w-30">
                <img src={dreelLogo} alt="DReel Academy Logo" className="w-full h-full" />
            </Link>
            <div className="flex-1 flex flex-col justify-center gap-1 z-1 relative">
                <TopPill />
                <LargeText />
                <SmallText />
                <div className="flex flex-col sm:flex-row md:flex-col gap-3 lg:gap-8 mt-6 lg:pr-10">
                    <Button type="button"
                        className="btn btn-bg-primary cursor-pointer flex flex-1 justify-center items-center gap-2 md:gap-3 w-fit">
                        <span className="font-semibold">Start Learning</span>
                        <ArrowRight size={16} />
                    </Button>
                    <Button type="button"
                        className="btn border flex flex-1 justify-center items-center gap-2 border-[#5A5A5A] backdrop-blur-md bg-gray-1000 w-fit">
                        <Download size={16} color="#194999" />
                        Apply for Scholarship
                    </Button>
                </div>
                <div className="mt-4 flex justify-around lg:justify-normal lg:gap-4 w-full">
                    <BottomInfo value="12" name="Programs">
                        <Users size={20} />
                    </BottomInfo>
                    <BottomInfo value="3000+" name="Engineers">
                        <BookOpen size={20} />
                    </BottomInfo>
                    <BottomInfo value="4.9/5" name="Rated">
                        <Badge size={20} />
                    </BottomInfo>
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center z-1 relative mb-10 md:px-10">
                <div className="flex absolute bottom-3 -left-3 sm:left-15 md:left-25 lg:left-5 z-4">
                    <HoverAboveCard title="200+ Courses" info="Available Now">
                        <BookOpen size={20} />
                    </HoverAboveCard>
                </div>
                <div className="sm:w-3/4 md lg:w-full"><RightImage /></div>
            </div>
        </section>
    )
}