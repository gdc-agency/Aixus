import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Download, GitBranch } from "lucide-react"

const experiments = [
	{
		name: "Context Window Optimization",
		baseModel: "GPT-4o",
		result: "Success",
		improvement: "+15%",
		completed: "1 month ago",
		owner: "John Doe",
	},
	{
		name: "Factual Accuracy Improvement",
		baseModel: "Claude 3",
		result: "Success",
		improvement: "+8%",
		completed: "2 weeks ago",
		owner: "Sarah Kim",
	},
	{
		name: "Instruction Following Test",
		baseModel: "Llama 3",
		result: "Neutral",
		improvement: "+2%",
		completed: "3 weeks ago",
		owner: "Alex Chen",
	},
	{
		name: "Response Time Optimization",
		baseModel: "Mistral",
		result: "Success",
		improvement: "+22%",
		completed: "1 week ago",
		owner: "Maria Garcia",
	},
	{
		name: "Hallucination Reduction",
		baseModel: "GPT-4o",
		result: "Failure",
		improvement: "-3%",
		completed: "2 months ago",
		owner: "James Wilson",
	},
]

export default function CompletedExperiments() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Completed Experiments</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Base Model</TableHead>
							<TableHead>Result</TableHead>
							<TableHead>Improvement</TableHead>
							<TableHead>Completed</TableHead>
							<TableHead>Owner</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{experiments.map((experiment) => (
							<TableRow key={experiment.name}>
								<TableCell className="font-medium">{experiment.name}</TableCell>
								<TableCell>{experiment.baseModel}</TableCell>
								<TableCell>
									<Badge
										variant={
											experiment.result === "Success"
												? "default"
												: experiment.result === "Neutral"
													? "outline"
													: "destructive"
										}
										className={experiment.result === "Success" ? "bg-green-500 hover:bg-green-600" : ""}
									>
										{experiment.result}
									</Badge>
								</TableCell>
								<TableCell
									className={
										experiment.improvement.startsWith("+")
											? "text-green-500"
											: experiment.improvement.startsWith("-")
												? "text-red-500"
												: ""
									}
								>
									{experiment.improvement}
								</TableCell>
								<TableCell>{experiment.completed}</TableCell>
								<TableCell>{experiment.owner}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Button variant="outline" size="sm">
											<BarChart className="mr-2 h-3 w-3" />
											Results
										</Button>
										<Button variant="outline" size="sm">
											<GitBranch className="mr-2 h-3 w-3" />
											Fork
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="ml-auto">
					<Download className="mr-2 h-4 w-4" />
					Export Results
				</Button>
			</CardFooter>
		</Card>
	)
}