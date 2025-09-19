'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import './Header.scss';
import { Button, Icon } from '@/shared/ui';
import { Navigation } from './Navigation';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Image
            src="/app_logo.svg"
            alt="App Logo"
            width={142}
            height={44}
            priority
          />
        </div>
        
        <div className="header__navigation">
          <Navigation />
        </div>

        <div className="header__actions">
          <Icon name="box" color="primary" size="22" />
          <Button variant="primary">
            Депозит
            <Icon name="add-circle" color="primary" size="24" />
          </Button>
        </div>
      </div>
    </header>
  );
};