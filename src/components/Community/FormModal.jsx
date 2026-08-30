import { useState, useEffect } from "react";
import api from "../../api/axios";
import axios from "axios";
import { toast } from "react-hot-toast"
import Button from "../Button"
import { Checkbox, InputHolder, SelectHolder } from "../Forms/Inputs"
import FormHolder from "../Forms/FormHolder";
import Loader from "../../assets/SVGs/ButtonLoader.svg"

export default function FormModal({ showModal, setShowModal }) {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const [loading, setLoading] = useState(false);
    const array = [
        { value: "cloud", text: "Cloud Native Engineering" },
        { value: "devops", text: "DevOps Engineering" },
        { value: "linux", text: "Linux Systems Engineering" },
        { value: "platform", text: "Platform Engineering" }
    ];

    // ============================================================================================
    // EFFECTS & FUNCTIONS ======================
    // ============================================================================================

    useEffect(() => {
        document.body.style.overflow = showModal ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [showModal]);

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);

            const memberData = {
                name: formData.get("name"),
                email: formData.get("email"),
                role: formData.get("role"),
                receiveUpdates: formData.get("receiveUpdates") === "on"
            };

            const { data } = await api.post("/add-community-member", memberData);
            console.log(data)
            toast.success(data?.message || "Added successfully")
            setShowModal(false)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data?.error)
                toast.error(err?.response?.data?.error || "Something went wrong. Please try again")
            } else {
                toast.error("Something went wrong. Please try again")
            }
        } finally {
            setLoading(false);
        }
    }


    return (
        showModal && (
            <FormHolder title="Join Our Community"
                subtitle="Connect with 10,000+ cloud engineers, get exclusive resources, and grow together."
                onClick={() => setShowModal(false)} handleSubmit={handleSubmit}>
                <InputHolder id="name" type="text" label="Full name" required />
                <InputHolder id="email" type="email" label="Email address" required />
                <SelectHolder array={array} id="role" label="Your Role" required placeholder="Select your role" />
                <Checkbox id="receiveUpdates" note="I agree to receive community updates and resources." />
                <Button type="submit" value={!loading ? "Join Community" : (
                    <img src={Loader} alt="Loading" className="h-5" />
                )} className={`mt-2 w-full btn btn-bg-primary py-3 text-white ${loading && "flex justify-center text-lg"}`}
                    disabled={loading} />
            </FormHolder>
        )
    )
}