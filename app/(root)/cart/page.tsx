import {Container} from "@/components/shared/Container";

const CartPage = () => {

  return (
    <section>
      <Container className="py-5">
        <h1 className="text-3xl font-bold mb-6">Корзина</h1>

        <div className="flex items-center gap-x-10 mb-5">
          <div className="inline-flex gap-x-3 py-2 px-3 bg-gray-200 rounded-3xl">
            <button className="px-3 py-1 bg-gray-400/50 rounded-3xl">Самовывоз</button>
            <button className="px-3 py-1  rounded-3xl">Доставка</button>
          </div>

          <button className="px-3 py-1 bg-green-500/60 rounded-3xl">Оформить заказ</button>
        </div>

        <div className="flex items-center justify-between mb-5 ">
          <div className="font-bold">Фото продукта</div>
          <p className="font-bold">Название продукта</p>
          <p className="font-bold">Количество</p>
          <p className="font-bold">Цена</p>
          <p></p>
        </div>

        <div className="flex items-center justify-between border-y border-y-gray-500 py-5 mb-5">
          <div>Фото продукта №1</div>
          <p>Продукт №1</p>
          <div className="flex gap-x-2">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <p>2000р</p>
          <button>X</button>
        </div>

        <div className="flex justify-end gap-x-2">
          Итого:
          <b>5000р</b>
        </div>

      </Container>
    </section>

  );
};

export default CartPage;
