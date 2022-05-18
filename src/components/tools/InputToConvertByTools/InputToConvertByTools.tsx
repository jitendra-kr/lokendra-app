
import { Input, Layout, Form } from "antd";
import styles from "./InputToConvertByTools.module.css";

const { TextArea } = Input

type onChangeProp = {
  target: {
    value: string
  }
}
type InputToConvertByToolsProps = {
  onChangeCb: (value: string) => void;
  placeholder: string;
  rules: any
}
export const InputToConvertByTools = ({ onChangeCb, placeholder, rules }: InputToConvertByToolsProps) => {
  const onChange = ({ target: { value } }: onChangeProp) => {
    onChangeCb(value)
  };
  return <Form className={styles.container} >
    <Form.Item
      name="title"
      label=""
      rules={rules}
    >
      <TextArea className={`${styles.input}`} onChange={onChange} placeholder="Please enter" rows={18} />
    </Form.Item>
  </Form>
}