import React from "react";
import {Button} from "@/components/ui/Button";
import {
  Dialog,
  DialogContent, DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog"

export const CallbackBtnProduct = () => {

  return (
    <Dialog>

      <DialogTrigger className="mb-2" asChild>
        <Button>Заказать</Button>
      </DialogTrigger>

      <DialogDescription className="hidden"></DialogDescription>

      <DialogContent>
        <DialogTitle>Заказать обратный звонок</DialogTitle>

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
