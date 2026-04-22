import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConversationAnalytics() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Conversation Analytics</CardTitle>
			</CardHeader>
			<CardContent className="space-y-8">

				{/* Sentiment Analysis */}
				<div>
					<h3 className="text-sm font-semibold mb-3">Sentiment Analysis</h3>
					<div className="flex items-center gap-4">
						<div className="flex-1 space-y-2">
							<div className="flex justify-between text-xs font-medium text-muted-foreground">
								<span>Negative</span>
								<span>Positive</span>
							</div>
							<div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
								<div className="h-3 rounded-full bg-green-500 transition-all duration-500" style={{ width: "75%" }} />
							</div>
						</div>
						<div className="text-sm font-semibold text-gray-900 dark:text-white">75%</div>
					</div>
				</div>

				{/* Topic Distribution */}
				<div>
					<h3 className="text-sm font-semibold mb-3">Topic Distribution</h3>
					<div className="space-y-3">
						{[
							{ topic: "Performance Optimization", percent: 65, color: "bg-blue-500" },
							{ topic: "Hardware Requirements", percent: 20, color: "bg-yellow-500" },
							{ topic: "Model Architecture", percent: 15, color: "bg-purple-500" },
						].map((topic) => (
							<div key={topic.topic} className="space-y-1">
								<div className="flex justify-between text-xs font-medium text-muted-foreground">
									<span>{topic.topic}</span>
									<span>{topic.percent}%</span>
								</div>
								<div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
									<div className={`h-3 rounded-full ${topic.color} transition-all duration-500`} style={{ width: `${topic.percent}%` }} />
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Key Metrics */}
				<div>
					<h3 className="text-sm font-semibold mb-3">Key Metrics</h3>
					<div className="grid grid-cols-2 gap-4">
						{[
							{ label: "Response Time", value: "1.2s" },
							{ label: "User Satisfaction", value: "High" },
							{ label: "Tokens Used", value: "1,245" },
							{ label: "Resolution Rate", value: "100%" },
						].map((metric) => (
							<div key={metric.label} className="rounded-lg border bg-muted/50 dark:bg-muted/30 p-4 shadow-none">
								<div className="text-xs text-muted-foreground font-medium">{metric.label}</div>
								<div className="text-lg font-bold text-gray-900 dark:text-white">{metric.value}</div>
							</div>
						))}
					</div>
				</div>

			</CardContent>
		</Card>
	)
}
