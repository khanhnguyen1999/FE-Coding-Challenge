import { Data } from "@core/interfaces";
import { Form, FormInstance, Input } from "antd";
import { memo } from "react";
import { VALUE } from "../config";

interface IProps {
  updateValue: Data | null;
  handleOnChange: () => void;
  form: FormInstance<{ text?: string; message?: string }>;
}

const ConsumerEditForm = ({ updateValue, handleOnChange, form }: IProps) => {
  return (
    <div className="consumer-edit-form">
      {updateValue?.type === VALUE.BUTTON && (
        <div style={{ padding: "20px" }}>
          <Form
            form={form}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 16 }}
            onChange={() => handleOnChange()}
          >
            <Form.Item label="Button Text" name="text">
              <Input />
            </Form.Item>
            <Form.Item label="Alert Message" name="message">
              <Input />
            </Form.Item>
          </Form>
        </div>
      )}
      {updateValue?.type === VALUE.PARAGRAPH && (
        <div style={{ padding: "20px" }}>
          <Form
            form={form}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 16 }}
            onChange={() => handleOnChange()}
          >
            <Form.Item label="Button Text" name="text">
              <Input />
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};
export default memo(ConsumerEditForm);
