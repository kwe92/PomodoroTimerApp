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
  ColorSettings,
  RedCircle,
  BlueCircle,
  PurpleCircle,
} from "./SettingsMenuStyles";
import { observer } from "mobx-react";

interface Props {
  isOpened: boolean;
  onProceed: VoidFunction;
  setIsOpened: (x: boolean) => void;
  settingsModel: any;
}

export default observer(function SettingsMenu(props: Props) {
  const close = () => {
    props.setIsOpened(false);
  };
  const proceed = () => {
    props.onProceed();
    props.setIsOpened(false);
  };
  const { font1, font2, font3 } = props.settingsModel.fontSettings;

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
                    props.settingsModel.fontSettings.setFont1();
                  }}
                >
                  <p>Aa</p>
                </FontCircle>
                <FontCircle
                  isselected={font2.toString()}
                  onClick={() => {
                    props.settingsModel.fontSettings.setFont2();
                  }}
                >
                  <p>Aa</p>
                </FontCircle>
                <FontCircle
                  isselected={font3.toString()}
                  onClick={() => {
                    props.settingsModel.fontSettings.setFont3();
                  }}
                >
                  <p>Aa</p>
                </FontCircle>
              </OptionsContainer>
            </FontSettings>
            <HorizontalLine />
            <ColorSettings>
              <h4>COLOR</h4>
              <OptionsContainer>
                <RedCircle></RedCircle>
                <BlueCircle></BlueCircle>
                <PurpleCircle></PurpleCircle>
              </OptionsContainer>
            </ColorSettings>
          </BottomSection>

          {/* <button type="button" onClick={proceed}>
            Apply
          </button> */}
        </SettingsContainer>
      </ModalBackDrop>
    </DialogModal>
  );
});
