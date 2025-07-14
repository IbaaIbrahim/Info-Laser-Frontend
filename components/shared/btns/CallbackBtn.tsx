import React from "react";
import {Button} from "@/components/ui/Button";
import {Dialog, DialogDescription, DialogTrigger} from "@/components/ui/Dialog"
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import {DialogContentCallbackModal} from "@/components/shared/modals/DialogContentCallbackModal";

type CallbackBtnProps = {
  title: string;
} & ClassName;

export const CallbackBtn: React.FC<CallbackBtnProps> = ({title, className}) => {

  return (
    <Dialog>

      <DialogTrigger asChild>
        <Button className={cn("hover:bg-inherit focus:bg-inherit", className)}>
          {title}
        </Button>
      </DialogTrigger>

      <DialogDescription className="hidden"></DialogDescription>

      <DialogContentCallbackModal/>

    </Dialog>
  );
};
