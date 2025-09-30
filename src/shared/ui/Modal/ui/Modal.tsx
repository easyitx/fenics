"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  width?: string; // кастомная ширина
}

export const Modal = ({
  open,
  onOpenChange,
  title,
  children,
  width = "max-w-lg",
}: ModalProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Overlay */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-black/50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>

            {/* Content */}
            <Dialog.Content asChild>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.25 }}
                className={`fixed left-1/2 top-1/2 z-50 w-full ${width} -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white dark:bg-surface p-6 shadow-xl`}
              >
                <div className="flex justify-between items-center mb-4">
                  {title && (
                    <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white">
                      {title}
                    </Dialog.Title>
                  )}
                  <Dialog.Close asChild>
                    <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-surface-secondary">
                      <X size={20} />
                    </button>
                  </Dialog.Close>
                </div>

                <div>{children}</div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};
