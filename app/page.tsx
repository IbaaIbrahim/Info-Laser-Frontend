import {Container} from "@/components/shared/Container";
import {Button} from "@/components/ui/Button";
import {MainBanner} from "@/components/shared/Main-banner";
import Link from "next/link";

export default function MainPage() {
  return (
    <>
      <section className="my-5">
        <Container>
          <Link href="/catalog">
            <Button className="">Каталог</Button>
          </Link>
        </Container>
      </section>

      <section>
        <h2 className="hidden">Основные акции и новости компании</h2>
        <MainBanner/>
      </section>
    </>
  );
}
