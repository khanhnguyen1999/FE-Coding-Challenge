import { RootState } from "@core/interfaces";

export const get_consumer = () => {
  return (state: RootState) => state.consumer;
};
