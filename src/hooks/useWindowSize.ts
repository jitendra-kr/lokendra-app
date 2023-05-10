import { useEffect, useState } from "react";

type windowSizeType = {
    width: undefined | number
    height: undefined | number

}

export const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState<windowSizeType>({
        width: 1920,
        height: 1080,
    });

    useEffect(() => {

        if (typeof window !== 'undefined') {

            const handleResize = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}
