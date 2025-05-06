import {ClassName} from "@/types/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

export const SocialList: React.FC<ClassName> = ({className}) => {
  return (
    <ul className={cn(
      "flex gap-3",
      className
    )}>
      <li>
        <Link className={"hover:[&>img]:scale-[1.1] focus:[&>img]:scale-[1.1]"} href="#">
          <Image
            className={"transition-transform duration-300"}
            alt={"icon"}
            src={"/img/icons/social/icon-youtube.svg"}
            height={28} width={28}
          />
        </Link>
      </li>
      <li>
        <Link className={"hover:[&>img]:scale-[1.1] focus:[&>img]:scale-[1.1]"} href="#">
          <Image
            className={"transition-transform duration-300"}
            alt={"icon"}
            src={"/img/icons/social/icon-tg.svg"}
            height={28} width={28}
          />
        </Link>
      </li>
      <li>
        <Link className={"hover:[&>img]:scale-[1.1] focus:[&>img]:scale-[1.1]"} href="#">
          <Image
            className={"transition-transform duration-300"}
            alt={"icon"}
            src={"/img/icons/social/icon-whatsapp.svg"}
            height={28} width={28}
          />
        </Link>
      </li>
      <li>
        <Link className={"hover:[&>img]:scale-[1.1] focus:[&>img]:scale-[1.1]"} href="#">
          <Image
            className={"transition-transform duration-300"}
            alt={"icon"}
            src={"/img/icons/social/icon-vk.svg"}
            height={28} width={28}
          />
        </Link>
      </li>

    </ul>
  );
};
