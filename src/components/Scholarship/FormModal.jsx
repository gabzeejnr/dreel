import { useEffect } from "react";
import FormHolder from "../Forms/FormHolder";
import { InputHolder, SelectHolder, TextArea } from "../Forms/Inputs";
import Button from "../Button";

export default function FormModal({ showModal, setShowModal }) {

    // ============================================================================================
    // STATES & VARIABLES =======================
    // ============================================================================================

    const array = [
        { value: "cloud", text: "Cloud Native Engineering" },
        { value: "devps", text: "DevOps Engineering" },
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

    if(!showModal) return null

    return (
        <FormHolder title="Scholarship Application" subtitle="Apply for the Dreel Future Tech Scholarship and start your cloud career journey."
            onClick={() => setShowModal(false)}>
            <InputHolder type="text" id="name" label="Full Name" required />
            <InputHolder type="email" id="email" label="Email Address" required />
            <InputHolder type="tel" id="phoneNumber" label="Phone Number" required />
            <SelectHolder id="program" array={array} label="Program Interest" required placeholder="Choose a Program" />
            <TextArea id="info" label="Why should you receive the scholarship?"
                placeholder="Briefly tell us why this scholarship matters to you." />

                <Button value="Apply for Scholarship" className="btn btn-bg-primary" />
        </FormHolder>
    )
}