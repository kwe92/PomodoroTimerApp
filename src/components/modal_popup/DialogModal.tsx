import { MouseEvent, useEffect, useRef } from "react";
import { Container } from "./DialogModalStyles";

const isClickInsideRectangle = (e: MouseEvent, element: HTMLElement) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

interface Props {
  title: string;
  isOpened: boolean;
  onProceed: () => void;
  onClose: (x: boolean) => void;
  children: React.ReactNode;
}

const DialogModal = ({
  title,
  isOpened,
  onProceed,
  onClose,
  children,
}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  // const proceedAndClose = () => {
  //   onProceed();
  //   onClose(false);
  // };

  return (
    <Container
      ref={ref}
      onCancel={() => {
        onClose(false);
      }}
      onClick={(e: any) =>
        ref.current && !isClickInsideRectangle(e, ref.current) && onClose(false)
      }
    >
      <h3>{title}</h3>

      {children}
      {/* 
      <Buttons>
        <button onClick={proceedAndClose}>Proceed</button>
        <button onClick={onClose}>Close</button>
      </Buttons> */}
    </Container>
  );
};

export default DialogModal;
