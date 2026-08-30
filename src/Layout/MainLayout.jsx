import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer/Footer"
import WhatsApp from "../components/Whatsapp"

export default function MainLayout() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <WhatsApp />
            <Footer />
        </div>
    )
}