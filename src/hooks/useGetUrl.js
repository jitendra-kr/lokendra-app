import { useEffect, useState } from "react";

export const useGetUrl = () => {
    const [url, setUrl] = useState("")
    useEffect(() => {
        setUrl(window.location.href);
    }, [])

    return {url}
};