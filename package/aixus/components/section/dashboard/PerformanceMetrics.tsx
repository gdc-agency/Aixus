"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Activity, AlertTriangle, BarChart, Gauge } from "lucide-react"

const metrics = [
	{
		title: "Average Latency",
		value: "98ms",
		description: "Response time",
		variant: "primary",
		icon: Activity,
		bg: "bg-blue-100",
		iconBg: "bg-blue-300 text-blue-600",
	},
	{
		title: "Accuracy Score",
		value: "96.8%",
		description: "Benchmark tests",
		variant: "success",
		icon: BarChart,
		bg: "bg-green-200",
		iconBg: "bg-green-100 text-green-600",
	},
	{
		title: "Error Rate",
		value: "0.5%",
		description: "API failures",
		variant: "destructive",
		icon: AlertTriangle,
		bg: "bg-red-100",
		iconBg: "bg-red-300 text-red-600",
	},
	{
		title: "Throughput",
		value: "1.8K req/s",
		description: "Requests handled",
		variant: "info",
		icon: Gauge,
		bg: "bg-purple-100",
		iconBg: "bg-purple-300 text-purple-600",
	},
]

export default function PerformanceMetrics() {
	return (
		<>
			{metrics.map((metric) => {
				const Icon = metric.icon
				return (
					<Card
						key={metric.title}
						className={`flex flex-col items-center justify-center gap-3 p-5 rounded-xl ${metric.bg}`}
					>
						<div
							className={`flex items-center justify-center w-12 h-12 rounded-full ${metric.iconBg}`}
						>
							<Icon className="w-6 h-6" />
						</div>
						<CardTitle className="text-sm font-semibold text-gray-800 ">
							{metric.title}
						</CardTitle>
						<CardContent className="p-0 text-center">
							<div className="text-2xl md:text-3xl font-extrabold text-gray-900 ">
								{metric.value}
							</div>
							<p className="text-xs md:text-sm text-gray-700  mt-1">
								{metric.description}
							</p>
						</CardContent>
					</Card>
				)
			})}
		</>
	)
}
