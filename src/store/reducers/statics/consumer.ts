import { Consumer } from "@core/interfaces";
import {
  CLEAR_CONSUMER_INFO,
  SET_CONSUMER_INFO
} from "@root/store/actions/consumer";
import { AnyAction } from "redux";


const consumerState = [] as Consumer[];

export default function consumer(state = consumerState, action: AnyAction) {
  switch (action.type) {
  case SET_CONSUMER_INFO: {
    const  consumers = action.payload;

    return consumers;
  }

  case CLEAR_CONSUMER_INFO: {
    return {};
  }

  default:
    return state;
  }
}
