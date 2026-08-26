import Community from "../components/Community/Community";
import MainComunity from "../components/Community/MainCommunity";
import Enterprise from "../components/Enterprise/Enterprise";
import Hero from "../components/Hero/Hero";
import Hiring from "../components/Hiring/Hiring";
import Partners from "../components/Partners/Partners";
import Programs from "../components/Programs/Programs";
import Scholarship from "../components/Scholarship/Scholarship";

export default function Home() {
    return (
        <>
            <Hero />
            <Partners />
            <Programs />
            <Enterprise />
            <Scholarship />
            <Community />
            <MainComunity />
            <Hiring />
        </>
    )
}