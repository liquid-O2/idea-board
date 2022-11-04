import ActionType from "./ActionType";
import IdeasType from "./IdeasType";
// eslint-disable-next-line prettier/prettier
export default interface GlobalStateType{
  dispatch: React.Dispatch<ActionType>;
  ideas: IdeasType[]
  getDate: (date: number) => string
}