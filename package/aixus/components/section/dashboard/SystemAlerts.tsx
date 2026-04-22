"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { AlertCircle, AlertTriangle, Info, type LucideIcon } from "lucide-react"
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

interface Alert {
	message: string
	time: string
	priority: "Critical" | "Warning" | "Info"
}

type Priority = "Critical" | "Warning" | "Info"

const alerts: Alert[] = [
	{ message: "High API latency detected", time: "30 min ago", priority: "Critical" },
	{ message: "Storage limit approaching", time: "1 hour ago", priority: "Warning" },
	{ message: "New user added to team", time: "2 hours ago", priority: "Info" },
	{ message: "Unusual login attempt detected", time: "3 hours ago", priority: "Critical" },
]

const priorityStyles: Record<Priority, {
	iconBg: string
	iconText: string
	badgeBg: string
	badgeText: string
}> = {
	Critical: {
		iconBg: "bg-destructive/15 dark:bg-destructive/20",
		iconText: "text-destructive",
		badgeBg: "bg-destructive/20 dark:bg-destructive/30",
		badgeText: "text-destructive",
	},
	Warning: {
		iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
		iconText: "text-yellow-600 dark:text-yellow-400",
		badgeBg: "bg-yellow-200 dark:bg-yellow-800/40",
		badgeText: "text-yellow-700 dark:text-yellow-300",
	},
	Info: {
		iconBg: "bg-blue-100 dark:bg-blue-900/30",
		iconText: "text-blue-600 dark:text-blue-400",
		badgeBg: "bg-blue-200 dark:bg-blue-800/40",
		badgeText: "text-blue-700 dark:text-blue-300",
	},
}

const priorityIcons: Record<Priority, LucideIcon> = {
	Critical: AlertCircle,
	Warning: AlertTriangle,
	Info: Info,
}

export default function SystemAlerts() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>System Alerts</CardTitle>
			</CardHeader>

			<PerfectScrollbar
				className="space-y-4 p-4 pt-0 overflow-y-auto overflow-x-hidden max-h-84"
				options={{ suppressScrollX: true }}
			>
				{alerts.map((alert, index) => {
					const Icon = priorityIcons[alert.priority]
					const styles = priorityStyles[alert.priority]

					return (
						<div
							key={index}
							className="flex flex-col sm:flex-row sm:items-center gap-4 p-3 rounded-xl border border-border bg-backgroundm"
						>
							{/* Priority Icon */}
							<div
								className={cn(
									"flex items-center justify-center w-10 h-10 rounded-lg",
									styles.iconBg
								)}
							>
								<Icon className={cn("w-5 h-5", styles.iconText)} />
							</div>

							{/* Message & Time */}
							<div className="flex-1 flex flex-col">
								<p className="text-sm font-medium">{alert.message}</p>
								<p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
							</div>

							{/* Priority Badge */}
							<span
								className={cn(
									"px-3 py-1 rounded-full text-xs font-semibold",
									styles.badgeBg,
									styles.badgeText
								)}
							>
								{alert.priority}
							</span>
						</div>
					)
				})}
			</PerfectScrollbar>
		</Card>
	)
}