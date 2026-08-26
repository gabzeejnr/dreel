import { useState, useEffect } from "react";
import Button from "../Button"
import { Checkbox, InputHolder, SelectHolder } from "../Forms/Inputs"
import FormHolder from "../Forms/FormHolder";

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


    return (
        showModal && (
            <FormHolder title="Join Our Community"
                subtitle="Connect with 10,000+ cloud engineers, get exclusive resources, and grow together."
                onClick={() => setShowModal(false)}>
                <InputHolder id="name" type="text" label="Full name" required
                />
                <InputHolder id="email" type="email" label="Email address" required
                />
                <SelectHolder array={array} id="role" label="Your Role" required disabled="Select your role" />
                <Checkbox id="updates" note="I agree to receive community updates and resources." />
                <Button type="submit" value="Join Community" className="mt-2 w-full btn btn-bg-primary py-3 text-white" />
            </FormHolder>
        )
    )
}