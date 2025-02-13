import React from "react";
import {Button} from "@/components/ui/Button";
import {
  Dialog,
  DialogContent, DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"

export const CallbackBtnHeader = () => {

  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button>Заказать обратный звонок</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Заказать звонок</DialogTitle>
        <DialogDescription className="hidden"></DialogDescription>

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
      </DialogContent>

    </Dialog>
  );
};
