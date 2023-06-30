import { FaShareAlt } from "react-icons/fa";
import { SCREENS } from "../../../common/enums";
import { COLOR_CONST } from "../../../constants";
import { useGetUrl, useGetUrlPath } from "../../../hooks";
import { copyToClipboard } from "../../../utils";
import { ButtonUsingReactIcon } from "../../common";
import { jsonParser } from "../ToolsList";

type ShareDataProps = {
  data: string;
};

export function ShareData({ data }: ShareDataProps) {
  const { pathname } = useGetUrlPath();
  const { originWithPath } = useGetUrl();

  const hideMe = [SCREENS.UUID_GENERATOR].includes(pathname as SCREENS);
  const handleShareUrlClick = () => {
    if (pathname && pathname.includes(jsonParser)) {
      if (data) {
        try {
          data = JSON.stringify(JSON.parse(data));
        } catch (error) {
          console.log(error);
        }
      }
    }

    const title = "URL copied to clipboard";
    copyToClipboard(`${originWithPath}?data=${data}`, title);
  };

  if (hideMe) return <></>;

  return (
    <ButtonUsingReactIcon
      name="Share"
      onClick={handleShareUrlClick}
      mdIcon={<FaShareAlt color={COLOR_CONST.defaultIcon} />}
      tooltip="Share Data"
    />
  );
}
