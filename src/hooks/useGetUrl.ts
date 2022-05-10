import { useEffect, useState } from "react";

export const useGetUrl = () => {
    const [url, setUrl] = useState("")
    useEffect(() => {
        setUrl(window.location.href);
    }, [])

    return {url}
};

export const useGetUrlPath = () => {
    const [pathname, setPathname] = useState("")
    useEffect(() => {
        setPathname(window.location.pathname);
    }, [])

    return {pathname, isHome: pathname === "/"}
};