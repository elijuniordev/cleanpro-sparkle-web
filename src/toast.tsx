// src/toast.tsx
import * as React from "react";
import { cn } from "./lib/utils"; // Certifique-se de que o caminho para utils.ts está correto
import { X } from "lucide-react"; // Ícone de fechar

export type EventType = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  duration?: number;
  variant?: "default" | "destructive"; // Defina suas variantes
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  toast: EventType;
  onDismiss: (id: string) => void;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, toast, onDismiss, ...props }, ref) => {
    const { id, title, description, action, variant, open, onOpenChange } = toast;

    // Simplified open/close state for example
    const [isOpen, setIsOpen] = React.useState(true);

    const handleDismiss = () => {
      setIsOpen(false);
      onDismiss(id);
    };

    React.useEffect(() => {
      if (toast.duration) {
        const timer = setTimeout(() => {
          handleDismiss();
        }, toast.duration);
        return () => clearTimeout(timer);
      }
    }, [toast.duration]);

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md p-6 pr-8 shadow-lg",
          variant === "destructive"
            ? "border-destructive bg-destructive text-destructive-foreground"
            : "border bg-background text-foreground", // Default colors, adjust as needed
          isOpen ? "animate-in slide-in-from-top-full" : "animate-out fade-out slide-out-to-top-full",
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
          onClick={handleDismiss}
          className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }
);
Toast.displayName = "Toast";

// Toaster component
interface ToasterProps extends React.HTMLAttributes<HTMLDivElement> {
  // Add props for rendering toasts if needed, e.g., from useToast context
}

export function Toaster({ ...props }: ToasterProps) {
  const { toasts, dismiss } = useToast();

  return (
    <div
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
      )}
      {...props}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  );
}