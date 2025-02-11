import {Container} from "@/components/shared/Container";
import {Button} from "@/components/ui/Button";
import {BannerMain} from "@/components/shared/carousels/banners/Banner-main";
import Link from "next/link";
import {NewProductsSlider} from "@/components/shared/carousels/New-products-slider";

export default function MainPage() {
  return (
    <>
      <section className="mb-5">
        <h2 className="hidden">Основные акции и новости компании</h2>
        <BannerMain/>
      </section>

      <section className="my-5">
        <Container>
          <Link href="/catalog">
            <Button className="">Каталог</Button>
          </Link>
        </Container>
      </section>

      <NewProductsSlider className=""/>
    </>
  );
}
