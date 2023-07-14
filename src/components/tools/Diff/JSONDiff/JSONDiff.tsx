import { getToolInput } from "../../../../common/selectors";
import {
  updateDiffLeftInput,
  updateDiffRightInput,
} from "../../../../common/state/tools";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

import { useState } from "react";
import { useToolListData } from "../../../../common/hooks/useToolListData";
import DiffViewer from "../../../common/Ide/DiffViewer/DiffViewer";
import { ToolKeys } from "../../ToolsList";
import { InputOutputViewer } from "../../helper/InputOutputViewer";

export function JSONDiff() {
  const dispatch = useAppDispatch();
  const { toolData } = useToolListData(ToolKeys.JSON_DIFF);

  const { diffLeftValue, diffRightValue } = useAppSelector(getToolInput);
  const [leftErrorMsg, setLeftErrorMsg] = useState("");
  const [rightErrorMsg, setRightErrorMsg] = useState("");

  const onLeftChange = (valueL: string | undefined) => {
    setLeftErrorMsg("");
    dispatch(updateDiffLeftInput(valueL ?? ""));
  };

  const onRightChange = (valueR: string | undefined) => {
    setRightErrorMsg("");
    dispatch(updateDiffRightInput(valueR ?? ""));
  };

  const formatLeftInput = (valueL: string | undefined, errorMsg?: string) => {
    setLeftErrorMsg("");
    if (!valueL && !errorMsg) {
      return;
    }
    if (errorMsg) {
      setLeftErrorMsg(errorMsg);
      return;
    }
    if (valueL) {
      onLeftChange(valueL);
    }
  };

  const formatRightInput = (valueR: string | undefined, errorMsg?: string) => {
    setRightErrorMsg("");
    if (!valueR && !errorMsg) {
      return;
    }
    if (errorMsg) {
      setLeftErrorMsg(errorMsg);
      return;
    }

    if (valueR) {
      onRightChange(valueR);
    }
  };

  return (
    <InputOutputViewer
      toolId={ToolKeys.JSON_DIFF}
      byte={""}
      children={
        <DiffViewer
          diffLeftValue={diffLeftValue ?? ""}
          diffRightValue={diffRightValue ?? " "}
          onLeftChange={onLeftChange}
          onRightChange={onRightChange}
          formatLeftInput={formatLeftInput}
          formatRightInput={formatRightInput}
          leftErrorMsg={leftErrorMsg}
          rightErrorMsg={rightErrorMsg}
        />
      }
    />
  );
}
