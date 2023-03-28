import { Button } from "antd";
import { VALUE } from "../config";

interface IProps {
  onDragStart: (event: React.DragEvent<HTMLDivElement>, value: string) => void;
}

const ConsumerOptional = ({ onDragStart }: IProps) => {
  return (
    <div className="consumer-optional">
      <Button
        type="primary"
        id="1"
        draggable
        onDragStart={(e) => onDragStart(e, VALUE.ELEMENT_BUTTON)}
      >
        Button
      </Button>
      <p
        id="2"
        draggable
        onDragStart={(e) => onDragStart(e, VALUE.ELEMENT_PARAGRAPH)}
      >
        Paragraph
      </p>
    </div>
  );
};
export default ConsumerOptional;
