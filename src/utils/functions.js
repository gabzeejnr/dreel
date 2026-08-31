export function navigateToSection(sectionId) {
    if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
            document.getElementById(sectionId)?.scrollIntoView({
                behavior: "smooth"
            })
        }, 500);
    } else {
        document.getElementById(sectionId)?.scrollIntoView({
            behavior: "smooth"
        })
    }
}