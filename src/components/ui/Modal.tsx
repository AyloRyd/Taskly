import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeButton?: React.ReactNode;
  approveButton?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  closeButton,
  approveButton,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialog.current?.showModal();
    } else {
      dialog.current?.close();
    }
  }, [isOpen]);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) return null;

  return createPortal(
    <dialog
      ref={dialog}
      className="dark:bg-stone-800 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 backdrop:bg-stone-900/60 backdrop:backdrop-blur-sm p-6 rounded-xl shadow-lg"
      onClose={onClose}
    >
      {children}
      <form method="dialog" className="flex gap-5">
        {closeButton}
        {approveButton}
        {!closeButton && !approveButton && (
          <button className="cursor-pointer px-6 py-2 mt-4 w-full rounded-xl bg-stone-700 dark:bg-stone-100 text-stone-100 dark:text-stone-900 hover:bg-stone-600 dark:hover:bg-stone-300 transition-colors ease-in-out">
            Ok
          </button>
        )}
      </form>
    </dialog>,
    modalRoot
  );
};

export default Modal;
