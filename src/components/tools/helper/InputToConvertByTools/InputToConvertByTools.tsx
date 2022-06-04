
import { Input, Layout, Form } from "antd";
import { useEffect } from "react";
import { updateToolsInput } from "../../../../common/state/tools/toolsInput.slice"
import { useAppDispatch } from "../../../../hooks";
import { useGetQueryString } from "../../../../hooks/useGetQueryString";
import styles from "./InputToConvertByTools.module.css";

const { TextArea } = Input

type onChangeProp = {
  target: {
    value: string
  }
}
type InputToConvertByToolsProps = {
  onChangeCb: (value: string) => void;
  rules: any
}
export const InputToConvertByTools = ({ onChangeCb, rules }: InputToConvertByToolsProps) => {

  const dispatch = useAppDispatch()
  const [form] = Form.useForm();
  const { params: { data } } = useGetQueryString();


  const onChange = ({ target: { value } }: onChangeProp) => {
    onChangeCb(value)
    dispatch(updateToolsInput({
      value: value
    }))
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({ title: data })
      onChangeCb(data)
      dispatch(updateToolsInput({
        value: data
      }))
    }
  }, [data]);

  return <Form className={styles.container} form={form}>
    <Form.Item
      name="title"
      label=""
      rules={rules}
    >
      <TextArea allowClear={true} className={`${styles.input}`} onChange={onChange} placeholder="Please enter" rows={18} />
    </Form.Item>
  </Form>
}