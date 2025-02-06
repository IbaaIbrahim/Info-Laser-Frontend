import React from "react";
import {createPortal} from "react-dom";

interface OverlayProps {
  isOpen: boolean;
  onClose?: () => void;
}

export const Overlay: React.FC<OverlayProps> = ({isOpen, onClose}) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 z-30"
      onClick={onClose}
    />,
    document.body
  );
};
