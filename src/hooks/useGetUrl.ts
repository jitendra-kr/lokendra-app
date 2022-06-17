import { useEffect, useState } from "react";

export const useGetUrl = () => {
    const [url, setUrl] = useState("")
    const [origin, setOrigin] = useState("")
    useEffect(() => {
        const href = window.location.href;
        console.log( new URL(href))
        const {origin} = new URL(href);
        setOrigin(origin)
        setUrl(href);
    }, [])

    return {url, origin}
};

export const useGetUrlPath = () => {
    const [pathname, setPathname] = useState("")
    useEffect(() => {
        setPathname(window.location.pathname);
    }, [])

    return {pathname, isHome: pathname === "/"}
};