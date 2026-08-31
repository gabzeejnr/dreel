import TopPill from "./TopPill";
import LargeText from "./LargeText";
import SmallText from "./SmallText";
import Button from "../Button";
import { ArrowRight, Badge, BookOpen, Download, Users } from "lucide-react";
import BottomInfo from "./BottomInfo";
import RightImage from "./RightImage";
import HoverAboveCard from "../HoverAboveCard";
import girl from "../../assets/images/hero-image.png";

export default function Hero() {
    return (
        <section id="home-hero" className="">
            <div className="background-overlay relative flex flex-col lg:flex-row text-white pt-25 pb-10 lg:pt-30 px-5 lg:px-20 gap-10 items-center">
                <div className="flex-1 flex flex-col justify-center gap-1 z-1 relative">
                    <TopPill />
                    <LargeText />
                    <SmallText />
                    <div className="flex flex-col sm:flex-row md:flex-col gap-3 lg:gap-4 mt-6 lg:pr-10">
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
                    <div className=" flex justify-around lg:justify-normal lg:gap-4 mt-5 w-full">
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
                            <BookOpen size={20} color="#1D4ED8" />
                        </HoverAboveCard>
                    </div>
                    <div className="sm:w-3/4 lg:w-full"><RightImage src={girl} alt={"Hero Secondary Image"} /></div>
                </div>
            </div>
        </section>
    )
}