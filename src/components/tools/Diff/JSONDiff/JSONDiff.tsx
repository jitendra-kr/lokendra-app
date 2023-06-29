import { Content } from "antd/lib/layout/layout";
import dynamic from "next/dynamic";
import styles from "../../../../../styles/StringToAscii.module.css";
import { getToolInput } from "../../../../common/selectors";
import {
  updateDiffLeftInput,
  updateDiffRightInput,
} from "../../../../common/state/tools";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

import { useState } from "react";
import { ToolsBody } from "../../ToolsBody";

const DiffIde = dynamic(() => import("../../../common/Ide/DiffIde/DiffIde"), {
  ssr: false,
});
const DiffViewer = dynamic(
  () => import("../../../common/Ide/DiffViewer/DiffViewer"),
  {
    ssr: false,
  },
);

export function JSONDiff() {
  const dispatch = useAppDispatch();
  const { diffLeftValue, diffRightValue } = useAppSelector(getToolInput);
  const [showDiff, setShowDiff] = useState(false);

  const onLeftChange = (valueL: string | undefined) => {
    dispatch(updateDiffLeftInput(valueL ?? ""));
  };

  const onRightChange = (valueR: string | undefined) => {
    dispatch(updateDiffRightInput(valueR ?? ""));
  };

  const onCompareClick = () => {
    setShowDiff((v) => !v);
  };

  return (
    <Content>
      <div className={`${styles.mainDiv} row`}>
        <ToolsBody />
        <>
          {!showDiff && (
            <>
              <div className="col-lg-6">
                <DiffIde
                  id={"leftIDE"}
                  value={diffLeftValue ?? ""}
                  onChange={onLeftChange}
                  onCompareClick={onCompareClick}
                />
              </div>
              <div className="col-lg-6">
                <DiffIde
                  id={"rightIDE"}
                  value={diffRightValue ?? ""}
                  onChange={onRightChange}
                  onCompareClick={onCompareClick}
                />
              </div>
            </>
          )}
          {showDiff && (
            <DiffViewer
              diffLeftValue={diffLeftValue ?? ""}
              diffRightValue={diffRightValue ?? " "}
            />
          )}
        </>
      </div>
    </Content>
  );
  // return <DiffIde value1={value1} value2={value2} />;
}
