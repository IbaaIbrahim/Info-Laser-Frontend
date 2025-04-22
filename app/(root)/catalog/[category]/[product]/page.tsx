import React from "react";
import {Container} from "@/components/shared/Container";
import {getOneProductBySlug} from "@/api/api";
import {cn, formatPrice} from "@/lib/utils";
import {ProductGallerySlider} from "@/components/shared/carousels/product/ProductGallerySlider";
import {AllCharacteristicsBtn} from "@/components/shared/btns/AllCharacteristicsBtnProduct";
import {Star} from "lucide-react";
import {AddToCartBtnProduct} from "@/components/shared/btns/AddToCartBtnProduct";
import Link from "next/link";
import {PrePurchaseBtn} from "@/components/shared/btns/PrePurchaseBtn";
import {ProductBenefitSpoilers} from "@/components/shared/product/ProductBenefitSpoilers";
import {OfflineOrOnlineMain} from "@/components/shared/OfflineOrOnlineMain";
import {BannerProduct} from "@/components/shared/carousels/banners/BannerProduct";
import {ChooseLaserMachineSlider} from "@/components/shared/carousels/product/ChooseLaserMachineSlider";
import {AboutMainMarquee} from "@/components/shared/about/AboutMainMarquee";
import {PurchaseOrder} from "@/components/shared/PurchaseOrder";
import {ProductGeneralAccessoriesBanner} from "@/components/shared/product/ProductGeneralAccessoriesBanner";
import {ProductSystemBanner} from "@/components/shared/product/ProductSystemBanner";

interface PageProps {
  params: Promise<{ product: string; category: string }>;
}

