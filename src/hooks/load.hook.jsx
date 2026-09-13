import { useEffect } from "react";

function useGoToTopOnLoad(path) {
    useEffect(function () {
        if (location.pathname !== `/${path ?? ""}`) return;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, [path])
}

export { useGoToTopOnLoad }