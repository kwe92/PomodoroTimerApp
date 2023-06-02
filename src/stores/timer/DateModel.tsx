import { types } from "mobx-state-tree";

const DateModel = types
  .model({
    timer: types.Date,
  })
  .actions((self) => ({
    setTimer(dateObj: Date) {
      self.timer = dateObj;
    },
  }));

export default DateModel;
