import React, {useEffect} from "react";
import {createPortal} from "react-dom";
import {cn} from "@/lib/utils";
import {X} from "lucide-react";
import {Button} from "@/components/ui/Button";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string
}

export const CallbackModal: React.FC<CallbackModalProps> = ({isOpen, onClose, className}) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };

  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 flex items-center justify-center bg-black/50 transition-all ease-in-out duration-300 z-50',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        className,
      )}
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 hover:cursor-pointer transition-colors duration-300"
        >
          <X size={18}/>
        </button>
        <h2 className="text-lg font-semibold mb-4">Заказать звонок</h2>
        <form>
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="tel"
            placeholder="Ваш телефон"
            className="w-full border p-2 rounded mb-3"
          />
          <Button type="submit" className="w-full">
            Отправить
          </Button>
        </form>
      </div>
    </div>,
    document.body
  );
};
