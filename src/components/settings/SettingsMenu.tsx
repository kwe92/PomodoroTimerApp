import DialogModal from "../modal_popup/DialogModal";
import {
  CrossIcon,
  ModalBackDrop,
  SettingsContainer,
  TopSection,
  HorizontalLine,
  BottomSection,
  SettingsTimerOptions,
  SetTimerDropDown as SetTimerDropDownContainer,
  FontSettings,
  OptionsContainer,
  FontCircle,
  ColorSettings as ColorSettingsEle,
  RedCircle,
  BlueCircle,
  PurpleCircle,
  CheckIcon,
  ApplyButton,
  SetTimerDropDownOptions,
  SetTimerListTile,
  PickTimeIconListTile,
  ArrowIconContainer,
} from "./SettingsMenuStyles";
import { observer } from "mobx-react";
import Stores from "../../stores/Stores";
import AppTheme from "../../styles/theme/AppTheme";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// TODO: on apply || close reset timer options to false
interface Props {
  isOpened: boolean;
  onProceed: VoidFunction;
  setIsOpened: (x: boolean) => void;
  // settingsModel: any;
}

export default observer(function SettingsMenu(props: Props) {
  const {
    settingsModel,
    currentColorModel,
    currentFontModel,
    dislayTimerOptionsModel,
    timeStore,
  } = Stores();
  const { fontSettings, colorSettings } = settingsModel;
  const { currentColor, setCurrentColor } = currentColorModel;
  const { isSans, isMono, isSlab, setSans, setMono, setSlab, setFont } =
    currentFontModel;
  const close = () => {
    props.setIsOpened(false);
    dislayTimerOptionsModel.closeAllTimerOptions();
  };
  const proceed = () => {
    props.onProceed();
    props.setIsOpened(false);
  };
  const { font1, font2, font3 } = fontSettings;
  const { isRed, isBlue, isPurple, setIsRed, setIsBlue, setIsPurple } =
    colorSettings;

  return (
    <DialogModal
      isOpened={props.isOpened}
      onProceed={props.onProceed}
      onClose={props.setIsOpened}
    >
      {/* Modal Content */}
      <ModalBackDrop>
        <SettingsContainer>
          <TopSection>
            <h1>Setting</h1>
            <CrossIcon onClick={close} />
          </TopSection>
          <HorizontalLine />
          <BottomSection>
            <p style={{ color: "black" }}>T I M E ( M I N U T E S )</p>
            <SettingsTimerOptions>
              <SetTimerDropDownContainer
                onClick={() => {
                  dislayTimerOptionsModel.displayPomodoro();
                }}
              >
                <p id="timer-title">pomodoro</p>
                <PickTimeIconListTile>
                  <p style={{ color: "black" }}>{timeStore.times.pomodoro}</p>
                  <ArrowIconContainer>
                    <KeyboardArrowUpIcon />
                    <KeyboardArrowDownIcon />
                  </ArrowIconContainer>
                </PickTimeIconListTile>

                <TimerDropdownOptions
                  display={dislayTimerOptionsModel.pomodoroTimerOptions.toString()}
                  currentColor={currentColor as CurrentColor}
                  setCurrentTimer={timeStore.times.setPomodoro}
                />
              </SetTimerDropDownContainer>
              <SetTimerDropDownContainer
                onClick={() => {
                  dislayTimerOptionsModel.displayShortBreak();
                }}
              >
                <p id="timer-title">short break</p>
                <PickTimeIconListTile>
                  <p style={{ color: "black" }}>{timeStore.times.shortBreak}</p>
                  <ArrowIconContainer>
                    <KeyboardArrowUpIcon />
                    <KeyboardArrowDownIcon />
                  </ArrowIconContainer>
                </PickTimeIconListTile>
                <TimerDropdownOptions
                  display={dislayTimerOptionsModel.shortBreakTimerOptions.toString()}
                  currentColor={currentColor as CurrentColor}
                  setCurrentTimer={timeStore.times.setShortBreak}
                  offSet={10}
                />
              </SetTimerDropDownContainer>
              <SetTimerDropDownContainer
                onClick={() => {
                  dislayTimerOptionsModel.displayLongBreak();
                }}
              >
                <p id="timer-title">long break</p>
                <PickTimeIconListTile>
                  <p style={{ color: "black" }}>{timeStore.times.longBreak}</p>
                  <ArrowIconContainer>
                    <KeyboardArrowUpIcon />
                    <KeyboardArrowDownIcon />
                  </ArrowIconContainer>
                </PickTimeIconListTile>
                <TimerDropdownOptions
                  display={dislayTimerOptionsModel.longBreakTimerOptions.toString()}
                  currentColor={currentColor as CurrentColor}
                  setCurrentTimer={timeStore.times.setLongBreak}
                  offSet={5}
                />
              </SetTimerDropDownContainer>
            </SettingsTimerOptions>
            <HorizontalLine />
            <FontSettings>
              <h4>FONT</h4>
              <OptionsContainer>
                <FontCircle
                  isselected={`${font1}`}
                  onClick={() => {
                    fontSettings.setFont1();
                    setSans();
                  }}
                >
                  <p style={{ fontFamily: "'Kumbh Sans', sans-serif" }}>Aa</p>
                </FontCircle>
                <FontCircle
                  isselected={font2.toString()}
                  onClick={() => {
                    fontSettings.setFont2();
                    setSlab();
                  }}
                >
                  <p style={{ fontFamily: "'Roboto Slab', serif" }}>Aa</p>
                </FontCircle>
                <FontCircle
                  isselected={font3.toString()}
                  onClick={() => {
                    fontSettings.setFont3();
                    setMono();
                  }}
                >
                  <p style={{ fontFamily: "'Space Mono', monospace" }}>Aa</p>
                </FontCircle>
              </OptionsContainer>
            </FontSettings>
            <HorizontalLine />
            <ColorSettingsEle>
              <h4>COLOR</h4>
              <OptionsContainer>
                <RedCircle
                  onClick={() => {
                    setIsRed();
                  }}
                >
                  <CheckIcon displayon={isRed.toString()} />
                </RedCircle>
                <BlueCircle
                  onClick={() => {
                    setIsBlue();
                  }}
                >
                  <CheckIcon displayon={isBlue.toString()} />
                </BlueCircle>
                <PurpleCircle
                  onClick={() => {
                    setIsPurple();
                  }}
                >
                  <CheckIcon displayon={isPurple.toString()} />
                </PurpleCircle>
              </OptionsContainer>
            </ColorSettingsEle>
          </BottomSection>

          {/* <button type="button" onClick={proceed}>
            Apply
          </button> */}
          <ApplyButton
            type="button"
            currentColor={currentColor as CurrentColor}
            onClick={() => {
              close();
              isSans
                ? setFont("'Kumbh Sans', sans-serif")
                : isSlab
                ? setFont("'Roboto Slab', serif")
                : setFont("'Space Mono', monospace");
              return isRed
                ? setCurrentColor(AppTheme.otherColors.red0)
                : isBlue
                ? setCurrentColor(AppTheme.otherColors.blue0)
                : setCurrentColor(AppTheme.otherColors.purple0);
            }}
          >
            <p>Apply</p>
          </ApplyButton>
        </SettingsContainer>
      </ModalBackDrop>
    </DialogModal>
  );
});

