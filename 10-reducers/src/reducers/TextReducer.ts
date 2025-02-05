interface IAction {
  type: string;
  payload: string;
}

export const TextReducer = (text: string, action: IAction): string => {
  if (action.type === "CHANGED") {
    return action.payload;
  }

  return text;
};
