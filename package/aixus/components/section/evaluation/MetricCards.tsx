import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const metrics = [
	{
		name: "Accuracy",
		value: "94.8%",
		change: "+2.4% from last month",
		progress: 94.8,
	},
	{
		name: "Response Time",
		value: "124ms",
		change: "-15ms from last month",
		progress: 75,
	},
	{
		name: "Relevance Score",
		value: "8.7/10",
		change: "+0.5 from last month",
		progress: 87,
	},
	{
		name: "Error Rate",
		value: "0.8%",
		change: "-0.3% from last month",
		progress: 8,
	},
]

export default function MetricCards() {
	return (
		<div className="grid gap-6 md:grid-cols-4">
			{metrics.map((metric) => (
				<Card key={metric.name}>
					<CardHeader className="pb-2">
						<CardTitle>{metric.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{metric.value}</div>
						<p className="text-xs text-muted-foreground">{metric.change}</p>
						<Progress className="mt-2" value={metric.progress} />
					</CardContent>
				</Card>
			))}
		</div>
	)
}