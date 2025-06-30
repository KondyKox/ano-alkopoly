import type { ModalProps } from "../../types/ModalProps";
import Button from "../Button";
import styles from "../../styles/Modal.module.css";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal__bg}>
      <div className={styles.modal}>
        <Button onClick={onClose} className={styles.modal__btn}>
          x
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
