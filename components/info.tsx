"use client";
import { useState } from "react";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { MouseEventHandler } from "react";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
    const cart = useCart();
    const [quantity, setQuantity] = useState(1);

    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(data, quantity);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <div className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </div>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Types:</h3>
                    <div>{data?.size?.name}</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Couleur</h3>
                    <div
                        className="h-6 w-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: data?.color?.value }}
                    ></div>
                </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <div className="flex items-center gap-x-2">
                    <label htmlFor="quantity" className="font-semibold text-black">
                        Quantité:
                    </label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                        className="w-16 text-center border border-gray-300 rounded"
                    />
                </div>
                <Button className="flex items-center gap-x-2" onClick={onAddToCart}>
                    Ajouter au Panier
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    );
};

export default Info;
