import { useEffect, useState } from "react";

interface IParams {
    [key: string]: string
}

export const useGetQueryString = () => {
    const [params, setParams] = useState<IParams>({})
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const paramsData = Object.fromEntries(urlSearchParams.entries());
        setParams(paramsData)
    }, [])

    return { params }
};
