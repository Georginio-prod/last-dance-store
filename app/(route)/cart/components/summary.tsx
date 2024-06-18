"use client";

import { Button } from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Summary = () => {
    const searchParams =useSearchParams();
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);


    useEffect (() => {
        if(searchParams.get("Success")){
            toast.success("Paymemnt Complète");
            removeAll();
        }

        if( searchParams.get("Annueler")) {
            toast.error("Quelque chose s'est mal passé")
        }
    }, [searchParams, removeAll]);

    
    const totalPrice = items.reduce((total, item) => {
        return total + Number(item.price);
    }, 0)

    const onCheckout = async () => {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
            productIds: items.map((item) => item.id),
        });

        window.location = Response.data.url;

    }
    return (
        <div className="
            mt-8
            rounded-lg
            bg-white
            shadow-md
            px-6
            py-8 
            sm:p-8
            lg:col-span-5
            lg:mt-0
            lg:p-10
        ">
            <h2 className="text-xl font-semibold text-gray-900">Récapitulatif de la commande</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-lg font-medium text-gray-900">
                        Total de la commande
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button onClick={onCheckout} className="w-full mt-6 bg-blue-600 text-white hover:bg-blue-700">
                Vérifier
            </Button>
        </div>
    )
}

export default Summary;
