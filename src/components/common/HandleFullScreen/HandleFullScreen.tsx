import { Button } from "antd";
import { useEffect, useState } from "react";
import { BiExitFullscreen, BiFullscreen } from "react-icons/bi";

type HandleFullScreenProps = {
  fullscreenRef?: HTMLDivElement | null;
};
export function HandleFullScreen({ fullscreenRef }: HandleFullScreenProps) {
  const [fullScreen, setFullScreen] = useState<boolean>();

  const toggleFullScreen = () => {
    if (fullScreen) {
      exitFullscreen();
      return;
    }
    const elem = fullscreenRef;

    if (elem && elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleFullscreenChange = () => {
    setFullScreen(document.fullscreenElement ? true : false);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <Button
      type="primary"
      icon={
        fullScreen ? <BiExitFullscreen size={30} /> : <BiFullscreen size={30} />
      }
      onClick={toggleFullScreen}
    ></Button>
  );
}
