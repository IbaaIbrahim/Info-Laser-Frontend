'use client';

import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import {Checkbox} from "@/components/ui/Checkbox";
import {Input} from "@/components/ui/Input";
import {Textarea} from "@/components/ui/Textarea";
import Link from "next/link";
import PhoneInput from 'react-phone-input-2';

export const CartForm: React.FC<ClassName> = ({className}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className={cn("bg-[var(--gray)] p-7 rounded-3xl", className)}>
      <p className={"text-2xl font-semibold mb-5"}>Личные данные</p>

      <form className="space-y-4" onSubmit={handleSubmit}>

        <ul className={"grid grid-col-12 gap-5 auto-rows-auto"}>
          <li className="col-start-1 col-end-6">
            <label
              className="block text-sm font-semibold after:content-['*'] after:text-red-500 after:ml-1 mb-2"
              htmlFor={"name"}
            >
              Ваше Имя:
            </label>
            <Input
              className={"rounded-3xl bg-white"}
              id={"name"} required type="text" placeholder="Имя" value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </li>

          <li className="col-start-6 col-end-13">
            <label
              className="block text-sm font-semibold after:content-['*'] after:text-red-500 after:ml-1 mb-2"
              htmlFor={"mail"}
            >
              Ваша эл. почта:
            </label>
            <Input
              className={"rounded-3xl bg-white"}
              id={"mail"} required type="email" placeholder="mail@mail.ru" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>

          <li className="col-start-1 col-end-6">
            <label
              className="block text-sm font-semibold after:content-['*'] after:text-red-500 after:ml-1 mb-2"
              htmlFor="tel"
            >
              Телефон:
            </label>
            <PhoneInput
              country={'ru'}
              value={phone}
              onChange={(val) => setPhone(val)}
              inputProps={{
                name: 'tel',
                required: true,
                id: 'tel',
              }}
              inputClass="!rounded-3xl !bg-white !p-3 !w-full !px-12 focus:!border-[var(--violet)] focus:!ring-0 focus:!outline-none"
              containerClass=""
              masks={{ru: '(...) ...-..-..'}}
              placeholder="+7 (___) ___-__-__"
            />
          </li>

          <li className="col-start-6 col-end-13">
            <label
              className="block text-sm font-semibold dark:text-gray-300 mb-2"
              htmlFor={"comment"}
            >
              Комментарий:
            </label>
            <Textarea className={"rounded-3xl bg-white"} id={"comment"} placeholder="Введите комментарий"/>
          </li>
        </ul>

        <div className={"flex gap-5"}>
          <div className="flex items-start gap-2">
            <Checkbox
              required id="agree" checked={isChecked}
              onCheckedChange={(checked) => setIsChecked(checked === true)}
            />
            <label htmlFor="agree" className="text-sm dark:text-gray-300">
              Нажимая на &#34;Оформить предзаказ&#34; я даю{" "}
              <Link href={"#"} className="text-[var(--violet)] underline hover:text-[var(--red)] transition-colors">
                Согласие на обработку персональных данных
              </Link>{" "}
              и{" "}
              <Link href={"#"} className="text-[var(--violet)] underline hover:text-[var(--red)] transition-colors">
                Политику в отношении обработки персональных данных
              </Link>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};
