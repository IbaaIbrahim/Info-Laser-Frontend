import {cn} from "@/lib/utils";
import React from "react";
import {ClassName} from "@/types/types";
import {SocialListVkYoutube} from "@/components/shared/social/SocialListVkYoutube";

export const SocialBannerMini: React.FC<ClassName> = ({className}) => {

  return (
    <div className={cn("", className)}>
      <div
        className="grid grid-cols-12 bg-[url('/img/banners/bg/social-banner-mini.jpg')] bg-no-repeat bg-cover rounded-4xl overflow-hidden min-h-[336px] px-10"
      >
        <div className="col-start-1 col-end-7 self-center">
          <div className={"text-white"}>
            <p className="text-xl font-semibold mb-2">Больше информации в соцсетях</p>
            <p className="text-sm mb-5">
              Продаем, настраиваем и обслуживаем лазерные станки, граверы и резаки с 2009 года.
            </p>
            <SocialListVkYoutube/>
          </div>
        </div>
      </div>
    </div>
  );
}
