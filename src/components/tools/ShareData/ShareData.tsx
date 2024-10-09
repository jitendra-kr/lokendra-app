import { SCREENS } from "@ft/common/enums/screens";
import { InputOutputActionButton } from "@ft/components/common/Buttons/InputOutputActionButton";
import { COLOR_CONST } from "@ft/constants/colorConstant";
import { useGetUrl, useGetUrlPath } from "@ft/hooks/useGetUrl";
import { copyToClipboard } from "@ft/utils/utils";
import { FaShareAlt } from "react-icons/fa";
import { jsonParser } from "../ToolsList/toolsListingData";

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
    <InputOutputActionButton
      name="Share"
      onClick={handleShareUrlClick}
      mdIcon={<FaShareAlt color={COLOR_CONST.defaultIcon} />}
      tooltip="Share Data"
    />
  );
}
