"use client";

import React, { useEffect, useRef, ReactNode } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import Image from "next/image";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: "small" | "medium" | "large" | "full";
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
  className?: string;
  contentClassName?: string;
  testId?: string;
  pulseOnOpen?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "medium",
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = "",
  contentClassName = "",
  testId,
  pulseOnOpen = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${getScrollbarWidth()}px`;

      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";

      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, closeOnEscape, onClose]);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  function getScrollbarWidth(): number {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll";
    (outer.style as any).msOverflowStyle = "scrollbar";
    document.body.appendChild(outer);

    const inner = document.createElement("div");
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode?.removeChild(outer);

    return scrollbarWidth;
  }

  if (!isOpen) {
    return null;
  }

  const modalContent = (
    <div
      className={`${styles.overlay} ${className}`}
      onClick={handleOverlayClick}
      data-testid={testId}
      data-portal="modal"
    >
      <div
        ref={modalRef}
        className={`${styles.modal} ${styles[`modal--${size}`]} ${
          pulseOnOpen ? styles.pulse : ""
        } ${contentClassName}`}
        onClick={handleContentClick}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "modal-title" : undefined}
      >
        {showCloseButton && (
          <button
            className={styles.closeButton}
            onClick={handleCloseClick}
            aria-label="Закрыть модальное окно"
            type="button"
          >
            <Image
              src="/icons/closeModal.svg"
              alt="close"
              width={24}
              height={24}
            />
          </button>
        )}

        {title && (
          <h2 id="modal-title" className={styles.title}>
            {title}
          </h2>
        )}

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
