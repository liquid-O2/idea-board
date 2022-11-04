/* eslint-disable prettier/prettier */
export default interface ActionType {
  type: string;
  text?: string;
  title?: string;
  sortType?: string;
  id?: string | null;
}