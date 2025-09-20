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
  { id: 'upgrades', label: 'Апгрейды', icon: 'flash', href: '/upgrades'},
  { id: 'bonuses', label: 'Бонусы', icon: 'magic-star', href: '/bonuses'},
  { id: 'calendar', label: 'Календарь', icon: 'calendar', href: '/calendar'},
];

export const Navigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.id} className="navigation__item">
              <Link
                href={item.href}
                className={`navigation__link ${isActive ? 'navigation__link--active' : ''}`}
              >
                <Icon
                  name={item.icon}
                  color={isActive ? 'primary' : 'secondary'}
                  size={20}
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