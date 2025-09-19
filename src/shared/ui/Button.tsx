import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary';
    size?: 'large';
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'large',
    ...props
}) => {
    const baseStyles = {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '120%',
        letterSpacing: '0%',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
    };

    const variants = {
        primary: {
            background: 'var(--color-primary)',
            color: '#FFFFFF',
        },
        // Можно добавить другие варианты
    };

    const sizes = {
        large: {
            padding: '22px',
            borderRadius: '10px',
        },
        // Можно добавить другие размеры
    };

    return (
        <button
            style={{
                ...baseStyles,
                ...variants[variant],
                ...sizes[size],
                ...props.style,
            }}
            {...props}
        >
            {children}
        </button>
    );
};