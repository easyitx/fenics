"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { Icon } from "@/shared/ui/Icon";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange"
  > {
  variant?: "default" | "search" | "promo" | "price";
  size?: "sm" | "md" | "lg";
  leftIcon?: string;
  rightIcon?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;

  loading?: boolean;
  disabled?: boolean;
  success?: boolean;

  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClear?: () => void;

  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;

  clearable?: boolean;
  autoComplete?: string;
  autoFocus?: boolean;
}

export const Input = ({
  className,
  variant = "default",
  size = "md",
  leftIcon,
  rightIcon,
  leftElement,
  rightElement,
  error = false,
  errorMessage,
  label,
  helperText,
  loading = false,
  disabled = false,
  success = false,
  value,
  defaultValue,
  onChange,
  onFocus,
  onBlur,
  onClear,
  required = false,
  minLength,
  maxLength,
  pattern,
  clearable = false,
  autoComplete,
  autoFocus = false,
  ...props
}: InputProps) => {
  const baseStyles =
    "w-full transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    default:
      "bg-surface border border-border-primary rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:border-border-focus",
    search:
      "bg-surface border border-border-primary rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:border-border-focus",
    promo:
      "bg-[#1a1016] border-2 border-primary rounded-xl px-4 py-3 text-white placeholder:text-text-secondary focus:border-border-focus",
    price:
      "bg-surface border border-border-primary rounded-lg px-4 py-3 text-white placeholder:text-text-secondary focus:border-border-focus",
  };

  const sizes = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg",
  };

  const errorStyles = error ? "border-red-500 focus:border-red-500" : "";
  const successStyles = success
    ? "border-green-500 focus:border-green-500"
    : "";
  const loadingStyles = loading ? "opacity-50 cursor-wait" : "";
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
  };

  const renderLeftContent = () => {
    if (leftElement) return leftElement;
    if (leftIcon)
      return <Icon name={leftIcon} color="surface" className="flex-shrink-0" />;
    return null;
  };

  const renderRightContent = () => {
    if (loading) {
      return (
        <div className="animate-spin">
          <Icon name="radar" color="surface" className="flex-shrink-0 h-full" />
        </div>
      );
    }

    if (clearable && value && !disabled) {
      return (
        <button
          type="button"
          onClick={handleClear}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <Icon name="add-circle" size={20} color="secondary" />
        </button>
      );
    }

    if (success) {
      return (
        <Icon
          name="add-circle"
          size={20}
          color="primary"
          className="flex-shrink-0"
        />
      );
    }

    if (rightElement) return rightElement;
    if (rightIcon)
      return (
        <Icon
          name={rightIcon}
          color="secondary"
          className="flex-shrink-0 min-h-full"
        />
      );
    return null;
  };

  const inputElement = (
    <div className={cn("relative flex items-center", error && "mb-1")}>
      {renderLeftContent() && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
          {renderLeftContent()}
        </div>
      )}

      <input
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          errorStyles,
          successStyles,
          loadingStyles,
          disabledStyles,
          renderLeftContent() && "pl-10",
          renderRightContent() && "pr-10",
          className
        )}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled || loading}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        {...props}
      />

      {renderRightContent() && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10">
          {renderRightContent()}
        </div>
      )}
    </div>
  );

  if (label || errorMessage || helperText) {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}
        {inputElement}
        {error && errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
        {!error && helperText && (
          <p className="text-text-secondary text-sm mt-1">{helperText}</p>
        )}
      </div>
    );
  }

  return inputElement;
};
