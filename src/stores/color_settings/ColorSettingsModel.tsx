import { types } from "mobx-state-tree";

const ColorSettingsModel = types
  .model({
    isRed: types.boolean,
    isBlue: types.boolean,
    isPurple: types.boolean,
  })
  .actions((self) => ({
    setIsRed() {
      self.isRed = true;
      self.isBlue = false;
      self.isPurple = false;
    },
    setIsBlue() {
      self.isRed = false;
      self.isBlue = true;
      self.isPurple = false;
    },
    setIsPurple() {
      self.isRed = false;
      self.isBlue = false;
      self.isPurple = true;
    },
  }));

export default ColorSettingsModel;
