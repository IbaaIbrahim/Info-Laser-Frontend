import React from "react";
import Link from "next/link";
import {Phone} from "lucide-react";
import {CallbackBtn} from "@/components/shared/btns/Callback-btn";

export const HeaderContacts = () => {

  return (
    <>
      <div className="flex items-center flex-col gap-y-1 ml-5">

        <Link
          href="tel:88002222741"
          className="flex items-center gap-x-2 hover:text-[#b82c2c] transition-colors"
        >
          <Phone size={18}/>
          8 (800) 222-27-41
        </Link>

        <CallbackBtn
          className={"bg-inherit text-[#4F26E9] p-0 hover:bg-inherit  hover:text-[#b82c2c] focus:text-[#b82c2c]"}
          title={'Обратный звонок'}
        />

      </div>
    </>
  );
};
