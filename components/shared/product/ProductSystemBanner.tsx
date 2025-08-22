import React from "react";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import Link from "next/link";
import Image from "next/image";

export const ProductSystemBanner: React.FC<ClassName> = ({className}) => {
  return (
    <Link
      className={cn(
        "block overflow-hidden rounded-3xl",
        "max-md:rounded-[10px]",
        className
      )}
      href="#"
    >
      <Image
        src={"/img/product/banners/system-banner.jpg"}
        width={987}
        height={120}
        alt={"Собственная система рассрочки платежей"}
        className="w-full h-full object-cover"
      />
    </Link>
  );
}
