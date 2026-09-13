import { useEffect } from "react";

function useTitle(title) {
    useEffect(function () {
        document.title = `Dreel Academy - ${title}`
    }, [title])
}

export { useTitle }