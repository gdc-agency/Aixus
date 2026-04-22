"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp, Bot, CreditCard, LucideIcon, MessageSquare, Users } from "lucide-react"

type Variant = "blue" | "green" | "yellow" | "red" | "default"

interface Stat {
	title: string
	value: string
	change: {
		value: number
		trend: "up" | "down" | "neutral"
	}
	icon: LucideIcon
	variant: Variant
}

const stats: Stat[] = [
	{
		title: "Total API Calls",
		value: "1.2M",
		change: { value: 12, trend: "up" },
		icon: MessageSquare,
		variant: "blue",
	},
	{
		title: "Active Models",
		value: "24",
		change: { value: 4, trend: "up" },
		icon: Bot,
		variant: "green",
	},
	{
		title: "Team Members",
		value: "8",
		change: { value: 0, trend: "neutral" },
		icon: Users,
		variant: "yellow",
	},
	{
		title: "Monthly Cost",
		value: "$2,450",
		change: { value: 5, trend: "down" },
		icon: CreditCard,
		variant: "red",
	},
]

// Light & Dark mode color classes
const iconBg: Record<Variant, string> = {
	blue: "bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
	green: "bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-300",
	yellow: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
	red: "bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-300",
	default: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
}

const cardBg = "bg-card"

export default function StatCards() {
	return (
		<div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
			{stats.map((stat, i) => {
				const Icon = stat.icon
				const trendColor =
					stat.change.trend === "up"
						? "text-green-600 dark:text-green-400"
						: stat.change.trend === "down"
							? "text-red-600 dark:text-red-400"
							: "text-gray-500 dark:text-gray-400"

				const TrendIcon =
					stat.change.trend === "up"
						? ArrowUp
						: stat.change.trend === "down"
							? ArrowDown
							: null

				return (
					<Card key={i} className={cn(cardBg, "rounded-xl")}>
						<CardContent className="flex flex-col justify-between space-y-3 p-4 sm:p-5">
							<div className="flex items-center justify-between">
								<CardTitle className="text-xs sm:text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-100">
									{stat.title}
								</CardTitle>
								<div
									className={cn(
										"flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg",
										iconBg[stat.variant]
									)}
								>
									<Icon className="w-5 h-5 sm:w-6 sm:h-6" />
								</div>
							</div>

							<div className="flex flex-col">
								<div className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">{stat.value}</div>

								{stat.change && (
									<div className="flex items-center gap-1 sm:gap-2 mt-1 text-xs sm:text-sm">
										{TrendIcon && <TrendIcon className={cn("w-3 h-3 sm:w-4 sm:h-4", trendColor)} />}
										<span className={cn("font-medium", trendColor)}>{stat.change.value}%</span>
										<span className="text-gray-500 dark:text-gray-400">vs last month</span>
									</div>
								)}
							</div>
						</CardContent>
					</Card>
				)
			})}
		</div>
	)
}