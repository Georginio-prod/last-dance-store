"use client"

// Importing necessary components and hooks
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import {Button} from "@/components/ui/button";

// Home page heading component
export const Heading = () => {
    // Using useRouter hook from Next.js for navigation
    const route = useRouter();
    // State to manage the loading animation
    const [isLoading, setIsLoading] = useState(false);

    // Function to handle button click and start loading animation
    const handleButtonClick = () => {
        setIsLoading(true);
        // Simulating an asynchronous operation before navigation
        setTimeout(() => {
            route.push("/Page");    
        }, 1000); // Adjust the timeout as needed
    };

    return (
        <div className="max-w-3xl space-x-4 relative">
            {/* Text content */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl">
                Faites passer vos messages commandes via 
                <span className="underline"> Shoppi-M</span>
            </h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h4 className="
                text-base
                sm:text-xl
                md:text-2xl
                font-medium
                mb-4
            ">
                Shoppi-M est une application web de e-commerce innovante qui révolutionne 
                votre expérience d'achat en ligne grâce à une interface intuitive et des offres exclusives.<br/>
                Découvrez une vaste sélection de produits à des prix compétitifs, le tout à portée de clic.
            </h4>


            {/* Loading animation or Button */}
            {isLoading ? (
                <div className="absolute bottom-0 right-0 mb-4 mr-4">
                    <div className="w-6 h-6 border-2 border-r-emerald-500 rounded-full animate-spin"></div>
                </div>
            ) : (
                <Button
                    onClick={handleButtonClick}
                    className="relative mb-4"
                    style={{ transition: "opacity 0.5s ease-in-out" }}
                >
                    Let's go
                    <ArrowRight className="h-4 w-4 ml-2"/>
                </Button>
            )}
        </div>
    );
};