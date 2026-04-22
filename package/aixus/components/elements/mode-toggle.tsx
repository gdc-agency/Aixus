"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	// Avoid hydration mismatch by only rendering after mount
	useEffect(() => {
		setMounted(true)
	}, [])

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	if (!mounted) {
		return <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-transparent" />
	}

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			className="h-9 w-9 rounded-full relative bg-card"
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			<Sun className="h-8 w-8 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-8 w-8 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
		</Button>
	)
}

