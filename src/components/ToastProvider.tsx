import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

const TOAST_LIMIT = 3;

export const ToastProvider = () => {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return <Toaster position="bottom-center" />;
};
