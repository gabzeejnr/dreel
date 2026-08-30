import { faInstagram, faWhatsapp, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"

export const contacts = [
    {
        icon: faEnvelope,
        detail: "hello@academy.dreel.ng"
    },
    {
        icon: faPhone,
        detail: "+234 (703) 770-6544"
    },
    {
        icon: faLocationDot,
        detail: "Lagos, Nigeria"
    }
]

export const socialMedia = [
    {
        icon: faXTwitter,
        link: "https://x.com/dreelacademy"
    },
    {
        icon: faInstagram,
        link: "https://instagram.com/dreelacademy"
    },
    {
        icon: faYoutube,
        link: "https://youtube.com/@dreelacademy",
        color: "rgba(255, 0, 0, .7)"
    },
    {
        icon: faWhatsapp,
        link: "https://wa.me/234703770654"
    }
]