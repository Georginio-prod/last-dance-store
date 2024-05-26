
import Navbar from "@/components/navbar";
import React from "react";

const PageLayout=({
                           children
                       }:{
    children: React.ReactNode;
}) => {
   

    return(
        <div className="h-full dark:bg-[#1F1F1F]">
 <Navbar/>
            <main className="
                h-full pt-5
            ">  
                {children}
            </main>
        </div>
    )
}

export default PageLayout;