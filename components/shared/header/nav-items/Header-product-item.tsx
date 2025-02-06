'use client'

import React, {useEffect, useState} from 'react';
import {Container} from "@/components/shared/Container";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Overlay} from "@/components/shared/Overlay";

export const HeaderProductItem: React.FC = () => {

  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    if (isProductsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isProductsOpen]);

  return (

    <>
      <Overlay isOpen={isProductsOpen}/>

      <li
        className="z-30"
        onMouseLeave={() => setIsProductsOpen(false)}
      >

        <button
          className="bg-white hover:text-[#6941f9] transition-colors duration-300 py-3 px-3"
          type='button'
          onMouseEnter={() => setIsProductsOpen(true)}
        >
          Товары
        </button>

        <div className={cn(
          'absolute top-[49px] left-0 right-0 bg-white transition-all duration-300 ease-in-out z-30',
          isProductsOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}>
          <Container className={cn(
            'relative py-5 transition-all duration-300 ease-in-out',
            isProductsOpen ? 'top-0 ' : '-top-3',
          )}>
            <ul>
              <li>
                <Link href={'#'}>
                  Лазерные CO2
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  Маркираторы
                </Link>
              </li>
              <li>
                <Link href={'#'}>
                  Металлорезы
                </Link>
              </li>
            </ul>
          </Container>
        </div>

      </li>
    </>

  );
};
