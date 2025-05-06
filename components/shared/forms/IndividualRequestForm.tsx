"use client"

import React, {useState} from "react";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import {Container} from "@/components/shared/Container";
import {Input} from "@/components/ui/Input";
import {Textarea} from "@/components/ui/Textarea";
import {Checkbox} from "@/components/ui/Checkbox";
import PhoneInput from "react-phone-input-2";
import Link from "next/link";
import {Button} from "@/components/ui/Button";

export const IndividualRequestForm: React.FC<ClassName> = ({className}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <section className={cn(
      "bg-[var(--gray)] py-15",
      className
    )}>
      <Container>
        <div className={cn(
          "grid grid-cols-12"
        )}>
          <div className={"col-start-1 col-end-4"}>
            <h2 className={cn("text-4xl font-semibold mb-5")}>Индивидуальный запрос</h2>
            <p className={cn("text-[var(--gray-text)]")}>Вы не нашли ответа на свой вопрос напишите нам.</p>
          </div>

          <form className="col-start-6 col-end-13 space-y-4" onSubmit={handleSubmit}>

            <ul className={"grid grid-col-12 gap-5"}>

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

              <li className="col-start-1 col-end-13">
                <label
                  className="block text-sm font-semibold dark:text-gray-300 mb-2"
                  htmlFor={"comment"}
                >
                  Комментарий:
                </label>
                <Textarea className={"rounded-2xl bg-white"} id={"comment"} placeholder="Введите комментарий"/>
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

            <Button type="submit" className="basis-[280px] p-5 rounded-3xl">
              Отправить запрос
            </Button>
          </form>
        </div>

      </Container>
    </section>
  );
};
