import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"

const models = [
	{
		name: "GPT-4o",
		accuracy: "96.2%",
		responseTime: "145ms",
		relevance: "9.1/10",
		errorRate: "0.5%",
		ragasScore: "0.87",
		lastEvaluated: "2 days ago",
	},
	{
		name: "Claude 3",
		accuracy: "95.8%",
		responseTime: "120ms",
		relevance: "8.9/10",
		errorRate: "0.7%",
		ragasScore: "0.85",
		lastEvaluated: "3 days ago",
	},
	{
		name: "Llama 3",
		accuracy: "93.5%",
		responseTime: "95ms",
		relevance: "8.5/10",
		errorRate: "1.2%",
		ragasScore: "0.82",
		lastEvaluated: "1 week ago",
	},
	{
		name: "Mistral Large",
		accuracy: "94.2%",
		responseTime: "110ms",
		relevance: "8.7/10",
		errorRate: "0.9%",
		ragasScore: "0.83",
		lastEvaluated: "5 days ago",
	},
	{
		name: "Custom Fine-tuned Model",
		accuracy: "97.1%",
		responseTime: "130ms",
		relevance: "9.3/10",
		errorRate: "0.4%",
		ragasScore: "0.89",
		lastEvaluated: "1 day ago",
	},
]

export default function ModelPerformance() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Model Performance</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Model</TableHead>
							<TableHead>Accuracy</TableHead>
							<TableHead>Response Time</TableHead>
							<TableHead>Relevance</TableHead>
							<TableHead>Error Rate</TableHead>
							<TableHead>RAGAS Score</TableHead>
							<TableHead>Last Evaluated</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{models.map((model) => (
							<TableRow key={model.name}>
								<TableCell className="font-medium">{model.name}</TableCell>
								<TableCell>{model.accuracy}</TableCell>
								<TableCell>{model.responseTime}</TableCell>
								<TableCell>{model.relevance}</TableCell>
								<TableCell>{model.errorRate}</TableCell>
								<TableCell>{model.ragasScore}</TableCell>
								<TableCell>{model.lastEvaluated}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="ml-auto">
					<Download className="mr-2 h-4 w-4" />
					Export Report
				</Button>
			</CardFooter>
		</Card>
	)
}