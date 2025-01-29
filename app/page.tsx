import {Container} from "@/components/shared/Container";
import {Button} from "@/components/ui/Button";
import Link from "next/link";

export default function MainPage() {
  return (
    <>

      <Container>
        <section className="my-5">
          
          <div className="flex gap-20 items-center">

            <Link href="/catalog">
              <Button className="">Каталог</Button>
            </Link>
          </div>

        </section>

        Контент главной страницы
      </Container>

    </>
  );
}
