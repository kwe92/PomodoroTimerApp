import { types } from "mobx-state-tree";

const FontSettingsModel = types
  .model({
    font1: types.boolean,
    font2: types.boolean,
    font3: types.boolean,
  })
  .actions((self) => ({
    setFont1() {
      self.font1 = true;
      self.font2 = false;
      self.font3 = false;
    },
    setFont2() {
      self.font1 = false;
      self.font2 = true;
      self.font3 = false;
    },
    setFont3() {
      self.font1 = false;
      self.font2 = false;
      self.font3 = true;
    },
  }));

export default FontSettingsModel;
