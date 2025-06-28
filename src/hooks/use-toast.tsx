'use client'

import * as React from 'react'

// --- Tipagem do Toast ---
export type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement
  duration?: number
  variant?: 'default' | 'destructive'
  open?: boolean
}

// --- Estado e Ações ---
type State = {
  toasts: Toast[]
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

type Action =
  | {
      type: typeof actionTypes.ADD_TOAST
      toast: Toast
    }
  | {
      type: typeof actionTypes.UPDATE_TOAST
      toast: Partial<Toast>
    }
  | {
      type: typeof actionTypes.DISMISS_TOAST
      toastId?: Toast['id']
    }
  | {
      type: typeof actionTypes.REMOVE_TOAST
      toastId?: Toast['id']
    }

// --- Reducer ---
// Limita a quantidade de toasts na tela para 1 (slice(0, 1))
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, 1),
      }
    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }
    case actionTypes.DISMISS_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toastId || action.toastId === undefined
            ? { ...t, open: false }
            : t,
        ),
      }
    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
    default:
      return state
  }
}

// --- Gerador de ID ---
let toastIdCounter = 0
function genId() {
  return (toastIdCounter++).toString()
}

// --- Contexto ---
type ToastContextType = {
  toast: (props: Omit<Toast, 'id' | 'open'>) => {
    id: string
    dismiss: () => void
    update: (props: Partial<Toast>) => void
  }
  dismiss: (toastId?: string) => void
  toasts: Toast[]
}

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined,
)

// --- Provedor ---
export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] })

  const addToast = React.useCallback(
    (props: Omit<Toast, 'id' | 'open'>) => {
      const id = genId()
      const toastItem: Toast = { ...props, id, open: true }
      dispatch({ type: actionTypes.ADD_TOAST, toast: toastItem })

      return {
        id: toastItem.id,
        dismiss: () =>
          dispatch({ type: actionTypes.DISMISS_TOAST, toastId: toastItem.id }),
        update: (newProps: Partial<Toast>) =>
          dispatch({
            type: actionTypes.UPDATE_TOAST,
            toast: { ...newProps, id: toastItem.id },
          }),
      }
    },
    [],
  )

  const dismissToast = React.useCallback((toastId?: string) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId })
  }, [])

  React.useEffect(() => {
    state.toasts.forEach((toast) => {
      if (toast.open === false) {
        const timer = setTimeout(() => {
          dispatch({ type: actionTypes.REMOVE_TOAST, toastId: toast.id })
        }, 300) // Tempo para a animação de saída
        return () => clearTimeout(timer)
      }
    })
  }, [state.toasts])

  const value = React.useMemo(
    () => ({
      toast: addToast,
      dismiss: dismissToast,
      toasts: state.toasts,
    }),
    [addToast, dismissToast, state.toasts],
  )

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

// --- Hook ---
export function useToast() {
  const context = React.useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToasterProvider')
  }
  return context
}