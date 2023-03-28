import { Consumer } from "./Consumer";

export interface RootState {
  [key: string]: any;
  consumer: Consumer[];
  error: Record<string, boolean>;
  loading: Record<string, boolean>;
}
