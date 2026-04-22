import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, GitBranch } from "lucide-react"

const experiments = [
	{
		name: "Early Prompt Engineering Tests",
		baseModel: "GPT-4",
		result: "Mixed",
		archived: "6 months ago",
		owner: "John Doe",
	},
	{
		name: "Initial Fine-tuning Approach",
		baseModel: "Claude 2",
		result: "Failure",
		archived: "8 months ago",
		owner: "Sarah Kim",
	},
	{
		name: "Legacy Model Comparison",
		baseModel: "Llama 2",
		result: "Success",
		archived: "1 year ago",
		owner: "Alex Chen",
	},
]

export default function ArchivedExperiments() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Archived Experiments</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Base Model</TableHead>
							<TableHead>Result</TableHead>
							<TableHead>Archived</TableHead>
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
												: experiment.result === "Mixed"
													? "outline"
													: "destructive"
										}
										className={experiment.result === "Success" ? "bg-green-500 hover:bg-green-600" : ""}
									>
										{experiment.result}
									</Badge>
								</TableCell>
								<TableCell>{experiment.archived}</TableCell>
								<TableCell>{experiment.owner}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Button variant="outline" size="sm">
											<FileText className="mr-2 h-3 w-3" />
											View
										</Button>
										<Button variant="outline" size="sm">
											<GitBranch className="mr-2 h-3 w-3" />
											Restore
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