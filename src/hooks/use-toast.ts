// src/hooks/use-toast.ts
import * as React from "react";
import { EventType } from "../toast"; // Importe EventType from your toast.tsx

type ToasterToast = EventType; // Use EventType from toast.tsx for consistency

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000; // Increased for debugging, set to a reasonable value like 10000 (10s)

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
  variant?: "default" | "destructive"; // Add variants if you have them
} & ({ variant?: "default" } | { variant: "destructive" }); // Define variant type for 'toast' function

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
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
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

      // If a toastId is provided, dismiss it
      if (toastId) {
        addToastRef.current.map((toast) => {
          if (toast.id === toastId) {
            toast.dismiss();
          }
          return toast; // Make sure to return the toast
        });
      } else {
        // Otherwise, dismiss all toasts
        addToastRef.current.map((toast) => {
          toast.dismiss();
          return toast; // Make sure to return the toast
        });
      }

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
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
  }
};

const listeners: ((state: State) => void)[] = [];

const addToastRef = React.createRef<ToasterToast[]>(); // Initialize with an empty array

function dispatch(action: Action) {
  state = reducer(state, action);
  listeners.forEach((listener) => listener(state));
}

type ToastContextType = {
  toast: (props: Omit<Toast, "id">) => {
    id: string;
    dismiss: () => void;
    update: (props: Partial<Toast>) => void;
  };
  dismiss: (toastId?: string) => void;
  toasts: Toast[]; // Add toasts to the context type
  addToastRef: React.RefObject<ToasterToast[]>; // Add addToastRef to the context type
};

const ToastContext = React.createContext<ToastContextType | undefined>(undefined); // Allow undefined initially

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useReducer(reducer, { toasts: [] });

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toast: addToast, dismiss: dismissToast, toasts: state.toasts, addToastRef }}>
      {children}
    </ToastContext.Provider>
  );
}

let state: State = { toasts: [] };

function dismissToast(toastId?: string) {
  dispatch({ type: actionTypes.DISMISS_TOAST, toastId });
}

function addToast(props: Omit<Toast, "id">) {
  const id = genId();
  const toast = { ...props, id };
  dispatch({ type: actionTypes.ADD_TOAST, toast });
  return {
    id: toast.id,
    dismiss: () => dismissToast(toast.id),
    update: (props: Partial<Toast>) =>
      dispatch({ type: actionTypes.UPDATE_TOAST, toast: { ...props, id } }),
  };
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToasterProvider");
  }
  return context;
}