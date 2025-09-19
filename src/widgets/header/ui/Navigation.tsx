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
  { id: 'cases', label: 'Кейсы', icon: 'cases', href: '/cases' },
  { id: 'upgrades', label: 'Апгрейды', icon: 'upgrades', href: '/upgrades', disabled: true },
  { id: 'bonuses', label: 'Бонусы', icon: 'bonuses', href: '/bonuses', disabled: true },
  { id: 'calendar', label: 'Календарь', icon: 'calendar', href: '/calendar', disabled: true },
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
                    size="20" 
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