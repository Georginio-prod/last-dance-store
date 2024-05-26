"use client";
import {Button} from "@/components/ui/button";
import {Logo} from "@/app/(Accueil)/_components/logo";

//classe affichant le logo sur le footer
export const Footer = () =>{
    return(
        <div className="
        flex
        items-center
        w-full
        p-6
        bg-background
        z-50
        dark:bg-[#1F1F1F]
     ">
            <Logo/>

            <div className="
            md:ml-auto
            w-full
            justify-between
            md:justify-end
            flex
            items-center
            gap-x-2
            text-muted-foreground
         ">
                {/*création du pied de page */}
                <Button variant="ghost" size="sm" >
                    Politique de Confidentialité
                </Button>
                <Button variant="ghost" size="sm" >
                    termes & Conditions
                </Button>
            </div>
        </div>
    )
}