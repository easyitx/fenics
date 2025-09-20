import React from "react";
import type {Metadata} from 'next';
import {FontsProvider} from './providers/fonts-provider';
import {proximaNova} from '@/shared/lib/fonts';
import {Header} from '@/widgets';
import './globals.scss';
import '@/shared/styles/index.scss';

export const metadata: Metadata = {
    title: 'My App',
    description: 'Description',
};

export default function RootLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru" className={proximaNova.variable}>
            <body>
                <FontsProvider>
                    <Header />
                    <main>
                        {children}
                    </main>
                </FontsProvider>
            </body>
        </html>
    );
}