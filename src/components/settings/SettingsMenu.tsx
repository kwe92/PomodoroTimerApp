import DialogModal from "../modal_popup/DialogModal";
import {
  CrossIcon,
  ModalBackDrop,
  SettingsContainer,
  TopSection,
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
          <button type="button" onClick={proceed}>
            Apply
          </button>
        </SettingsContainer>
      </ModalBackDrop>
    </DialogModal>
  );
}
