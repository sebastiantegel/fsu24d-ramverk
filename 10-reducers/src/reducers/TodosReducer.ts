import { Todo } from "../models/Todo";

interface IAction {
  type: IActionType;
  payload: string;
}

export enum IActionType {
  ADDED,
  REMOVED,
  TOGGLED,
}

export const TodosReducer = (todos: Todo[], action: IAction): Todo[] => {
  switch (action.type) {
    case IActionType.ADDED:
      return [...todos, new Todo(action.payload)];

    case IActionType.REMOVED:
      return todos.filter((t) => t.id !== +action.payload);

    case IActionType.TOGGLED:
      return todos.map((t) => {
        if (t.id === +action.payload) {
          return { ...t, done: !t.done };
        }
        return t;
      });

    default:
      return todos;
  }

  //   if (action.type === IActionType.ADDED) {
  //     return [...todos, new Todo(action.payload)];
  //   }

  //   if (action.type === IActionType.REMOVED) {
  //     return todos.filter((t) => t.id !== +action.payload);
  //   }

  //   if (action.type === IActionType.TOGGLED) {
  //     return todos.map((t) => {
  //       if (t.id === +action.payload) {
  //         return { ...t, done: !t.done };
  //       }
  //       return t;
  //     });
  //   }

  //   return todos;
};
