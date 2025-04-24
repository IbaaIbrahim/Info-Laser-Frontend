'use client';

import React, {useState} from "react";
import {Container} from "@/components/shared/Container";
import {cn} from "@/lib/utils";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/Tabs";
import Image from "next/image";
import {ClassName, Material} from "@/types/types";

interface ProductMaterialsTabsProps extends ClassName {
  materials: Material[];
}

export const ProductMaterialsTabs: React.FC<ProductMaterialsTabsProps> = ({materials, className}) => {
  const [activeTab, setActiveTab] = useState<string>(materials.length > 0 ? String(materials[0].id) : "");

  if (materials.length === 0) {
    return null;
  }

  const data = [
    {
      id: 1,
      name: 'banner-1',
      img_url: '/img/product/materials/1.jpg',
      width: 1370,
      height: 720
    },
    {
      id: 2,
      name: 'banner-2',
      img_url: '/img/product/materials/2.jpg',
      width: 671,
      height: 345
    },
    {
      id: 3,
      name: 'banner-3',
      img_url: '/img/product/materials/3.jpg',
      width: 671,
      height: 345
    }
  ];

  return (
    <section className={cn("", className)}>
      <Container>
        <h2 className="text-4xl font-bold text-center mb-10">Обрабатываемые материалы</h2>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col">
          <TabsList className="rounded-3xl" asChild>
            <ul className={cn(
              "flex place-self-center gap-x-1 mb-3 h-auto rounded-3xl border border-[#ABB4D7]/10 bg-[#ABB4D7] py-1 px-2",
            )}>
              {materials.map((material) => (
                <li key={material.id}>
                  <TabsTrigger
                    value={String(material.id)}
                    className={cn(
                      "rounded-3xl px-3 py-2 gap-3 hover:cursor-pointer",
                      activeTab === String(material.id)
                        ? "data-[state=active]:bg-[var(--violet)]/80 data-[state=active]:text-white"
                        : "text-black"
                    )}
                  >
                    <Image
                      src={material.image_url}
                      width={30}
                      height={30}
                      alt={material.name}
                      className="rounded-full object-cover"
                    />
                    {material.name}
                  </TabsTrigger>
                </li>
              ))}
            </ul>
          </TabsList>

          {materials.map((material) => (
            <TabsContent key={material.id} value={String(material.id)} asChild>
              <div className="text-center">
                <p className="text-lg font-medium">Материал: {material.name}</p>
                <ul className={"grid grid-cols-12 gap-5 rounded-4xl overflow-hidden"}>
                  {data.slice(0, 3).map((item, index) => (
                    <li
                      key={item.id}
                      className={cn(
                        "",
                        index === 0 ? "col-start-1 col-end-9 row-span-2" : "",
                        index === 1 ? "col-start-9 col-end-13" : "",
                        index === 2 ? "col-start-9 col-end-13" : "",
                      )}
                    >
                      <Image
                        src={item.img_url}
                        width={item.width}
                        height={item.height}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Container>
    </section>
  );
};
