export interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose: () => void;
  lazy?: boolean;
}
