"use client"

import { cn } from "@/lib/utils"
import { Bot } from "lucide-react"

// Define props interface
interface LogoProps {
	className?: string
	size?: "sm" | "md" | "lg" | "xl"
	vertical?: boolean
	iconOnly?: boolean
	companyName?: string
}

export function Logo({
	className,
	size = "md",
	vertical = false,
	iconOnly = false,
	companyName = "Aixus",
}: LogoProps) {
	// Simplified size mappings
	const iconSize = {
		sm: { container: "h-6 w-6", icon: 14 },
		md: { container: "h-8 w-8", icon: 18 },
		lg: { container: "h-10 w-10", icon: 22 },
		xl: { container: "h-12 w-12", icon: 26 },
	}[size]

	const textSize = {
		sm: "text-lg",
		md: "text-xl",
		lg: "text-2xl",
		xl: "text-xl",
	}[size]

	// Icon component
	const IconComponent = (
		<div
			className={cn(
				"flex items-center justify-center",
				iconSize.container,
				"rounded-md bg-gray-800",
				iconOnly ? className : ""
			)}
		>
			<Bot
				size={iconSize.icon}
				className="relative z-10 text-white"
			/>
		</div>
	)

	// If icon only, return just the icon
	if (iconOnly) {
		return IconComponent
	}

	// Full logo with text
	return (
		<div className={cn("flex items-center", vertical ? "flex-col gap-2" : "flex-row gap-3", className)}>
			{IconComponent}
			<span
				className={cn(
					"font-bold tracking-tight",
					textSize,
					"text-white"
				)}
			>
				{companyName}
			</span>
		</div>
	)
}