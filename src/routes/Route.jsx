import { Routes, Route } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import DCNSP from "../pages/DCNSP"

export default function RoutePage() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="dcnsp" element={<DCNSP />} />
            </Route>
        </Routes>
    )
}