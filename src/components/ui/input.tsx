import * as React from "react";

import { cn } from "@/shared/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  endIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, endIcon, ...props }, ref) => {
    if (endIcon) {
      return (
        <div className="relative w-full">
          <input
            type={type}
            className={cn(
              "flex h-9 w-full rounded-md text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pr-8 border-0 outline-none",
              className
            )}
            style={{ backgroundColor: "var(--color-text-black)" }}
            ref={ref}
            {...props}
          />
          <div
            className="absolute pointer-events-none"
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "2px",
              justifyContent: "end",
              right: "5px",
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: "24px",
              maxHeight: "24px",
              backgroundColor: "var(--color-text-black)",
              color: "var(--color-text-secondary)",
              fontWeight: "var(--font-weight-bold)",
              fontSize: "var(--font-size-lg)",
            }}
          >
            {endIcon}
          </div>
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-secondary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-0 outline-none",
          className
        )}
        style={{ backgroundColor: "var(--color-text-black)" }}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
