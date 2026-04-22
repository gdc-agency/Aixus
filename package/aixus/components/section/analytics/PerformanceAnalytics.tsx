import { PerformanceChart } from "@/components/performance-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart } from "lucide-react"

export default function PerformanceAnalytics() {
	return (
		<>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle>Performance Metrics</CardTitle>
					</div>
					<LineChart className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<PerformanceChart />
				</CardContent>
			</Card>

			<div className="grid gap-6 md:grid-cols-3">
				{/* Model Response Times */}
				<Card className="hover:shadow-lg transition-shadow duration-300">
					<CardHeader className="pb-2">
						<CardTitle className="text-lg font-semibold">Model Response Times</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{[
							{ name: "GPT-4o", time: "120ms", percent: 60, color: "bg-blue-500" },
							{ name: "Claude 3", time: "150ms", percent: 75, color: "bg-blue-400" },
							{ name: "Llama 3", time: "90ms", percent: 45, color: "bg-blue-600" },
							{ name: "Mistral", time: "100ms", percent: 50, color: "bg-blue-300" },
						].map((model) => (
							<div key={model.name} className="flex items-center gap-3">
								<div className="flex-1">
									<div className="flex justify-between mb-1">
										<span className="text-sm font-medium text-gray-900 dark:text-white">{model.name}</span>
										<span className="text-sm text-muted-foreground">{model.time}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
										<div
											className={`h-2 rounded-full ${model.color} transition-all duration-500`}
											style={{ width: `${model.percent}%` }}
										/>
									</div>
								</div>
							</div>
						))}
					</CardContent>
				</Card>

				{/* Accuracy Scores */}
				<Card className="hover:shadow-lg transition-shadow duration-300">
					<CardHeader className="pb-2">
						<CardTitle className="text-lg font-semibold">Accuracy Scores</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{[
							{ name: "GPT-4o", score: "97.5%", percent: 97.5, color: "bg-green-500" },
							{ name: "Claude 3", score: "96.8%", percent: 96.8, color: "bg-green-400" },
							{ name: "Llama 3", score: "94.2%", percent: 94.2, color: "bg-green-600" },
							{ name: "Mistral", score: "93.5%", percent: 93.5, color: "bg-green-300" },
						].map((model) => (
							<div key={model.name} className="flex items-center gap-3">
								<div className="flex-1">
									<div className="flex justify-between mb-1">
										<span className="text-sm font-medium text-gray-900 dark:text-white">{model.name}</span>
										<span className="text-sm text-muted-foreground">{model.score}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
										<div
											className={`h-2 rounded-full ${model.color} transition-all duration-500`}
											style={{ width: `${model.percent}%` }}
										/>
									</div>
								</div>
							</div>
						))}
					</CardContent>
				</Card>

				{/* Error Rates */}
				<Card className="hover:shadow-lg transition-shadow duration-300">
					<CardHeader className="pb-2">
						<CardTitle className="text-lg font-semibold">Error Rates</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{[
							{ name: "GPT-4o", rate: "0.3%", percent: 15, color: "bg-red-500" },
							{ name: "Claude 3", rate: "0.5%", percent: 25, color: "bg-red-400" },
							{ name: "Llama 3", rate: "0.8%", percent: 40, color: "bg-red-600" },
							{ name: "Mistral", rate: "0.7%", percent: 35, color: "bg-red-300" },
						].map((model) => (
							<div key={model.name} className="flex items-center gap-3">
								<div className="flex-1">
									<div className="flex justify-between mb-1">
										<span className="text-sm font-medium text-gray-900 dark:text-white">{model.name}</span>
										<span className="text-sm text-muted-foreground">{model.rate}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
										<div
											className={`h-2 rounded-full ${model.color} transition-all duration-500`}
											style={{ width: `${model.percent}%` }}
										/>
									</div>
								</div>
							</div>
						))}
					</CardContent>
				</Card>
			</div>

		</>
	)
}