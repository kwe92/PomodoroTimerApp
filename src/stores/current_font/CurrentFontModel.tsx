import { types } from "mobx-state-tree";

const CurrentFontModel = types
  .model({
    currentFont: types.string,
    isSans: types.boolean,
    isMono: types.boolean,
    isSlab: types.boolean,
  })
  .actions((self) => ({
    setSans() {
      self.isSans = true;
      self.isMono = false;
      self.isSlab = false;
    },
    setSlab() {
      self.isSans = false;
      self.isMono = true;
      self.isSlab = false;
    },
    setMono() {
      self.isSans = false;
      self.isMono = false;
      self.isSlab = true;
    },
    setFont(fontFamily: CurrentFont) {
      self.currentFont = fontFamily;
    },
  }));

//   self.currentFont = "'Kumbh Sans', sans-serif";
//   self.currentFont = "'Roboto Slab', serif";
//   self.currentFont = "'Space Mono', monospace";
export default CurrentFontModel;
