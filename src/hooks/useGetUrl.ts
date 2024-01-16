import { useEffect, useState } from "react";
import { SCREENS } from "../common/enums";

export const useGetUrl = () => {
  const [url, setUrl] = useState("");
  const [origin, setOrigin] = useState("");
  const [originWithPath, setOriginWithPath] = useState("");
  useEffect(() => {
    const href = window.location.href;
    const { origin, pathname } = new URL(href);
    setOriginWithPath(origin + pathname);
    setOrigin(origin);
    setUrl(href);
  }, []);

  return { url, origin, originWithPath };
};

export const useGetUrlPath = () => {
  const [pathname, setPathname] = useState<SCREENS>();
  useEffect(() => {
    if (window.location.pathname) {
      setPathname(window.location.pathname as SCREENS);
    }
  }, []);

  return { pathname, isHome: pathname === "/" };
};
