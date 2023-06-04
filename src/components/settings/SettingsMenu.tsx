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
  const setCurrentColor = currentColorModel.setCurrentColor;

  const close = () => {
    props.setIsOpened(false);
  };
  const proceed = () => {
    props.onProceed();
    props.setIsOpened(false);
  };
  const { font1, font2, font3 } = fontSettings;

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
                    colorSettings.setIsRed();
                    setCurrentColor(AppTheme.otherColors.red0);
                  }}
                >
                  <CheckIcon displayon={colorSettings.isRed.toString()} />
                </RedCircle>
                <BlueCircle
                  onClick={() => {
                    colorSettings.setIsBlue();
                    setCurrentColor(AppTheme.otherColors.blue0);
                  }}
                >
                  <CheckIcon displayon={colorSettings.isBlue.toString()} />
                </BlueCircle>
                <PurpleCircle
                  onClick={() => {
                    colorSettings.setIsPurple();
                    setCurrentColor(AppTheme.otherColors.purple0);
                  }}
                >
                  <CheckIcon displayon={colorSettings.isPurple.toString()} />
                </PurpleCircle>
              </OptionsContainer>
            </ColorSettingsEle>
          </BottomSection>

          {/* <button type="button" onClick={proceed}>
            Apply
          </button> */}
        </SettingsContainer>
      </ModalBackDrop>
    </DialogModal>
  );
});
