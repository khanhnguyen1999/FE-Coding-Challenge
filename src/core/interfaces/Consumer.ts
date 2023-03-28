export interface Consumer {
  id: number;
  component: string;
  props: IProps;
}
export interface IProps {
  text?: string;
  message?: string;
}

export interface Data {
  id: number;
  type: string;
}