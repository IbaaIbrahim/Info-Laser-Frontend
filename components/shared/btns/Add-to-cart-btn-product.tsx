'use client';

import React from "react";
import {Button} from "@/components/ui/Button";
import {Plus} from "lucide-react";
import {useCart} from "@/context/Cart-context";
import {Product} from "@/types/product";
import {cn} from "@/lib/utils";

interface AddToCartButtonProps {
  className?: string;
  product: Product;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({product, className}) => {
  const {addToCart} = useCart();

  return (
    <Button
      variant="outline"
      className={cn("text-base font-bold mb-3", className)}
      onClick={() => addToCart(product)}
    >
      <Plus className="w-5 h-5 mr-1"/> В корзину
    </Button>
  );
};
