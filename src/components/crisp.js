"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () =>
{
    useEffect(() =>
    {
        Crisp.configure("da7c0ba1-bb94-44b9-8bd5-53e67ebdfe81");
    });

    return null;
}

export default CrispChat;