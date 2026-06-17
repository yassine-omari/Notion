"use client"

import { useId, useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { MoonIcon, SunIcon } from "lucide-react"

const ThemeToggle = () => {
  const id = useId()
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <div className="group inline-flex items-center gap-2">

      <span

        id={`${id}-light`}

        className={cn(

          "cursor-pointer transition-colors",

          !isDark ? "text-yellow-600" : "text-muted-foreground"

        )}

        onClick={() => setTheme("light")}

      >

        <SunIcon className="size-5" />

      </span>

      <Switch
        id={id}
        checked={isDark}
        onCheckedChange={(checked) =>
          setTheme(checked ? "dark" : "light")
        }
        aria-label="Toggle theme"
      />


      <span

        id={`${id}-dark`}

        className={cn(

          "cursor-pointer transition-colors",

          isDark ? "text-blue-400" : "text-muted-foreground"

        )}

        onClick={() => setTheme("dark")}

      >

        <MoonIcon className="size-5" />

      </span>

    </div>
  )
}

export default ThemeToggle