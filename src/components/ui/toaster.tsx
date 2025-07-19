// src/components/ui/toaster.tsx
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
  ToastProvider, // <-- Adicione a importação do ToastProvider do Radix UI
} from "@/components/ui/toast" // <-- Este é o ToastProvider do Radix UI

export function Toaster() {
  const { toasts } = useToast()

  return (
    // <--- Envolva todo o conteúdo do Toaster com o ToastProvider do Radix UI
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider> // <-- Feche o ToastProvider do Radix UI
  )
}