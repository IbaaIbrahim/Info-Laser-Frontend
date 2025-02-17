'use client'

import React from "react";
import Image from "next/image";
import {useCart} from "@/context/Cart-context";
import {Product} from "@/types/product";

const CartPage = () => {
  const {cart, updateQuantity, removeFromCart, clearCart} = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + (item.quantity ?? 1) * item.orderPrice, 0);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Корзина</h1>

      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          {cart.map((item: Product) => (
            <div key={item.id} className="flex items-center justify-between border-b py-5">
              <Image
                src={item.images?.[0]?.url ?? item.image?.url ?? ''}
                alt={item.name}
                width={50}
                height={50}
              />
              <p>{item.name}</p>

              <div className="flex gap-2">
                <button onClick={() => updateQuantity(item.id, (item.quantity ?? 1) - 1)}>-</button>
                <span>{item.quantity ?? 1}</span>
                <button onClick={() => updateQuantity(item.id, (item.quantity ?? 1) + 1)}>+</button>
              </div>

              <p>{(item.orderPrice * (item.quantity ?? 1)).toLocaleString()}₽</p>

              <button onClick={() => removeFromCart(item.id)}>X</button>
            </div>
          ))}

          <div className="flex justify-end gap-2 mt-5">
            <p>Итого:</p>
            <b>{totalPrice.toLocaleString()}₽</b>
          </div>

          <div onClick={() => clearCart()}>Очистить корзину</div>
        </>
      )}
    </section>
  );
};

export default CartPage;
