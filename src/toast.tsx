import * as React from "react";
import type { HTMLAttributes } from "react";
import { cn } from "./lib/utils";
import { X } from "lucide-react";

import { useToast } from "./hooks/use-toast"; // IMPORTE useToast AQUI!
import { Toast as ToastType } from "./hooks/use-toast"; // Importe o tipo Toast do seu hook

export type EventType = ToastType; // EventType é o mesmo que o tipo Toast do hook

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  toast: EventType;
  onDismiss: (id: string) => void;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, toast, onDismiss, ...props }, ref) => {
    const { id, title, description, action, variant, open, duration } = toast;

    const isVisible = open !== false;

    React.useEffect(() => {
      if (isVisible && duration) {
        const timer = setTimeout(() => {
          onDismiss(id);
        }, duration);
        return () => clearTimeout(timer);
      }
    }, [isVisible, duration, id, onDismiss]);

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all duration-300",
          variant === "destructive"
            ? "border-secondary-red bg-secondary-red text-white" // Cores destrutivas da sua paleta
            : "border bg-white text-dark-gray", // Cores padrão da sua paleta
          isVisible
            ? "animate-in slide-in-from-top-full opacity-100"
            : "animate-out fade-out slide-out-to-top-full opacity-0",
          className
        )}
        {...props}
      >
        <div className="grid gap-1">
          {title && <p className="text-sm font-semibold">{title}</p>}
          {description && <p className="text-sm opacity-90">{description}</p>}
        </div>
        {action}
        <button
          onClick={() => onDismiss(id)}
          className="absolute right-2 top-2 rounded-md p-1 text-dark-gray/50 opacity-0 transition-opacity hover:text-dark-gray focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
);
Toast.displayName = "Toast";

// CORREÇÃO: Remova a interface ToasterProps e use HTMLAttributes<HTMLDivElement> diretamente
export function Toaster({ className, ...props }: HTMLAttributes<HTMLDivElement>) { // Aceita className e o resto das props
  const { toasts, dismiss } = useToast();

  return (
    <div
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className // Usa a className passada
      )}
      {...props}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  );
}