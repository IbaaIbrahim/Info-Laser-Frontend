import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/Container";
import { ClassName } from "@/types/types";
import { DemoBtn } from "@/components/shared/btns/DemoBtn";
import Image from "next/image";
import FeaturesBanner from "@/types/content/product/features-banner";

export const ProductBenefitBanner: React.FC<ClassName & { featuresBanner?: FeaturesBanner }> = ({ className, featuresBanner }) => {

  if (!featuresBanner) return null;

  return (
    <div className={cn("", className)}>
      <Container>
        <div className={cn(
          "grid grid-cols-12 bg-[var(--gray)] rounded-3xl overflow-hidden",
          "max-xl:flex max-xl:flex-col"
        )}>
          <div className={cn("col-start-1 col-end-7")}>
            <Image
              src={featuresBanner.image ?? "/img/product/benefit.jpg"}
              alt={featuresBanner.title ?? "Блок для преимущества оборудования с картинкой и текстом"}
              style={{ maxHeight: 470, objectFit: 'contain' }}
              width={1060}
              height={705}
              className={"w-full h-full object-cover rounded-3xl"}
            />
          </div>
          <div className={cn(
            "col-start-7 col-end-13 place-content-center px-13 py-3",
            "max-xl:px-5"
          )}>
            <p className={cn(
              "text-2xl font-semibold mb-5",
              "max-md:text-xl max-md:mb-2"
            )}>
              {featuresBanner.title}
            </p>
            <p className={cn(
              "text-sm",
              "max-md:text-xs"
            )}>
              {featuresBanner.desc}
            </p>
            <DemoBtn
              title={featuresBanner.btnText ?? "Написать нам"}
              link={featuresBanner.btnLink}
              className={cn("mt-5 max-md:mt-3")}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
