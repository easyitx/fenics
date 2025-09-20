'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/shared/ui';
import './Navigation.scss';

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  disabled?: boolean;
}

const navigationItems: NavigationItem[] = [
  { id: 'cases', label: 'Кейсы', icon: 'box', href: '/' },
  { id: 'upgrades', label: 'Апгрейды', icon: 'flash', href: '/upgrades', disabled: false },
  { id: 'bonuses', label: 'Бонусы', icon: 'magic-star', href: '/bonuses', disabled: false },
  { id: 'calendar', label: 'Календарь', icon: 'calendar', href: '/calendar', disabled: false },
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          
          if (item.disabled) {
            return (
              <li key={item.id} className="navigation__item navigation__item--disabled">
                <span className="navigation__link navigation__link--disabled">
                  <Icon 
                    name={item.icon} 
                    color="secondary" 
                    size="22"
                    className="navigation__icon"
                  />
                  <span className="navigation__text">{item.label}</span>
                </span>
              </li>
            );
          }

          return (
            <li key={item.id} className="navigation__item">
              <Link 
                href={item.href} 
                className={`navigation__link ${isActive ? 'navigation__link--active' : ''}`}
              >
                <Icon 
                  name={item.icon} 
                  color={isActive ? 'primary' : 'secondary'} 
                  size="20" 
                  className="navigation__icon"
                />
                <span className="navigation__text">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};