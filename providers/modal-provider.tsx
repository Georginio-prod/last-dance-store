"use client";

import { useEffect, useState } from "react";
import PreviewModal from "@/components/preview-modal";

const ModalProvider = () => {
    const [isMountted, setIsMounted] = useState(false);

    useEffect(() =>{
        setIsMounted(true);
    },  []);

    if(!isMountted) {
        return null;
    }

    return (
        <>
            <PreviewModal/>
        </>
    )
}

export default ModalProvider;