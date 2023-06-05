import DialogModal from "../modal_popup/DialogModal";
import {
  CrossIcon,
  ModalBackDrop,
  SettingsContainer,
  TopSection,
  HorizontalLine,
  BottomSection,
  SettingsTimerOptions,
  SetTimerDropDown,
  FontSettings,
  OptionsContainer,
  FontCircle,
  ColorSettings as ColorSettingsEle,
  RedCircle,
  BlueCircle,
  PurpleCircle,
  CheckIcon,
  ApplyButton,
} from "./SettingsMenuStyles";
import { observer } from "mobx-react";
import Stores from "../../stores/Stores";
import AppTheme from "../../styles/theme/AppTheme";

interface Props {
  isOpened: boolean;
  onProceed: VoidFunction;
  setIsOpened: (x: boolean) => void;
  // settingsModel: any;
}

export default observer(function SettingsMenu(props: Props) {
  const { settingsModel, currentColorModel } = Stores();
  const { fontSettings, colorSettings } = settingsModel;
  const { currentColor, setCurrentColor } = currentColorModel;

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
              <SetTimerDropDown />
              <SetTimerDropDown />
              <SetTimerDropDown />
            </SettingsTimerOptions>
            <HorizontalLine />
            <FontSettings>
              <h4>FONT</h4>
              <OptionsContainer>
                <FontCircle
                  isselected={`${font1}`}
                  onClick={() => {
                    fontSettings.setFont1();
                  }}
                >
                  <p>Aa</p>
                </FontCircle>
                <FontCircle
                  isselected={font2.toString()}
                  onClick={() => {
                    fontSettings.setFont2();
                  }}
                >
                  <p>Aa</p>
                </FontCircle>
                <FontCircle
                  isselected={font3.toString()}
                  onClick={() => {
                    fontSettings.setFont3();
                  }}
                >
                  <p>Aa</p>
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
