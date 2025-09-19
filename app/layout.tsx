import React from "react";
import type {Metadata} from 'next';
import {FontsProvider} from './providers/fonts-provider';
import './globals.css';

export const metadata: Metadata = {
    title: 'My App',
    description: 'Description',
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body>
                <FontsProvider>
                    {children}
                </FontsProvider>
            </body>
        </html>
    );
}