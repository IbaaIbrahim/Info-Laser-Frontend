'use client';

import React, {useState} from "react";
import {Button} from "@/components/ui/Button";
import {CallbackModal} from "@/components/shared/modals/Callback-modal";

export const CallbackBtnHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} type="button">
        Заказать обратный звонок
      </Button>

      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </>
  );
};
