
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import React from "react";

const MarketingLayout=({
                           children
                       }:{
    children: React.ReactNode;
}) => {

    return(
        <div className="h-full dark:bg-[#1F1F1F]">

            <main className="
                h-full 
            "> 
                <ModalProvider/>
                <Navbar/>
                {children}
               
            </main>
        </div>
    )
}

export default MarketingLayout;