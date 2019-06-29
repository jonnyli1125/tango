import { createSelector } from "reselect";

import Localization from "../../localization";
import ENGLISH from "../../localization/english";

import { State } from "../index";

export const getLocalization: (state: State) => Localization = createSelector(
  state => state.settings.localization,
  localization => {
    switch (localization) {
      case "en":
        return ENGLISH;
      default:
        throw new Error("Unrecognized language");
    }
  }
);
