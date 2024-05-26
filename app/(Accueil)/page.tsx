"use client";
import Image from "next/image";
import React from "react";
import {Heading} from "@/app/(Accueil)/_components/Heading";
import Heroes from "@/app/(Accueil)/_components/heroes";
import {Footer} from "@/app/(Accueil)/_components/Footer";


const PageAccueil = () => {
  return (
      <div className="min-full flex flex-col">
        <div className="
                flex
                flex-col
                items-center
                justify-center
                md:justify-start
                text-center
                gap-y-8
                flex-1
                px-6
                pb-10
             ">
          {/*sont des classe avec des effet différent */}
           <Heading/>
            <Heroes/>
            <Footer/>
           


        </div>
      </div>
  )
}

export default PageAccueil;