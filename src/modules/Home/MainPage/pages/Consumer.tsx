import { get_consumer } from "@store/selectors/consumer";
import { Button } from "antd";
import { useSelector } from "react-redux";
import { VALUE } from "../config";

const Consumer = () => {
  /* Selector */
  const consumers = useSelector(get_consumer());

  return (
    <div className="consumer">
      {consumers.map((item) => {
        if (item.component === VALUE.ELEMENT_BUTTON)
          return (
            <Button
              style={{ marginBottom: "10px" }}
              onClick={() => alert(item.props.message)}
            >
              {item.props.text || VALUE.BUTTON}
            </Button>
          );
        if (item.component === VALUE.ELEMENT_PARAGRAPH)
          return <p>{item.props.text || VALUE.PARAGRAPH}</p>;
      })}
    </div>
  );
};
export default Consumer;
