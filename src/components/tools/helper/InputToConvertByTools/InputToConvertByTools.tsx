import { Input } from "antd";
import { useEffect, useState } from "react";
import { SCREENS } from "../../../../common/enums";
import { getToolInput } from "../../../../common/selectors";
import { updateToolsInput } from "../../../../common/state/tools/toolsInput.slice";
import {
  useAppDispatch,
  useAppSelector,
  useGetUrl,
  useGetUrlPath,
} from "../../../../hooks";
import { useGetQueryString } from "../../../../hooks/useGetQueryString";
import { messageDestroy, messageError } from "../../../../utils";
import { EditorActions } from "../../../common/Ide/EditorActions";
import styles from "./InputToConvertByTools.module.css";

export enum inputType {
  input = "input",
  textarea = "textarea",
}

type onChangeProp = {
  target: {
    value: string;
  };
};
type InputToConvertByToolsProps = {
  onChangeCb: (value: string) => void;
  placeholder?: string;
  row?: number;
  type?: inputType;
  inputNumber?: boolean;
};

export const InputToConvertByTools = ({
  onChangeCb,
  type,
  placeholder = "  Start typing ...",
  inputNumber,
}: InputToConvertByToolsProps) => {
  const [inputValue, setInputValue] = useState("");
  const { url } = useGetUrl();
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(getToolInput);
  const { pathname } = useGetUrlPath();

  const hideEditorActions = [
    SCREENS.UUID_GENERATOR,
    SCREENS.NUMBER_TO_WORDS,
  ].includes(pathname as SCREENS);

  const {
    params: { data },
  } = useGetQueryString();

  const onChange = ({ target: { value } }: onChangeProp) => {
    onChangeCb(value);
    dispatch(updateToolsInput(value));
  };

  useEffect(() => {
    if (data) {
      onChange({ target: { value: data } });
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      onChange({ target: { value: data } });
    }
  }, [url]);
  return (
    <>
      {!hideEditorActions && (
        <EditorActions
          clear={() => {
            onChange({ target: { value: "" } });
          }}
          onChange={(value) => {
            if (value) {
              onChange({ target: { value } });
            }
          }}
        />
      )}
      {type === inputType.input ? (
        <Input
          size="large"
          placeholder={placeholder}
          style={{ marginTop: "30px" }}
          autoFocus
          allowClear={true}
          onChange={(value) => {
            const errorKey = "invalidinput";
            messageDestroy(errorKey);
            const targetValue = value.target.value;
            var pattern = /^\d+$/;
            if (!targetValue) {
              setInputValue("");
              onChange({ target: { value: "" } });
            }
            if (targetValue && inputNumber) {
              if (pattern.test(targetValue)) {
                setInputValue(targetValue);
                onChange({ target: { value: targetValue } });
                return;
              }
              messageError({
                content: "Only number allowed",
                duration: 4,
                key: errorKey,
              });
            }
            if (targetValue && !inputNumber) {
              setInputValue(targetValue);
              onChange({ target: { value: targetValue } });
              return;
            }
          }}
          value={inputValue}
        ></Input>
      ) : (
        <textarea
          autoFocus
          className={styles.textarea}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        ></textarea>
      )}
    </>
  );
};
