import { Button, Modal, Tooltip } from "antd";
import { useState } from "react";
import { BiFullscreen } from "react-icons/bi";
import { MdCloseFullscreen } from "react-icons/md";
import { COLOR_CONST } from "../../../constants";
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
          pathname && pathname.match(jsonParser) ? (
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
          <Tooltip title={"Exit Full Screen"}>
            <Button
              type="primary"
              onClick={openModal}
              style={{ marginRight: "4px", marginTop: "7px" }}
            >
              <MdCloseFullscreen size={20} color={COLOR_CONST.defaultIcon} />
            </Button>
          </Tooltip>
        }
      />
      <Tooltip title={"Full Screen"}>
        <Button
          type="primary"
          icon={<BiFullscreen size={20} color={COLOR_CONST.defaultIcon} />}
          onClick={openModal}
        ></Button>
      </Tooltip>
    </>
  );
}
