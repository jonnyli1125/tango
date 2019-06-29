import { Settings } from "../index";

type ReducerAction = never;

const DEFAULT_STATE: Settings = {
  localization: "en"
};

export default function settingsReducer(
  state: Settings = DEFAULT_STATE,
  action: ReducerAction
): Settings {
  return state;
}
