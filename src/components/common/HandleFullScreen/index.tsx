"use client";
import { ConvertedOutputByTools } from "@ft/components/tools/helper/ConvertedOutputByTools/ConvertedOutputByTools";
import { COLOR_CONST } from "@ft/constants/colorConstant";
import { useGetUrlPath } from "@ft/hooks/useGetUrl";
import { Button, Modal } from "antd";
import dynamic from "next/dynamic";
import { useState } from "react";
import { BiFullscreen } from "react-icons/bi";
import { RiFullscreenExitLine } from "react-icons/ri";

const JsonViewer = dynamic(
  () => import("@ft/components/tools/helper/JsonViewer/JsonViewer"),
);

const decideFullScreenModal = [
  "/json-tools/json-formatter",
  "/json-tools/json-to-typescript-interface",
  "/json-tools/json-validator",
  "/json-tools/secure-reliable-json-minifier-compressor",
  "/xml-tools/xml-to-json-converter",
];

export default function HandleFullScreen({ content }: { content: string }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useGetUrlPath();

  const openModal = () => {
    const opened = document.getElementsByClassName("fullscreenModal").item(0);
    if (!opened) {
      setOpen(true);
      return;
    }
    setOpen(false);
    Modal.destroyAll();
  };

  return (
    <>
      <Modal
        className="fullscreenModal"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        // eslint-disable-next-line react/no-children-prop
        children={
          pathname && decideFullScreenModal.includes(pathname) ? (
            <JsonViewer content={content} error="" editorError="" />
          ) : (
            <ConvertedOutputByTools content={content} />
          )
        }
        width="90%"
        style={{ top: 0 }}
        styles={{
          body: {
            height: "100vh",
          },
        }}
        destroyOnClose={true}
        closeIcon={
          <Button
            type="primary"
            onClick={openModal}
            style={{ marginTop: "8px" }}
          >
            <RiFullscreenExitLine size={20} color={COLOR_CONST.defaultIcon} />
          </Button>
        }
      />
      <Button
        type="primary"
        icon={<BiFullscreen size={20} color={COLOR_CONST.defaultIcon} />}
        onClick={openModal}
      ></Button>
    </>
  );
}
