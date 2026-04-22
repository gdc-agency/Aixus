import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bot, Download } from "lucide-react"

const completedJobs = [
	{
		name: "Product Recommendation Engine",
		baseModel: "GPT-4o",
		status: "Deployed",
		trainingTime: "8 hours",
		completed: "1 week ago",
	},
	{
		name: "Code Review Assistant",
		baseModel: "Claude 3",
		status: "Ready",
		trainingTime: "12 hours",
		completed: "3 days ago",
	},
	{
		name: "Financial Advisor",
		baseModel: "Llama 3",
		status: "Deployed",
		trainingTime: "6 hours",
		completed: "5 days ago",
	},
	{
		name: "Content Moderator",
		baseModel: "Mistral",
		status: "Ready",
		trainingTime: "4 hours",
		completed: "2 days ago",
	},
]

export default function CompletedJobs() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Completed Fine-tuning Jobs</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Base Model</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Training Time</TableHead>
							<TableHead>Completed</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{completedJobs.map((job) => (
							<TableRow key={job.name}>
								<TableCell className="font-medium">{job.name}</TableCell>
								<TableCell>{job.baseModel}</TableCell>
								<TableCell>
									<Badge variant={job.status === "Deployed" ? "default" : "outline"}>{job.status}</Badge>
								</TableCell>
								<TableCell>{job.trainingTime}</TableCell>
								<TableCell>{job.completed}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Button variant="outline" size="sm">
											<Bot className="mr-2 h-3 w-3" />
											Use
										</Button>
										<Button variant="outline" size="sm">
											<Download className="mr-2 h-3 w-3" />
											Export
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}