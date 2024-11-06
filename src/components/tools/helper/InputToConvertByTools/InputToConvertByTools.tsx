"use client";

import { SCREENS } from "@ft/common/enums/screens";
import { getToolInput } from "@ft/common/selectors/toolsSelectors";
import { EditorActions } from "@ft/components/common/Ide/EditorActions";
import { useAppDispatch } from "@ft/hooks/useAppDispatch";
import { useAppSelector } from "@ft/hooks/useAppSelector";
import { useGetUrl, useGetUrlPath } from "@ft/hooks/useGetUrl";
import { messageDestroy, messageError } from "@ft/utils/antd";
import Input from "antd/es/input/Input";
import { ReactNode, useEffect, useState } from "react";
import { updateToolsInput } from "../../../../common/state/tools/toolsInput.slice";
import { useGetQueryString } from "../../../../hooks/useGetQueryString";
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
  inputEditorActionChild?: ReactNode;
};

export const InputToConvertByTools = ({
  onChangeCb,
  type,
  placeholder = "  Start typing ...",
  inputNumber,
  inputEditorActionChild,
}: InputToConvertByToolsProps) => {
  const [inputValue, setInputValue] = useState("");
  const { url } = useGetUrl();
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(getToolInput);
  const { pathname } = useGetUrlPath();

  const hideEditorActions = [
    SCREENS.UUID_GENERATOR,
    SCREENS.NUMBER_TO_WORDS,
    SCREENS.GENERATE_RANDOM_STRING,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (data) {
      onChange({ target: { value: data } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          // eslint-disable-next-line react/no-children-prop
          children={inputEditorActionChild}
        />
      )}
      {type === inputType.input ? (
        <Input
          aria-label="input-antd"
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
          aria-label="input-textarea"
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
