import { useState, useEffect } from "react";
import api from "../../api/axios";
import axios from "axios";
import Button from "../Button"
import { Checkbox, InputHolder, SelectHolder } from "../Forms/Inputs"
import FormHolder from "../Forms/FormHolder";

export default function FormModal({ showModal, setShowModal }) {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const [loading, setLoading] = useState(false)
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

            await api.post("/add-community-member", memberData);
            setShowModal(false)
        } catch (err) {
            if (axios.isAxiosError(err)) {
                console.log(err.response?.data?.error)
            }
        } finally {
            setLoading(false)
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
                <Button type="submit" value={!loading ? "Join Community" : "Joining Community..."} className="mt-2 w-full btn btn-bg-primary py-3 text-white"
                    disabled={loading} />
            </FormHolder>
        )
    )
}