"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Cpu, Database, Globe, Zap } from "lucide-react" // category icons

const costs = [
	{ category: "API", amount: "$1,200", percent: 49, icon: Zap, color: "bg-blue-500 text-white" },
	{ category: "Compute", amount: "$800", percent: 33, icon: Cpu, color: "bg-green-500 text-white" },
	{ category: "Storage", amount: "$300", percent: 12, icon: Database, color: "bg-yellow-500 text-white" },
	{ category: "Other", amount: "$150", percent: 6, icon: Cloud, color: "bg-purple-500 text-white" },
	{ category: "Networking", amount: "$200", percent: 8, icon: Globe, color: "bg-red-500 text-white" },
]


export default function CostBreakdown() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Cost Breakdown</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				{costs.map((cost, index) => {
					const Icon = cost.icon
					return (
						<div
							key={index}
							className="flex items-center gap-4 py-2 rounded-lg hover:bg-muted/10 transition-colors"
						>
							{/* Colorful Category Icon */}
							<div
								className={`flex items-center justify-center w-10 h-10 rounded-xl shadow-md ${cost.color}`}
							>
								<Icon className="w-5 h-5" />
							</div>

							{/* Label + Progress */}
							<div className="flex-1">
								<div className="flex justify-between mb-1">
									<span className="text-sm font-medium text-foreground">{cost.category}</span>
									<span className="text-sm text-muted-foreground">{cost.amount}</span>
								</div>
								<div className="h-2 w-full rounded-full bg-muted/20">
									<div
										className={`${cost.color.split(" ")[0]} h-2 rounded-full transition-all duration-300`}
										style={{ width: `${cost.percent}%` }}
									/>
								</div>
							</div>
						</div>
					)
				})}
			</CardContent>
		</Card>
	)
}
