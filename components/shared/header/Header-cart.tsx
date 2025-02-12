import React from 'react';
import Link from "next/link";
import {ShoppingCart} from "lucide-react";

export const HeaderCart: React.FC = () => {

  return (
    <>
      <Link className="flex items-center gap-1 mx-2 hover:text-red-500 transition duration-300" href={"/cart"}>
        <ShoppingCart size={18} className="relative" strokeWidth={2}/>
        <b>3</b>
      </Link>

      <span className="w-[1px] h-6 bg-gray-300"></span>
    </>
  );
};