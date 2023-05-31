import DialogModal from "./DialogModal";
import { CrossIcon } from "./ModalPopUpStyles";

interface Props {
  isOpened: boolean;
  onProceed: VoidFunction;
  setIsOpened: (x: boolean) => void;
}

export default function ModalPopUp(props: Props) {
  return (
    <DialogModal
      title="Dialog modal example"
      isOpened={props.isOpened}
      onProceed={props.onProceed}
      onClose={props.setIsOpened}
    >
      {/* Modal Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "33.75rem",
            height: "30.625rem",
            background: "purple",
            borderRadius: "25px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>Setting</h1>
            <CrossIcon
              onClick={() => {
                props.setIsOpened(false);
              }}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              props.onProceed();
              props.setIsOpened(false);
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </DialogModal>
  );
}
