/* eslint-disable prettier/prettier */
export interface ActionType {
  type: string;
  text?: string;
  title?: string;
  sortType?: string;
  id?: string | null;
  time?:number,
  updated?:boolean
}

export interface IdeasType {
  id: string | null;
  title: string;
  text: string;
  updated: boolean;
  time: number;
}

export interface GlobalStateType{
  dispatch: React.Dispatch<ActionType>;
  ideas: IdeasType[]
  getDate: (date: number) => string
}

export interface SelectedItemType {
  title: string,
  text: string,
  id:  string | null,
}