import React from 'react';

interface NavigationItem {
    id: string;
    label: string;
    isActive?: boolean;
    disabled?: boolean;
}

interface NavigationProps {
    items: NavigationItem[];
    onItemClick?: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ items, onItemClick }) => {
    const baseStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '40px',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    };

    const itemStyles = {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '120%',
        letterSpacing: '0%',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        padding: '8px 0',
        position: 'relative' as const,
        textDecoration: 'none',
        border: 'none',
        background: 'transparent',
    };

    const getItemColor = (item: NavigationItem) => {
        if (item.disabled) return '#666666';
        if (item.isActive) return 'var(--color-primary)';
        return '#FFFFFF';
    };

    const getItemCursor = (item: NavigationItem) => {
        return item.disabled ? 'not-allowed' : 'pointer';
    };

    return (
        <nav>
            <ul style={baseStyles}>
                {items.map((item) => (
                    <li key={item.id}>
                        <button
                            style={{
                                ...itemStyles,
                                color: getItemColor(item),
                                cursor: getItemCursor(item),
                            }}
                            onClick={() => !item.disabled && onItemClick?.(item.id)}
                            disabled={item.disabled}
                        >
                            {item.label}
                            {item.isActive && (
                                <span
                                    style={{
                                        position: 'absolute',
                                        bottom: '-2px',
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'var(--color-primary)',
                                        borderRadius: '1px',
                                    }}
                                />
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};