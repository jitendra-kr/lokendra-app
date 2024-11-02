"use client";

import { getToolInput } from "@ft/common/selectors/toolsSelectors";
import {
  updateDiffLeftInput,
  updateDiffRightInput,
} from "@ft/common/state/tools/toolsInput.slice";
import DiffViewer from "@ft/components/common/Ide/DiffViewer/DiffViewer";
import { useAppDispatch } from "@ft/hooks/useAppDispatch";
import { useAppSelector } from "@ft/hooks/useAppSelector";
import { useState } from "react";
import { InputOutputViewer } from "../../helper/InputOutputViewer/InputOutputViewer";

export function JSONDiff() {
  const dispatch = useAppDispatch();
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
    <InputOutputViewer byte={""}>
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
    </InputOutputViewer>
  );
}
