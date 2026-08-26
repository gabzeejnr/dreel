import AOS from "aos";
import RoutePage from "./routes/Route";
import "aos/dist/aos.css";
import "./styles/animations.css";
import "./styles/backgrounds.css";
import "./styles/global.css";

export default function App() {
    AOS.init({
        duration: 1000,
        once: false
    })

    return (
        <>
            <RoutePage />
        </>
    )
}