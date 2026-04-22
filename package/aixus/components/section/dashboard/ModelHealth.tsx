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
		<Card>
			<CardHeader>
				<CardTitle>Model Health</CardTitle>
			</CardHeader>
			<CardContent className="overflow-x-auto p-0">
				<Table className="min-w-[500px]">
					<TableHeader className="bg-muted/10">
						<TableRow>
							<TableHead className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
								Model
							</TableHead>
							<TableHead className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
								Uptime
							</TableHead>
							<TableHead className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
								Errors (30d)
							</TableHead>
							<TableHead className="px-4 py-2 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
								Health
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{healthMetrics.map((metric, index) => {
							const ModelIcon = metric.icon
							return (
								<TableRow
									key={index}
									className="even:bg-muted/5 hover:bg-muted/20 transition-colors rounded-lg"
								>
									{/* Model Name + Icon */}
									<TableCell className="px-4 py-3 font-medium">
										<div className="flex items-center gap-3">
											<div className={cn("flex items-center justify-center w-7 h-7 rounded-full", metric.color)}>
												<ModelIcon className="w-4 h-4" />
											</div>
											<span>{metric.model}</span>
										</div>
									</TableCell>

									<TableCell className="px-4 py-5">{metric.uptime}</TableCell>
									<TableCell className="px-4 py-5">{metric.errors}</TableCell>

									<TableCell className="px-4 py-5">
										<div
											className={cn(
												"flex items-center justify-center w-6 h-6 rounded-full",
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
			</CardContent>
		</Card>
	)
}
