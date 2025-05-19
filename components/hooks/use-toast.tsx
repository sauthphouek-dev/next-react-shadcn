// components/hooks/use-toast.ts
import { useCallback } from "react"
import { toast as toastLib } from "react-hot-toast"

export function useToast() {
  const toast = useCallback((message: string, type: "success" | "error" = "success") => {
    if (type === "success") toastLib.success(message)
    else toastLib.error(message)
  }, [])

  return { toast }
}

// Optional default export if you want to do this:
export const toast = {
  success: (msg: string) => toastLib.success(msg),
  error: (msg: string) => toastLib.error(msg),
}