const ProductPage: React.FC<PageProps> = async ({params}) => {
  const {product: productSlug} = await params;
  const product = await getOneProductBySlug(productSlug);

  if (!product) {
    return (
      <Container>
        <p>Продукт не найден</p>
      </Container>
    );
  }

  return (
    <>
      {/* Главная информация */}
      <section className={"mt-10 mb-15"}>
        <Container className="relative grid grid-cols-12 gap-10">
          {/* Галерея продукта */}
          <div className="col-start-1 col-end-7 auto-rows-max">
            <ProductGallerySlider
              className={cn("sticky top-3")}
              images={product.product_attachments ?? []}
              labels={product.labels}
            />
          </div>

          <div className="col-start-7 col-end-13">
            {/* Информация о продукте */}
            <div className={cn("mb-7")}>
              <h1 className={cn("text-4xl font-bold mb-3")}>
                {product.name}
              </h1>

              <div className={cn("flex items-center justify-between gap-3 font-semibold")}>
                <p>{product.description}</p>
                <span className={cn("flex items-center gap-0.5")}>
                {Array.from({length: 5}).map((_, index) => (
                  <Star
                    key={index}
                    className="fill-[var(--gold)] last:mr-2"
                    strokeWidth={0}
                    size={12}
                  />
                ))}
                  {product.rating}
              </span>
              </div>
            </div>

            {/* Краткие характеристики */}
            {product.characteristics && (() => {
              // Сортируем: сначала is_featured, затем по order
              const sorted = [...product.characteristics].sort(
                (a, b) =>
                  Number(b.is_featured ?? 0) - Number(a.is_featured ?? 0) ||
                  Number(a.order ?? 0) - Number(b.order ?? 0)
              );

              // Берём только первые 8 характеристик
              const limited = sorted.slice(0, 8);

              // Делим на 2 колонки: 4 слева, 4 справа
              const midpoint = Math.ceil(limited.length / 2);
              const firstColumn = limited.slice(0, midpoint);
              const secondColumn = limited.slice(midpoint);

              return (
                <dl className="flex gap-x-10 text-sm mb-3">
                  {[firstColumn, secondColumn].map((column, i) => (
                    <div key={i} className="flex-1 space-y-1">
                      {column.map((spec, index) => (
                        <div key={index} className="flex items-end">
                          <dt
                            className={cn(
                              "flex-1 relative overflow-hidden text-[var(--gray-text)] z-30",
                              "after:content-[''] after:absolute after:bottom-1 after:w-[80%] after:h-px after:border-b after:border-dotted after:border-gray-400 after:z-20",
                              spec.is_featured ? "font-bold" : ""
                            )}
                          >
                            {spec.name}
                          </dt>
                          <dd
                            className={cn(
                              "relative bg-white text-right z-30",
                              spec.is_featured ? "font-bold" : ""
                            )}
                          >
                            {spec.value} {spec.unit}
                          </dd>
                        </div>
                      ))}
                    </div>
                  ))}
                </dl>
              );
            })()}

            <AllCharacteristicsBtn className={cn("mb-7")}/>

            {/* Цены товара */}
            <div className={cn("flex gap-2 justify-around mb-5")}>

              {Boolean(product.inStock) && (
                <>
                  <div className={cn("p-5 bg-[var(--gray)] rounded-3xl")}>
                    <span className={"text-sm"}>Цена без НДС</span>
                    <div className={cn("mb-5")}>
                      <b className="text-2xl">
                        {formatPrice(product.stockPrice)} ₽
                      </b>
                    </div>
                    <div className={cn("flex gap-2")}>
                      <AddToCartBtnProduct
                        product={product}
                      />

                      <Link
                        className={cn(
                          "text-[var(--violet)] bg-[var(--violet-dark)] rounded-3xl py-3 px-5 transition-colors",
                          "hover:text-white hover:bg-[var(--violet)]"
                        )}
                        href={"#"}
                      >
                        Рассрочка
                      </Link>
                    </div>
                  </div>
                </>
              )}

              <div className={cn("p-5 bg-[var(--gray)] rounded-3xl")}>
                <span className={"block text-sm mb-1"}>Под заказ без НДС</span>
                <div className={cn("flex items-center gap-3 mb-5")}>
                  <b className="text-2xl">
                    {formatPrice(product.orderPrice)} ₽
                  </b>
                  {product.labels?.some((label) => label.slug === "in_sale") && (
                    <div className={""}>
                      <span className="hidden">Акционная цена</span>
                      <div className="inline-block bg-black/7 px-2 py-1 rounded-3xl">
                        <b className="text-[15px] font-normal line-through">
                          {formatPrice(product.newPrice)} ₽
                        </b>
                      </div>
                    </div>
                  )}
                </div>

                <div className={cn("flex gap-2")}>
                  <PrePurchaseBtn title={"Предзаказ"}/>

                  <Link
                    className={cn(
                      "text-[var(--violet)] bg-[var(--violet-dark)] rounded-3xl py-3 px-5 transition-colors",
                      "hover:text-white hover:bg-[var(--violet)]"
                    )}
                    href={"#"}
                  >
                    Рассрочка
                  </Link>
                </div>
              </div>
            </div>

            {/* Баннер рассрочки */}
            <ProductSystemBanner className={"mb-7"}/>

            {/* Спойлеры */}
            <ProductBenefitSpoilers/>
          </div>
        </Container>
      </section>

      <OfflineOrOnlineMain className={cn("mb-15")}/>

      {/* Полное описание + полные характеристики */}
      <div className={cn("mb-15")}>
        <Container className={cn("grid grid-cols-12 gap-10")}>

          {/* Полное описание + баннер */}
          <section className={cn("col-start-1 col-end-5 pt-8")}>
            <div className={"mb-5"}>
              <h2 className={"text-2xl font-semibold mb-5"}>Описание</h2>
              <p className={"font-semibold mb-2"}>
                Лазерный станок WATTSAN micro 0203 — малогабаритный настольный станок для мелкосерийного производства.
                Предназначен для лазерной резки и гравировки неметаллических материалов, дерева до 3 мм и пластика до
                5-6
                мм.
              </p>
              <p className={"text-sm text-[var(--gray-text)] mb-3"}>
                Прост в работе и в обслуживании, долговечен. Станок можно использовать в производстве рекламы, штампов,
                сувениров, персонализации продукции, деревообработке и полиграфии.
              </p>
              <p className={"text-sm text-[var(--gray-text)]"}>
                Рабочий стол станка имеет размер 200×300 мм. Мощность лазерной трубки составляет 40 Ватт. Чтобы данный
                станок прослужил вам дольше, рекомендуем сразу установить на него систему охлаждения для лазерной
                трубки.
                В качестве тюнинга, на станок можно установить более мощный лазерный излучатель.
              </p>
            </div>

            <BannerProduct/>
          </section>

          {/* Полные характеристики */}
          <section
            id="specifications"
            className={cn("col-start-5 col-end-13 bg-[var(--gray)] rounded-3xl p-8")}
          >
            <h2 className={"text-2xl font-semibold mb-5"}>Характеристики</h2>
            {product.characteristics && (() => {
              // Сортируем: сначала is_featured, затем по order
              const sorted = [...product.characteristics].sort(
                (a, b) =>
                  Number(b.is_featured ?? 0) - Number(a.is_featured ?? 0) ||
                  Number(a.order ?? 0) - Number(b.order ?? 0)
              );

              // Делим на 2 колонки
              const midpoint = Math.ceil(sorted.length / 2);
              const firstColumn = sorted.slice(0, midpoint);
              const secondColumn = sorted.slice(midpoint);

              return (
                <dl className="flex gap-x-10 text-sm mb-3">
                  {[firstColumn, secondColumn].map((column, i) => (
                    <div key={i} className="flex-1 space-y-3">
                      {column.map((spec, index) => (
                        <div key={index} className="flex items-end">
                          <dt
                            className={cn(
                              "flex-1 relative overflow-hidden text-[var(--gray-text)] z-30",
                              "after:content-[''] after:absolute after:bottom-1 after:w-[80%] after:h-px after:border-b after:border-dotted after:border-gray-400 after:z-20",
                            )}
                          >
                            {spec.name}
                          </dt>
                          <dd className={cn("relative text-right z-30",)}>
                            {spec.value} {spec.unit}
                          </dd>
                        </div>
                      ))}
                    </div>
                  ))}
                </dl>
              );
            })()}
          </section>

        </Container>
      </div>

      <ChooseLaserMachineSlider className={"mb-15"}/>

      <ProductGeneralAccessoriesBanner className={"mb-15"}/>

      <AboutMainMarquee className={cn("mb-25")}/>

      <PurchaseOrder className={"mb-15"}/>
    </>
  );
};

export default ProductPage;