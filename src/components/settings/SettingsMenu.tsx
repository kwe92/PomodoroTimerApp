import DialogModal from "../modal_popup/DialogModal";
import CustomizedMenus from "./SelectTimeDropDown";
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

interface Props {
  isOpened: boolean;
  onProceed: VoidFunction;
  setIsOpened: (x: boolean) => void;
}

export default function SettingsMenu(props: Props) {
  const close = () => {
    props.setIsOpened(false);
  };
  const proceed = () => {
    props.onProceed();
    props.setIsOpened(false);
  };
  return (
    <DialogModal
      title="Dialog modal example"
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
                <FontCircle>
                  <p style={{ color: "white" }}>Aa</p>
                </FontCircle>
                <p>Aa</p>
                <p>Aa</p>
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
}
