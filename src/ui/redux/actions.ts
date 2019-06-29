export interface SetUserNameAction {
  type: "set-user-name";
  name: string | null;
}

export function setUserName(name: string | null): SetUserNameAction {
  return {
    name,
    type: "set-user-name"
  };
}
