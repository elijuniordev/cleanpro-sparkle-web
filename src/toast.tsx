import * as React from "react";
import type { HTMLAttributes } from "react"; // Importe HTMLAttributes aqui
import { cn } from "./lib/utils";
import { X } from "lucide-react"; // Ícone de fechar

export type EventType = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  duration?: number;
  variant?: "default" | "destructive";
  open?: boolean; // Adicionado para controlar a visibilidade/animação
};

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  toast: EventType;
  onDismiss: (id: string) => void;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, toast, onDismiss, ...props }, ref) => {
    const { id, title, description, action, variant, open } = toast;

    // Use o 'open' vindo das props para controlar a animação
    const isVisible = open !== false;

    React.useEffect(() => {
      // Se um toast tem duração e está visível, ele se auto-dismiss
      if (isVisible && toast.duration) {
        const timer = setTimeout(() => {
          onDismiss(id);
        }, toast.duration);
        return () => clearTimeout(timer);
      }
    }, [isVisible, toast.duration, id, onDismiss]);

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg transition-all duration-300",
          variant === "destructive"
            ? "border-secondary-red bg-secondary-red text-white" // Cores destrutivas da sua paleta
            : "border bg-white text-dark-gray", // Cores padrão da sua paleta
          isVisible ? "animate-in slide-in-from-top-full" : "animate-out fade-out slide-out-to-top-full", // Animações
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
          onClick={() => onDismiss(id)} // Chama onDismiss no clique
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

// Toaster component que renderiza os toasts
interface ToasterProps extends HTMLAttributes<HTMLDivElement> {
  // Não precisa de props extras, pois ele puxa do useToast
}

export function Toaster({ ...props }: ToasterProps) {
  const { toasts, dismiss } = useToast();

  return (
    <div
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        props.className
      )}
      {...props}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  );
}