interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "surface" | "outline";
  size?: "large";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "large",
  ...props
}) => {
  const baseStyles = {
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "120%",
    letterSpacing: "0%",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "#FFFFFF",
    },
    surface: {
      background: "var(--color-surface)",
      color: "#FFFFFF",
    },
    outline: {
      background: "transparent",
      color: "#FFFFFF",
      border: "1px solid var(--color-border-primary)",
    },
    // Можно добавить другие варианты
  };

  const sizes = {
    large: {
      padding: "16px",
      borderRadius: "8px",
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

interface UnstyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const UnstyledButton: React.FC<UnstyledButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        padding: 0,
        margin: 0,
        cursor: "pointer",
        font: "inherit",
        color: "inherit",
        textDecoration: "none",
        outline: "none",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
