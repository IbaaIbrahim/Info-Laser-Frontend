import {DemoBtn} from "@/components/shared/btns/DemoBtn";
import {cn} from "@/lib/utils";
import React from "react";
import {ClassName} from "@/types/types";
import {SocialList} from "@/components/shared/social/SocialList";

export const OfflineOrOnlineMini: React.FC<ClassName> = ({className}) => {
  return (
    <div className={cn("", className)}>
      <div
        className="grid grid-cols-12 bg-[url('/img/banners/bg/online-or-offline-mini.jpg')] bg-no-repeat bg-cover rounded-4xl overflow-hidden min-h-[336px] px-10"
      >
        <div className="col-start-7 col-end-13 self-center">
          <div className={""}>
            <p className="text-xl font-semibold mb-2">Online или Offline?</p>
            <p className="text-sm mb-5">
              Продемонстрируем работу оборудования любым удобным способом: в более 50 городах России или по видеосвязи.
            </p>
            <DemoBtn className={"rounded-3xl py-5 mb-3"} title={"Записаться на демонстрацию"}/>
            <SocialList/>
          </div>
        </div>
      </div>
    </div>
  );
}
