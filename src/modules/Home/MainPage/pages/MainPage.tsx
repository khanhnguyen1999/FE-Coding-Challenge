import { Consumer, Data } from "@core/interfaces";
import { set_consumer_info } from "@store/actions/consumer";
import { Button, Form } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// components
import ConsumerMainForm from "../components/ConsumerMainForm";
import ConsumerOptional from "../components/ConsumerOptional";
import ConsumerEditForm from "../components/CosumerEditForm";

interface IOptions {
  name: string;
  function?: () => void;
}

const MainPage = () => {
  const [form] = Form.useForm<{ text?: string; message?: string }>();

  /* Redux */
  const dispatch = useDispatch();

  const [boxes, setBoxes] = useState<Consumer[]>([]);
  const [currentData, setCurrentData] = useState("");
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [dragId, setDragId] = useState<number | null>(null);
  const [updateValue, setUpdateValue] = useState<Data | null>(null);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    value: string,
  ) => {
    const id = parseInt(event.currentTarget.id, 10);
    setCurrentData(value);
    setDragId(id);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (dragId !== null) {
      const dropIndex = boxes.findIndex(
        (box) => box.id === parseInt(event.currentTarget.id, 10),
      );
      if (dropIndex === -1) {
        const newBoxes = [
          ...boxes,
          {
            id: Math.floor(Math.random() * 1000000000),
            component: currentData,
            props: {
              text: "",
              message: "",
            },
          },
        ];
        setBoxes(newBoxes);
      }
      setDragId(null);
      setCurrentData("");
    }
  };

  const showCoordinates = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setClientX(event.clientX - rect.left);
    setClientY(event.clientY - rect.top);
  };

  const onChangePropsContent = (type: string, id: number) => {
    setUpdateValue({ type: type, id: id });
    const value1 = boxes.find((item) => item.id === id);
    value1?.props && form.setFieldsValue(value1?.props);
  };

  const handleOnChange = () => {
    const formData = form.getFieldsValue();
    const index = boxes.findIndex((item) => item.id === updateValue?.id);
    if (index !== -1) {
      const newData = [...boxes];
      newData[index].props = formData;
      setBoxes(newData);
    }
  };

  const onSave = () => dispatch(set_consumer_info(boxes));
  const onView = () => window.open("/consumer", "_blank");

  return (
    <div className="main-page">
      <div className="main-page_container">
        {[
          {
            name: "Save",
            function: onSave,
          },
          {
            name: "Undo",
          },
          {
            name: "Redo",
          },
          {
            name: "Export",
          },
          {
            name: "Import",
          },
          {
            name: "View",
            function: onView,
          },
        ].map((item: IOptions, index: number) => (
          <Button
            style={{ margin: "5px" }}
            onClick={item.function || (() => {})}
            key={`OPTIONS:${index}`}
            type="primary"
            danger
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div className="main-page_optional">
        <ConsumerOptional onDragStart={onDragStart} />
        <div className="main-page_optional_consumer">
          <div style={{ height: "100%" }}>
            <ConsumerMainForm
              boxes={boxes}
              clientX={clientX}
              clientY={clientY}
              currentData={currentData}
              updateValue={updateValue}
              onDrop={onDrop}
              onDragOver={onDragOver}
              showCoordinates={showCoordinates}
              onChangePropsContent={onChangePropsContent}
            />
          </div>
          <div className="main-page_optional_consumer-form">
            <ConsumerEditForm
              updateValue={updateValue}
              handleOnChange={handleOnChange}
              form={form}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
