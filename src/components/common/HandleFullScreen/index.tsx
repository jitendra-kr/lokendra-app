"use client";
import { ConvertedOutputByTools } from "@ft/components/tools/helper/ConvertedOutputByTools/ConvertedOutputByTools";
import { useGetUrlPath } from "@ft/hooks/useGetUrl";
import Modal from "antd/es/modal";
import dynamic from "next/dynamic";
import { useState } from "react";
import { InputOutputActionButton } from "../Buttons/InputOutputActionButton";
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
    }
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
            <JsonViewer
              content={content}
              error=""
              editorError=""
              hideOutputActions={true}
            />
          ) : (
            <ConvertedOutputByTools
              content={content}
              hideOutputActions={true}
            />
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
          <InputOutputActionButton
            onClick={() => {
              setOpen(false);
              Modal.destroyAll();
            }}
            name={"Close"}
          />
        }
      />
      <InputOutputActionButton onClick={openModal} name={"Fullscreen"} />
    </>
  );
}
