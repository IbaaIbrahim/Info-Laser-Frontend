import {Container} from "@/components/shared/Container";
import React from "react";
import Image from "next/image";
import {getTranslations} from "next-intl/server";
import {cn} from "@/lib/utils";
import {ClassName} from "@/types/types";
import {getOneArticleBySlug} from "@/api/api";
import {SocialList} from "@/components/shared/social/SocialList";
import {ChevronLeft} from "lucide-react";
import Link from "next/link";

interface ArticlePageProps extends ClassName {
  params: Promise<{ article: string }>;
}

export async function generateMetadata(
  {
    params: paramsPromise,
  }: {
    params: Promise<{ locale: string; article: string }>;
  }) {
  const {locale, article} = await paramsPromise;
  const t = await getTranslations({locale});

  const oneArticle = await getOneArticleBySlug(article);

  return {
    title: oneArticle?.name || t("blogMetaTitle"),
    description: t("blogMetaDescription"),
  };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({params, className}) => {
  const {article} = await params;
  const oneArticle = await getOneArticleBySlug(article);

  if (!oneArticle) {
    return (
      <Container>
        <p className="text-red-500">Статья не найдена</p>
      </Container>
    );
  }

  return (
    <>
      <article className={cn("", className)}>
        <Container>
          <div className={"grid grid-cols-12"}>
            <header className="col-span-full mb-10">
              <h1 className="text-5xl font-semibold mb-5">{oneArticle.name} </h1>
              <div className={"grid grid-cols-12 gap-5 mb-5"}>
                <p className="col-start-1 col-end-2 text-sm text-[var(--gray-text)]">
                  Дата:
                  <time className={"ml-2 text-black"} dateTime={oneArticle.date}>
                    {oneArticle.date}
                  </time>
                </p>
                <p className="col-start-2 col-end-5 text-sm text-[var(--gray-text)] text-center">
                  Автор:
                  <span className={"ml-2 text-black"}>
                  Алексей Тихонов
                </span>
                </p>
                <p className="col-start-8 col-end-13 text-sm text-[var(--gray-text)] text-right">
                  Раздел:
                  <span className={"ml-2 text-black"}>
                  {oneArticle.articleCategory[0].name}
                </span>
                </p>
              </div>
              <Image
                className="w-full max-h-[615px] rounded-3xl"
                src={oneArticle.image}
                alt={oneArticle.name}
                width={430}
                height={200}
                priority
              />
            </header>
            <div className={cn("grid grid-cols-12 gap-5 col-span-full", className)}>
              <aside className={cn("col-start-1 col-end-2")}>
                <p className={"font-semibold mb-3 text-center"}>Соцсети</p>
                <SocialList className={"flex-col items-center"}/>
              </aside>
              <div className={cn("col-start-2 col-end-10")}></div>
              <aside className={cn("col-start-10 col-end-13")}>
                <p className={"text-2xl font-semibold mb-5"}>Оглавление</p>
                <ul>
                  <li>
                    <Link className={"flex gap-2"} href={"#"}>
                      <ChevronLeft size={"20"} className={"flex-shrink-0 relative text-[var(--violet)] rotate-180"}/>
                      Как работает станок для лазерной резки металла?
                    </Link>
                  </li>
                </ul>
              </aside>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
};

export default ArticlePage;
