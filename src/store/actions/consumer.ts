import { Consumer } from "@core/interfaces";

export const SET_CONSUMER_INFO = "SET_CONSUMER_INFO";
export const CLEAR_CONSUMER_INFO = "CLEAR_CONSUMER_INFO";

export function set_consumer_info(consumers: Consumer[]) {
  return {
    type: SET_CONSUMER_INFO,
    payload: consumers ,
  };
}

export function clear_customer_info() {
  return {
    type: CLEAR_CONSUMER_INFO,
  };
}
