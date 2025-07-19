// src/components/ui/toaster.tsx
import { useToast } from "@/hooks/use-toast" // Ou '@/components/ui/use-toast' se for um re-export
import {
  Toast,
  ToastClose,
  ToastDescription,
  // Remova ToastProvider daqui se ele for o que você está removendo abaixo
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast" // Certifique-se de que ToastProvider NÃO seja importado aqui

export function Toaster() {
  const { toasts } = useToast()

  return (
    <> {/* Use um Fragmento React ou apenas retorne o map e o viewport */}
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
    </>
  )
}