import { useEffect } from "react";
import { getToolInput } from "../../../../common/selectors";
import {
  resetInput,
  updateToolsInput,
} from "../../../../common/state/tools/toolsInput.slice";
import { useAppDispatch, useAppSelector, useGetUrl } from "../../../../hooks";
import { useGetQueryString } from "../../../../hooks/useGetQueryString";
import { EditorActions } from "../../../common/Ide/EditorActions";
import styles from "./InputToConvertByTools.module.css";

type onChangeProp = {
  target: {
    value: string;
  };
};
type InputToConvertByToolsProps = {
  onChangeCb: (value: string) => void;
  rules: any;
  placeholder?: string;
  row?: number;
};

export const InputToConvertByTools = ({
  onChangeCb,
  rules,
  placeholder = "Start typing ...",
}: InputToConvertByToolsProps) => {
  const { url } = useGetUrl();
  const dispatch = useAppDispatch();
  const { value } = useAppSelector(getToolInput);

  const {
    params: { data },
  } = useGetQueryString();

  const onChange = ({ target: { value } }: onChangeProp) => {
    onChangeCb(value);
    dispatch(
      updateToolsInput({
        value: value,
      }),
    );
  };

  useEffect(() => {
    if (data) {
      onChange({ target: { value: data } });
    }
  }, [data]);

  useEffect(() => {
    dispatch(resetInput());
    if (data) {
      onChange({ target: { value: data } });
    }
  }, [url]);

  return (
    <>
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
      <textarea
        className={styles.textarea}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      ></textarea>
    </>
  );
};
