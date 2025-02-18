import React from "react";
import {ClassName} from "@/types/types";
import {cn} from "@/lib/utils";
import {Container} from "@/components/shared/Container";
import {Clock, Mail, Phone} from "lucide-react";
import Link from "next/link";
import {Logo} from "@/components/shared/Logo";
import {CallbackBtn} from "@/components/shared/btns/Callback-btn";

export const Footer: React.FC<ClassName> = ({className}) => {

  return (
    <footer className={cn('bg-[#3d3d3d]/60 py-10 mt-10', className)}>
      <Container>
        <div className={cn(
          'grid grid-cols-5 gap-10 text-sm',
          'max-lg:grid-cols-4',
          'max-md:grid-cols-1 max-md:gap-4'
        )}>

          <div className="text-white">
            <Logo className="mb-2"/>
            <p className="">Лазерные и фрезерные станки</p>
            <p className=" mt-4">Наши соцсети:</p>
            <ul className="flex gap-3 mt-2">
              <li>
                <Link className="" href="#">
                  YouTube
                </Link>
              </li>
              <li>
                <Link className="" href="#">
                  Vk
                </Link>
              </li>
            </ul>
            <p className="mt-4">
              Товары, представленные на сайте, не являются публичной офертой
            </p>
          </div>

          <div className="text-white">
            <h3 className="font-semibold uppercase border-b border-gray-300 pb-1 mb-2">Компания</h3>
            <ul className="space-y-1 ">
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  База знаний
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300"
                  href="#"
                >
                  Клиенты
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Оплата и доставка
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300"
                  href="#"
                >
                  Сервис
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300"
                  href="#"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="font-semibold uppercase border-b border-gray-300 pb-1 mb-2">Лазерные станки</h3>
            <ul className="space-y-1 ">
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерные станки CO2
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерные маркеры
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерные труборезы
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерные станки по металлу
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерные сварочные аппараты
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерные очистки
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h3 className="font-semibold uppercase border-b border-gray-300 pb-1 mb-2">Комплектующие</h3>
            <ul className="space-y-1 ">
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерных станков
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Лазерных маркеров
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Станков по металлу
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300" href="#"
                >
                  Фрезерных станков
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300"
                  href="#"
                >
                  Плоттеров
                </Link>
              </li>
            </ul>
          </div>

          <dl className="text-white">

            <div className="flex gap-x-2 mb-4">
              <Mail size={16}/>
              <div>
                <dt className="uppercase">Почта</dt>
                <dd>
                  <Link
                    className="font-semibold hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300"
                    href="mailto:info@infolaser.ru"
                  >
                    info@infolaser.ru
                  </Link>
                </dd>
              </div>
            </div>

            <div className="flex gap-x-2 mb-4">
              <Phone size={16}/>
              <div>
                <dt className="uppercase">Телефон</dt>
                <dd>
                  <Link
                    className="font-semibold hover:text-[#b82c2c] focus:text-[#b82c2c] transition-colors duration-300"
                    href="tel:88002222741"
                  >
                    8 (800) 222-27-41
                  </Link>
                </dd>
              </div>
            </div>

            <CallbackBtn className="text-white rounded-3xl mb-4" title={"Обратный звонок"}/>

            <div className="flex gap-x-2">
              <Clock size={16}/>
              <div>
                <dt className="uppercase">Время работы</dt>
                <dd><span className="uppercase">пн-пт: 9.00-19.00</span></dd>
              </div>
            </div>

          </dl>
        </div>

        <div className="flex items-center justify-between text-white border-t border-gray-300 text-sm mt-4 pt-4">
          <span>© 2009–{new Date().getFullYear()}, «Инфо-Сервис».</span>
          <span>Согласие на обработку персональных данных</span>
          <span>Политика в отношении обработки персональных данных</span>
        </div>
      </Container>
    </footer>
  );
};