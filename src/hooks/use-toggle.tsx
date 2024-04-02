import { UseToggleReturn } from "@/interfaces/hooks/use-toggle"
import { useState } from "react"

export function useToggle(): UseToggleReturn {
  const [value, setValue] = useState(false)
  
  const toggle = (value?: boolean) => {
    setValue((prev) => value ?? !prev)
  }

  return {
    value,
    toggle
  }
}