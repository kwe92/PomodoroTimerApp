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
} from "./SettingsMenuStyles";
import { observer } from "mobx-react";
import Stores from "../../stores/Stores";
import AppTheme from "../../styles/theme/AppTheme";
import CustomizedMenus from "./SelectTimeDropDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FC, Fragment } from "react";

interface Props {
  isOpened: boolean;
  onProceed: VoidFunction;
  setIsOpened: (x: boolean) => void;
  // settingsModel: any;
}

export default observer(function SettingsMenu(props: Props) {
  const { settingsModel, currentColorModel, currentFontModel } = Stores();
  const { fontSettings, colorSettings } = settingsModel;
  const { currentColor, setCurrentColor } = currentColorModel;
  const { isSans, isMono, isSlab, setSans, setMono, setSlab, setFont } =
    currentFontModel;
  const close = () => {
    props.setIsOpened(false);
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
      title="Dialog modal"
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
              <SetTimerDropDownContainer>
                <p>pomodoro</p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(239,241,250,1)",
                    padding: "0.0625rem 0.625rem",
                  }}
                >
                  <p style={{ color: "black" }}>25</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "rgba(187,189,203,1)",
                    }}
                  >
                    <KeyboardArrowUpIcon />
                    <KeyboardArrowDownIcon />
                  </div>
                </div>

                <TimerDropdownOptions
                  currentColor={currentColor as CurrentColor}
                />
              </SetTimerDropDownContainer>
              <SetTimerDropDownContainer>
                <p>short break</p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(239,241,250,1)",
                    padding: "0.0625rem 0.625rem",
                  }}
                >
                  <p style={{ color: "black" }}>25</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "rgba(187,189,203,1)",
                    }}
                  >
                    <KeyboardArrowUpIcon />
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
                <TimerDropdownOptions
                  currentColor={currentColor as CurrentColor}
                />
              </SetTimerDropDownContainer>
              <SetTimerDropDownContainer>
                <p>long</p>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "rgba(239,241,250,1)",
                    padding: "0.0625rem 0.625rem",
                  }}
                >
                  <p style={{ color: "black" }}>25</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      color: "rgba(187,189,203,1)",
                    }}
                  >
                    <KeyboardArrowUpIcon />
                    <KeyboardArrowDownIcon />
                  </div>
                </div>
                <TimerDropdownOptions
                  currentColor={currentColor as CurrentColor}
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
}: {
  currentColor: CurrentColor;
  currentTimer?: number;
  setCurrentTimer?: Function;
}) => {
  return (
    <SetTimerDropDownOptions>
      <SetTimerListTile onClick={() => {}} currentColor={currentColor}>
        <AccessTimeIcon />
        <p>15</p>
      </SetTimerListTile>
      <SetTimerListTile onClick={() => {}} currentColor={currentColor}>
        <AccessTimeIcon />
        <p>20</p>
      </SetTimerListTile>
      <SetTimerListTile onClick={() => {}} currentColor={currentColor}>
        <AccessTimeIcon />
        <p>25</p>
      </SetTimerListTile>
      <SetTimerListTile onClick={() => {}} currentColor={currentColor}>
        <AccessTimeIcon />
        <p>30</p>
      </SetTimerListTile>
      <SetTimerListTile onClick={() => {}} currentColor={currentColor}>
        <AccessTimeIcon />
        <p>45</p>
      </SetTimerListTile>
      <SetTimerListTile onClick={() => {}} currentColor={currentColor}>
        <AccessTimeIcon />
        <p>52</p>
      </SetTimerListTile>
      <SetTimerListTile onClick={() => {}} currentColor={currentColor}>
        <AccessTimeIcon />
        <p>60</p>
      </SetTimerListTile>
    </SetTimerDropDownOptions>
  );
};

// const TimerListTile = () => {
//   return
// };
