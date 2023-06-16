import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";
import { BiFullscreen } from "react-icons/bi";
import { TfiClose } from "react-icons/tfi";

import { useGetUrlPath } from "../../../hooks";
import { JsonViewer } from "../../tools";
import { jsonParser } from "../../tools/ToolsList/toolsListingData";
import { ConvertedOutputByTools } from "../../tools/helper/ConvertedOutputByTools";

type HandleFullScreenProps = {
  content: string;
};

export function HandleFullScreen({ content }: HandleFullScreenProps) {
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

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        className="fullscreenModal"
        open={open}
        onCancel={closeModal}
        footer={null}
        children={
          pathname.match(jsonParser) ? (
            <JsonViewer content={content} error="" editorError="" />
          ) : (
            <ConvertedOutputByTools content={content} />
          )
        }
        width="90%"
        style={{ top: 0 }}
        bodyStyle={{ height: "100vh" }}
        destroyOnClose={true}
        closeIcon={
          <Tooltip title={"Exit Full Screen"}>
            <TfiClose size={60} color="white" />
          </Tooltip>
        }
      />
      <Tooltip title={"Full Screen"}>
        <Button
          type="primary"
          icon={<BiFullscreen size={30} />}
          onClick={openModal}
        ></Button>
      </Tooltip>
    </>
  );
}
