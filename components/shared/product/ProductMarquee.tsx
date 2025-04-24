import React from "react";
import {cn} from "@/lib/utils";
import {Attachments, ClassName} from "@/types/types";
import {Container} from "@/components/shared/Container";
import Image from "next/image";

interface ProductMarqueeProps extends ClassName {
  images: Attachments[];
}

export const ProductMarquee: React.FC<ProductMarqueeProps> = ({className, images}) => {

  const data = {
    topImages: [
      {
        name: "1",
        url: "/img/about-marquee/top-marquee/1.jpg"
      },
      {
        name: "1",
        url: "/img/about-marquee/top-marquee/2.jpg"
      },
      {
        name: "3",
        url: "/img/about-marquee/top-marquee/3.jpg"
      },
      {
        name: "4",
        url: "/img/about-marquee/top-marquee/4.jpg"
      },
      {
        name: "5",
        url: "/img/about-marquee/top-marquee/5.jpg"
      },
      {
        name: "6",
        url: "/img/about-marquee/top-marquee/6.jpg"
      },
      {
        name: "7",
        url: "/img/about-marquee/top-marquee/7.jpg"
      },
      {
        name: "8",
        url: "/img/about-marquee/top-marquee/8.jpg"
      },
      {
        name: "9",
        url: "/img/about-marquee/top-marquee/9.jpg"
      },
      {
        name: "10",
        url: "/img/about-marquee/top-marquee/10.jpg"
      }
    ],
    botImages: [
      {
        name: "1",
        url: "/img/about-marquee/bot-marquee/1.jpg"
      },
      {
        name: "2",
        url: "/img/about-marquee/bot-marquee/2.jpg"
      },
      {
        name: "3",
        url: "/img/about-marquee/bot-marquee/3.jpg"
      },
      {
        name: "4",
        url: "/img/about-marquee/bot-marquee/4.jpg"
      },
      {
        name: "5",
        url: "/img/about-marquee/bot-marquee/5.jpg"
      },
      {
        name: "6",
        url: "/img/about-marquee/bot-marquee/6.jpg"
      },
      {
        name: "7",
        url: "/img/about-marquee/bot-marquee/7.jpg"
      },
      {
        name: "8",
        url: "/img/about-marquee/bot-marquee/8.jpg"
      },
      {
        name: "9",
        url: "/img/about-marquee/bot-marquee/9.jpg"
      },
      {
        name: "10",
        url: "/img/about-marquee/bot-marquee/10.jpg"
      }
    ],
  }

  return (
    <section className={cn("relative pt-15 pb-30", className)}>
      <Container className={"max-w-[760px] mb-10"}>
        <h3 className={"text-center text-3xl"}>
          Машины + Передовое программное обеспечение =
          <span className={"text-[var(--violet)] ml-1"}>Творения, воплощенные в жизнь</span>
        </h3>
      </Container>

      {/* Движущиеся изображения */}
      <div className={"overflow-x-hidden"}>
        <div className="flex space-x-10 mb-5 animate-scroll-right">
          {[...data.topImages, ...data.topImages].map((item, index) => (
            <div key={index} className="rounded-3xl max-h-[160px] max-w-[160px] min-w-[160px] overflow-hidden">
              <Image
                src={item.url}
                alt={item.name}
                width={160}
                height={160}
              />
            </div>
          ))}
        </div>

        <div className="flex space-x-10 animate-scroll-left">
          {[...data.botImages, ...data.botImages].map((item, index) => (
            <div key={index} className="rounded-3xl max-h-[160px] max-w-[160px] min-w-[160px] overflow-hidden">
              <Image
                src={item.url}
                alt={item.name}
                width={160}
                height={160}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Картинка по центру */}
      <div className="absolute top-[215px] left-1/2 transform -translate-x-1/2 w-[500px] h-[430px]">
        {images.map((image) => {
          return (
            Boolean(image && image.is_main) && (
              <Image
                key={image.id}
                className="absolute z-30 w-full h-full object-cover"
                src={image.external_url}
                alt={image.name}
                width={700}
                height={400}
              />
            )
          )
        })}

      </div>
    </section>
  );
};
