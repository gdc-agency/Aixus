import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RefreshCw } from "lucide-react"

const benchmarks = [
	{
		name: "MMLU",
		model: "GPT-4o",
		score: "86.4%",
		percentile: "92nd",
		average: "75.2%",
		lastRun: "1 week ago",
		status: "Completed",
	},
	{
		name: "HellaSwag",
		model: "Claude 3",
		score: "83.7%",
		percentile: "88th",
		average: "72.5%",
		lastRun: "2 weeks ago",
		status: "Completed",
	},
	{
		name: "TruthfulQA",
		model: "Llama 3",
		score: "78.2%",
		percentile: "75th",
		average: "68.9%",
		lastRun: "3 weeks ago",
		status: "Completed",
	},
	{
		name: "GSM8K",
		model: "Custom Fine-tuned",
		score: "92.1%",
		percentile: "97th",
		average: "80.3%",
		lastRun: "5 days ago",
		status: "Completed",
	},
	{
		name: "BIG-Bench",
		model: "Mistral Large",
		score: "In Progress",
		percentile: "-",
		average: "71.8%",
		lastRun: "Running",
		status: "In Progress",
	},
]

export default function BenchmarkResults() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Benchmark Results</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Benchmark</TableHead>
							<TableHead>Model</TableHead>
							<TableHead>Score</TableHead>
							<TableHead>Percentile</TableHead>
							<TableHead>Industry Average</TableHead>
							<TableHead>Last Run</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{benchmarks.map((benchmark) => (
							<TableRow key={`${benchmark.name}-${benchmark.model}`}>
								<TableCell className="font-medium">{benchmark.name}</TableCell>
								<TableCell>{benchmark.model}</TableCell>
								<TableCell>{benchmark.score}</TableCell>
								<TableCell>{benchmark.percentile}</TableCell>
								<TableCell>{benchmark.average}</TableCell>
								<TableCell>{benchmark.lastRun}</TableCell>
								<TableCell>
									<Badge
										variant={benchmark.status === "Completed" ? "default" : "secondary"}
										className={
											benchmark.status === "Completed"
												? "bg-green-500 hover:bg-green-600"
												: "flex items-center gap-1"
										}
									>
										{benchmark.status === "In Progress" && <RefreshCw className="h-3 w-3 animate-spin" />}
										{benchmark.status}
									</Badge>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}