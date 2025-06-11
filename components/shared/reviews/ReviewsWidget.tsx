"use client";

import {useEffect, useRef, useState} from "react";
import {Container} from "@/components/shared/Container";
import {cn} from "@/lib/utils";

export const ReviewsWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://res.smartwidgets.ru/app.js";
    script.defer = true;
    document.body.appendChild(script);

    const observer = new MutationObserver(() => {
      if (widgetRef.current && widgetRef.current.children.length > 0) {
        setLoaded(true);
        observer.disconnect();
      }
    });

    if (widgetRef.current) {
      observer.observe(widgetRef.current, {childList: true});
    }

    return () => {
      document.body.removeChild(script);
      observer.disconnect();
    };
  }, []);

  return (
    <section>

      <Container>
        <h1 className={cn(
          "text-5xl font-semibold mb-6",
          "max-xl:text-4xl max-xl:mb-5",
          "max-md:text-3xl max-md:mb-3",
        )}>Отзывы о InfoLaser</h1>
        {!loaded && (
          <div className={cn(
            "text-2xl text-gray-500 mb-4 text-center py-5 h-[500px]",
            "max-xl:py-3"
          )}>
            Загрузка отзывов...
          </div>
        )}
        <div className={cn(
          "py-5 mb-10",
          "max-xl:py-3 max-xl:mb-5"
        )}>
          <div ref={widgetRef} className="sw-app" data-app="b6ba7929f64022e644378ceb1d70da07"></div>
        </div>

      </Container>

    </section>
  );
};
