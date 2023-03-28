import { Consumer, Data } from "@core/interfaces";
import { Button } from "antd";
import { memo } from "react";
import { VALUE } from "../config";

interface IProps {
  clientX: number;
  clientY: number;
  currentData: string;
  boxes: Consumer[];
  updateValue: Data | null;
  showCoordinates: (event: React.MouseEvent<HTMLDivElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>) => void;
  onChangePropsContent: (type: string, id: number) => void;
}

const ConsumerMainForm = ({
  showCoordinates,
  onDragOver,
  onDrop,
  clientX,
  clientY,
  currentData,
  boxes,
  updateValue,
  onChangePropsContent,
}: IProps) => {
  const configValue = () => boxes.find((item) => item.id === updateValue?.id);

  return (
    <div
      className="consumer-main-form"
      onMouseMove={showCoordinates}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <div className="consumer-main-form_value">
        <div>
          Mouse: ({clientX},{clientY})
        </div>
        <div>Dragging: {currentData}</div>
        <div>Instances: {boxes.length}</div>
        <div>Config: {JSON.stringify(configValue())}</div>
      </div>
      <div>
        {boxes.map((box) => (
          <div key={box.id}>
            {box.component === VALUE.ELEMENT_BUTTON && (
              <Button
                style={{ marginBottom: "10px" }}
                onClick={() => onChangePropsContent(VALUE.BUTTON, box.id)}
                type="primary"
              >
                {box.props.text || VALUE.BUTTON}
              </Button>
            )}
            {box.component === VALUE.ELEMENT_PARAGRAPH && (
              <p onClick={() => onChangePropsContent(VALUE.PARAGRAPH, box.id)}>
                {box.props.text || VALUE.PARAGRAPH}
              </p>
            )}
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};
export default memo(ConsumerMainForm);
