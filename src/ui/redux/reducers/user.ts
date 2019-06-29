import { SetUserNameAction } from "../action";
import { User } from "../index";

type ReducerAction = SetUserNameAction;

const DEFAULT_USER: User = {
  name: "Unknown"
};

export default function userReducer(
  state: User = DEFAULT_USER,
  action: ReducerAction
): User {
  switch (action.type) {
    case "set-user-name": {
      return {
        ...state,
        name: action.name
      };
    }
    default: {
      return state;
    }
  }
}
