import * as React from "react";
import type { EventType } from "../toast"; // Importe EventType de toast.tsx

type ToasterToast = EventType;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

type Toast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactElement;
  duration?: number;
  variant?: "default" | "destructive";
  open?: boolean; // Já corrigimos esta linha antes, mantendo-a
};

type State = {
  toasts: Toast[];
};

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const;

type ActionType = typeof actionTypes;

type Action =
  | {
      type: ActionType["ADD_TOAST"];
      toast: Toast;
    }
  | {
      type: ActionType["UPDATE_TOAST"];
      toast: Partial<Toast>;
    }
  | {
      type: ActionType["DISMISS_TOAST"];
      toastId?: Toast["id"];
    }
  | {
      type: ActionType["REMOVE_TOAST"];
      toastId?: Toast["id"];
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, 1), // Limite de 1 toast visível
      };

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case actionTypes.DISMISS_TOAST:
      const { toastId } = action;
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };

    case actionTypes.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

type ToastContextType = {
  toast: (props: Omit<Toast, "id">) => {
    id: string;
    dismiss: () => void;
    update: (props: Partial<Toast>) => void;
  };
  dismiss: (toastId?: string) => void;
  toasts: Toast[];
};

// CORREÇÃO: Mova a declaração de ToastContext para ANTES de ToasterProvider
const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = React.useReducer(reducer, { toasts: [] });

  const addToast = React.useCallback((props: Omit<Toast, "id">) => {
    const id = genId();
    const toast = { ...props, id, open: true };
    dispatch({ type: actionTypes.ADD_TOAST, toast });

    return {
      id: toast.id,
      dismiss: () => dispatch({ type: actionTypes.DISMISS_TOAST, toastId: toast.id }),
      update: (newProps: Partial<Toast>) => dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...newProps, id: toast.id } }),
    };
  }, []);

  const dismissToast = React.useCallback((toastId?: string) => {
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId });
  }, []);

  const removeToast = React.useCallback((toastId?: string) => {
    dispatch({ type: actionTypes.REMOVE_TOAST, toastId });
  }, []);

  React.useEffect(() => {
    state.toasts.forEach(toast => {
      if (toast.open === false) {
        const timer = setTimeout(() => {
          removeToast(toast.id);
        }, 300);
        return () => clearTimeout(timer);
      }
    });
  }, [state.toasts, removeToast]);

  const value = React.useMemo(() => ({
    toast: addToast,
    dismiss: dismissToast,
    toasts: state.toasts,
  }), [addToast, dismissToast, state.toasts]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToasterProvider");
  }
  return context;
}