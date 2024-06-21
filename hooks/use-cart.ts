import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartItem extends Product {
    quantity: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (data: Product, quantity: number) => void;
    removeItem: (id: string) => void;
    updateItemQuantity: (id: string, quantity: number) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: Product, quantity: number) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((item) => item.id === data.id);

            if (existingItem) {
                set({
                    items: currentItems.map((item) =>
                        item.id === data.id
                            ? { ...item, quantity: item.quantity + quantity }
                            : item
                    ),
                });
            } else {
                set({ items: [...currentItems, { ...data, quantity }] });
            }
            toast.success("Article ajouté au panier.");
        },
        removeItem: (id: string) => {
            set({ items: get().items.filter((item) => item.id !== id) });
            toast.success("Article supprimé du panier.");
        },
        updateItemQuantity: (id: string, quantity: number) => {
            set({
                items: get().items.map((item) =>
                    item.id === id ? { ...item, quantity } : item
                ),
            });
            toast.success("Quantité mise à jour.");
        },
        removeAll: () => set({ items: [] }),
    }), {
        name: "Cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
);

export default useCart;
