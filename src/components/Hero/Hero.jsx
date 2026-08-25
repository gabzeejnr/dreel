import TopPill from "./TopPill";
import LargeText from "./LargeText";
import SmallText from "./SmallText";
import Button from "../Button";
import { ArrowRight, Badge, BookOpen, Download, Users } from "lucide-react";
import BottomInfo from "./BottomInfo";
import RightImage from "./RightImage";
import HoverAboveCard from "../HoverAboveCard";

export default function Hero() {
    return (
        <section id="home-hero" className="flex flex-col lg:flex-row min-h-screen text-white pt-10 lg:pt-30 px-5 lg:px-20 gap-10 items-center">
            <div className="flex-1 flex flex-col justify-center gap-1 z-1">
                <TopPill />
                <LargeText />
                <SmallText />
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-8 mt-6 lg:pr-10">
                    <Button type="button"
                        className="btn btn-bg-primary cursor-pointer flex flex-1 justify-center items-center gap-2 md:gap-3 px-3 py-2 w-full">
                        <span className="font-semibold">Start Learning</span>
                        <ArrowRight size={16} />
                    </Button>
                    <Button type="button"
                        className="btn border flex flex-1 justify-center items-center gap-2 border-[#5A5A5A] px-3 py-2 backdrop-blur-md bg-gray-1000">
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
            <div className="flex-1 flex place-items-center z-1 relative mb-10 w-full">
                <div className="hidden lg:flex absolute bottom-3 -left-2 z-4">
                    <HoverAboveCard title="200+ Courses" info="Available Now">
                        <BookOpen size={20} />
                    </HoverAboveCard>
                </div>
                <RightImage />
            </div>
        </section>
    )
}