// TODO: Add Props to TimerDropdownOptions
// interface Props {
// currentTimer: number;
// setCurrentTimer: Function;
// }
const TimerDropdownOptions = ({
  currentColor,
  display,
  setCurrentTimer,
  offSet = 0,
}: {
  currentColor: CurrentColor;
  setCurrentTimer: Function;
  display: string;
  offSet?: number;
}) => {
  return (
    <SetTimerDropDownOptions display={display}>
      <SetTimerListTile
        onClick={() => {
          setCurrentTimer(15 - offSet);
        }}
        currentColor={currentColor}
      >
        <AccessTimeIcon />
        <p>{15 - offSet}</p>
      </SetTimerListTile>
      <SetTimerListTile
        onClick={() => {
          setCurrentTimer(20 - offSet);
        }}
        currentColor={currentColor}
      >
        <AccessTimeIcon />
        <p>{20 - offSet}</p>
      </SetTimerListTile>
      <SetTimerListTile
        onClick={() => {
          setCurrentTimer(25 - offSet);
        }}
        currentColor={currentColor}
      >
        <AccessTimeIcon />
        <p>{25 - offSet}</p>
      </SetTimerListTile>
      <SetTimerListTile
        onClick={() => {
          setCurrentTimer(30 - offSet);
        }}
        currentColor={currentColor}
      >
        <AccessTimeIcon />
        <p>{30 - offSet}</p>
      </SetTimerListTile>
      <SetTimerListTile
        onClick={() => {
          setCurrentTimer(45 - offSet);
        }}
        currentColor={currentColor}
      >
        <AccessTimeIcon />
        <p>{45 - offSet}</p>
      </SetTimerListTile>
      <SetTimerListTile
        onClick={() => {
          setCurrentTimer(52 - offSet);
        }}
        currentColor={currentColor}
      >
        <AccessTimeIcon />
        <p>{52 - offSet}</p>
      </SetTimerListTile>
      <SetTimerListTile
        onClick={() => {
          setCurrentTimer(60 - offSet);
        }}
        currentColor={currentColor}
      >
        <AccessTimeIcon />
        <p>{60 - offSet}</p>
      </SetTimerListTile>
    </SetTimerDropDownOptions>
  );
};

// const TimerListTile = () => {
//   return
// };
