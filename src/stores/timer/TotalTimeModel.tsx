import { types } from "mobx-state-tree";

const TotalTimeModel = types
  .model({ totalTime: types.number })
  .actions((self) => ({
    setTotalTime(totalTime: number) {
      self.totalTime = totalTime;
    },
  }));

export default TotalTimeModel;
