"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { AlertCircle, Bot, CheckCircle, Code, MessageSquare, TrendingUp } from "lucide-react"

const healthMetrics = [
	{
		model: "Customer Support Assistant",
		uptime: "99.9%",
		errors: 5,
		health: "Good",
		icon: MessageSquare,
		color: "bg-blue-100 text-blue-600",
	},
	{
		model: "Product Classifier",
		uptime: "95.2%",
		errors: 12,
		health: "Fair",
		icon: Bot,
		color: "bg-purple-100 text-purple-600",
	},
	{
		model: "Content Generator",
		uptime: "99.8%",
		errors: 3,
		health: "Good",
		icon: Code,
		color: "bg-indigo-100 text-indigo-600",
	},
	{
		model: "Sentiment Analyzer",
		uptime: "98.5%",
		errors: 8,
		health: "Good",
		icon: TrendingUp,
		color: "bg-teal-100 text-teal-600",
	},
]

export default function ModelHealth() {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>Model Health</CardTitle>
			</CardHeader>

			<CardContent className="p-0">
				{/* ✅ Table for sm+ screens */}
				<div className="hidden sm:block overflow-x-auto">
					<Table className="w-full">
						<TableHeader className="bg-muted/10">
							<TableRow>
								<TableHead className="px-4 py-2 text-left">Model</TableHead>
								<TableHead className="px-4 py-2 text-center">Uptime</TableHead>
								<TableHead className="px-4 py-2 text-center">Errors (30d)</TableHead>
								<TableHead className="px-4 py-2 text-center">Health</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody>
							{healthMetrics.map((metric, index) => {
								const ModelIcon = metric.icon
								return (
									<TableRow
										key={index}
										className="even:bg-muted/5 hover:bg-muted/20 transition-colors"
									>
										<TableCell className="px-4 py-4 font-medium">
											<div className="flex items-center gap-3">
												<div className={cn("flex items-center justify-center w-7 h-7 rounded-full", metric.color)}>
													<ModelIcon className="w-4 h-4" />
												</div>
												{metric.model}
											</div>
										</TableCell>

										<TableCell className="px-4 py-4 text-center">{metric.uptime}</TableCell>
										<TableCell className="px-4 py-4 text-center">{metric.errors}</TableCell>

										<TableCell className="px-4 py-4 text-center">
											<div
												className={cn(
													"flex items-center justify-center w-6 h-6 rounded-full mx-auto",
													metric.health === "Good" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
												)}
											>
												{metric.health === "Good" ? (
													<CheckCircle className="w-3.5 h-3.5" />
												) : (
													<AlertCircle className="w-3.5 h-3.5" />
												)}
											</div>
										</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</div>

				{/* ✅ Mobile stacked layout */}
				<div className="sm:hidden space-y-4 p-4">
					{healthMetrics.map((metric, index) => {
						const ModelIcon = metric.icon
						return (
							<div key={index} className="border rounded-lg p-4 bg-muted/5">
								<div className="flex items-center gap-3 mb-2">
									<div className={cn("flex items-center justify-center w-8 h-8 rounded-full", metric.color)}>
										<ModelIcon className="w-4 h-4" />
									</div>
									<span className="font-semibold">{metric.model}</span>
								</div>
								<div className="text-sm">
									<p><strong>Uptime:</strong> {metric.uptime}</p>
									<p><strong>Errors (30d):</strong> {metric.errors}</p>
									<p className="flex items-center gap-2 mt-1">
										<strong>Health:</strong>
										{metric.health === "Good" ? (
											<CheckCircle className="w-4 h-4 text-green-600" />
										) : (
											<AlertCircle className="w-4 h-4 text-yellow-600" />
										)}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</CardContent>
		</Card>
	)
}
