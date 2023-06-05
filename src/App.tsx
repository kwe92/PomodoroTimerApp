import React, { Fragment, useEffect } from "react";
import "react-circular-progressbar/dist/styles.css";
import { AppContentContainer } from "./AppStyles";
import AppTitle from "./components/title/Title";
import OptMenu from "./components/options_menu/OptMenu";
import Circles from "./components/circles/Circles";
import SettingsIcon from "./components/settings_icon/SettingsIcon";
import SettingsMenu from "./components/settings/SettingsMenu";
import { observer } from "mobx-react";
import Stores from "./stores/Stores";
import OptMenuHandles from "./components/options_menu/OptMenuHandles";
import AppGlobalTheme from "./indexStyles";
import AppTheme from "./styles/theme/AppTheme";

export default observer(function App() {
  const stores = Stores();
  const { seconds, minutes, pause, resume, restart } =
    stores.timerModel.useTimer(stores.dateModel.timer);
  const opt = {
    timeStore: stores.timeStore,
    optionsStore: stores.optionsStore,
    dateModel: stores.dateModel,
    pause: pause,
    restart: restart,
    timerTextModel: stores.timerTextModel,
    totalTimeModel: stores.totalTimeModel,
  };

  const optMenuHandles = new OptMenuHandles(opt);

  useEffect(() => {
    stores.dateModel.setTimer(new Date());
    stores.dateModel.timer.setSeconds(
      stores.dateModel.timer.getSeconds() + 60 * stores.timeStore.times.pomodoro
    );
    stores.totalTimeModel.setTotalTime(60 * stores.timeStore.times.pomodoro);
    restart(stores.dateModel.timer, false);
  }, []);

  let timeRemaining = minutes * 60 + seconds;
  let pctTimeRemaining =
    (timeRemaining / stores.totalTimeModel.totalTime) * 100;

  // TODO: expand on this if statement to sound an alarm when the timer reaches 0
  if (timeRemaining == 0) {
    console.log("TIME ELAPSED!!!");
  }

  const handleTimerText = () => {
    stores.timerTextModel.handleTimerText({ resume, pause });
  };

  const onProceed = () => {
    console.log("Proceed clicked");
  };

  const options = {
    pomodoroOption: stores.optionsStore.options.pomodoroOption,
    handlePomodoroOption: optMenuHandles.handlePomodoroOption,
    shortBreakOption: stores.optionsStore.options.shortBreakOption,
    handleShortBreakOption: optMenuHandles.handleShortBreakOption,
    longBreakOption: stores.optionsStore.options.longBreakOption,
    handleLongBreakOption: optMenuHandles.handleLongBreakOption,
  };

  return (
    <Fragment>
      <AppGlobalTheme
        theme={AppTheme}
        currentFont={stores.currentFontModel.currentFont as CurrentFont}
      />
      <AppContentContainer>
        <AppTitle title="pomodoro" />
        <OptMenu options={options} />
        <Circles
          pctTimeRemaining={pctTimeRemaining}
          minutes={minutes}
          seconds={seconds}
          handleTimerText={handleTimerText}
          timerText={stores.timerTextModel.timerText}
        />

        {/* Dialog Modal */}
        <SettingsMenu
          isOpened={stores.isOpenModel.isOpened}
          onProceed={onProceed}
          setIsOpened={stores.isOpenModel.setIsOpened}
        />
        <SettingsIcon setIsOpened={stores.isOpenModel.setIsOpened} />
      </AppContentContainer>
    </Fragment>
  );
});
