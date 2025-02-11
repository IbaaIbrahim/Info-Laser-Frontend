'use client';

import React, {useState} from "react";
import {Button} from "@/components/ui/Button";
import {CallbackModal} from "@/components/shared/modals/Callback-modal";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";

export const CallbackBtnProduct: React.FC<ClassName> = ({className}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} type="button" className={cn('', className)}>
        Заказать
      </Button>

      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </>
  );
};
