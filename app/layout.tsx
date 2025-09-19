import React from "react";
import type {Metadata} from 'next';
import {FontsProvider} from './providers/fonts-provider';
import {proximaNova} from '@/src/shared/lib/fonts';
import './globals.css';

export const metadata: Metadata = {
    title: 'My App',
    description: 'Description',
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={proximaNova.variable}>
            <body className="font-sans antialiased">
                <FontsProvider>
                    {children}
                </FontsProvider>
            </body>
        </html>
    );
}