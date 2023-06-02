import { types } from "mobx-state-tree";

const IsOpenModel = types
  .model({
    isOpened: types.boolean,
  })
  .actions((self) => ({
    setIsOpened(isOpened: boolean) {
      self.isOpened = isOpened;
    },
  }));

export default IsOpenModel;
