import FormHolder from "../Forms/FormHolder";
import { InputHolder, SelectHolder } from "../Forms/Inputs";

export default function formModal() {

    const array = [
        {value: "cloud", text: "Cloud Native Engineering"},
        {value: "devps", text: "DevOps Engineering"},
        {value: "linux", text: "Linux Systems Engineering"},
        {value: "platform", text: "Platform Engineering"}
    ];

    return (
        <FormHolder title="Scholarship Application" subtitle="Apply for the Dreel Future Tech Scholarship and start your cloud career journey.">
            <InputHolder type="text" id="name" label="Full Name" required />
            <InputHolder type="email" id="Email Address" required />
            <InputHolder type="tel" id="Phone Number" required />
            <SelectHolder id="program" array={array} label="Program Interest" required disabled="Choose a Program" />
        </FormHolder>
    )
}