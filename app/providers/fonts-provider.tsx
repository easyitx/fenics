'use client';

import React from "react";
import {proximaNova} from "@/src/shared/lib/fonts";

export function FontsProvider({ children }: { children: React.ReactNode }) {
    return (
        <div className={`${proximaNova.variable} font-sans`}>
            {children}
        </div>
    );
}