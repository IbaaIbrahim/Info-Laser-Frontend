import Link from "next/link";
import {ChevronLeft} from "lucide-react";
import {Button} from "@/components/ui/Button";
import React from "react";
import {ArticleCategoriesProps, ClassName} from "@/types/types";
import {cn} from "@/lib/utils";

interface ArticlesGroupListUpd extends ClassName {
  categories: ArticleCategoriesProps[];
}

export const ArticleCategoriesMain: React.FC<ArticlesGroupListUpd> = ({className, categories}) => {

  return (
    <aside className={cn("", className)}>
      <h2 className={"text-[22px] font-semibold mb-3"}>Разделы статей</h2>
      <ul className={"mb-4"}>
        {categories.map((section) => (
          <li key={section.id} className={"not-last:mb-3"}>
            <Link
              className={"group flex gap-3 hover:text-[#4F26E9] focus:text-[#4F26E9] leading-5 transition-colors duration-300"}
              href={`/blog/${section.slug}`}
            >
              <div
                className={"flex flex-shrink-0 items-center justify-center h-7 w-7 rounded-full bg-[#4F26E91A] rotate-180 p-0"}
              >
                <ChevronLeft
                  size={"16"}
                  className={"relative text-[#4F26E9] transition-colors duration-300 group-hover:text-red-400 group-focus:text-red-400"}
                />
              </div>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className={"rounded-3xl  border-2 border-[#4F26E91A]"}>
        <Link href="/blog">Все статьи</Link>
      </Button>
    </aside>
  );
}
