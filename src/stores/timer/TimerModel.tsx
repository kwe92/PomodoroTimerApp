import { types } from "mobx-state-tree";
import { useState } from "react";
import { useTimer } from "react-timer-hook";

const TimerModel = types
  .model({
    autoStart: types.boolean,
    expiryTimestamp: types.Date,
  })
  .volatile((self) => ({
    onExpire: () => console.warn("onExpire called"),
  }))
  .actions((self) => ({
    useTimer(timer: Date) {
      const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({
        autoStart: self.autoStart,
        expiryTimestamp: timer,
        onExpire: self.onExpire,
      });

      return {
        seconds: seconds,
        minutes: minutes,
        pause: pause,
        resume: resume,
        restart: restart,
      };
    },
  }));

export default TimerModel;
