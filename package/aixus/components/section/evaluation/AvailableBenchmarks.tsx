import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Gauge, Plus } from "lucide-react"

const benchmarks = [
	{
		name: "MMLU (Massive Multitask Language Understanding)",
		description: "Tests knowledge across 57 subjects",
		difficulty: "High",
		questions: 15793,
	},
	{
		name: "HellaSwag",
		description: "Common sense reasoning for everyday events",
		difficulty: "Medium",
		questions: 10042,
	},
	{
		name: "TruthfulQA",
		description: "Measures truthfulness and factual accuracy",
		difficulty: "High",
		questions: 817,
	},
	{
		name: "GSM8K",
		description: "Grade school math word problems",
		difficulty: "Medium",
		questions: 8500,
	},
]

export default function AvailableBenchmarks() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Available Benchmarks</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{benchmarks.map((benchmark) => (
						<div key={benchmark.name} className="flex items-start gap-4 rounded-lg border p-4">
							<Gauge className="h-5 w-5 text-primary mt-0.5" />
							<div className="space-y-1">
								<div className="flex items-center gap-2">
									<h3 className="font-medium">{benchmark.name}</h3>
									<Badge variant="outline">{benchmark.difficulty}</Badge>
								</div>
								<p className="text-sm text-muted-foreground">{benchmark.description}</p>
								<p className="text-xs text-muted-foreground">{benchmark.questions} questions</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="w-full">
					<Plus className="mr-2 h-4 w-4" />
					Run New Benchmark
				</Button>
			</CardFooter>
		</Card>
	)
}