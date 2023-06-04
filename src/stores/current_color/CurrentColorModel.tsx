import { types } from "mobx-state-tree";

const CurrentColorModel = types
  .model({
    currentColor: types.string,
  })
  .actions((self) => ({
    setCurrentColor(currentColor: CurrentColor) {
      console.log("currentColor: ", currentColor);
      self.currentColor = currentColor;
    },
  }));

export default CurrentColorModel;
