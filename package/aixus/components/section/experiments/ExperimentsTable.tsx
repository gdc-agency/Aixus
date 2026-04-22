import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, GitBranch, RefreshCw } from "lucide-react"

const experiments = [
	{
		name: "Improved Response Quality",
		baseModel: "GPT-4o",
		status: "Running",
		progress: 65,
		created: "2 days ago",
		owner: "John Doe",
	},
	{
		name: "Reduced Latency Test",
		baseModel: "Claude 3",
		status: "Running",
		progress: 42,
		created: "1 week ago",
		owner: "Sarah Kim",
	},
	{
		name: "Domain-Specific Knowledge",
		baseModel: "Llama 3",
		status: "Paused",
		progress: 30,
		created: "3 days ago",
		owner: "Alex Chen",
	},
	{
		name: "Multilingual Support",
		baseModel: "GPT-4o",
		status: "Running",
		progress: 78,
		created: "5 days ago",
		owner: "Maria Garcia",
	},
]

export default function ExperimentsTable() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Active Experiments</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Base Model</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Progress</TableHead>
							<TableHead>Created</TableHead>
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
										variant={experiment.status === "Running" ? "default" : "secondary"}
										className={
											experiment.status === "Running"
												? "bg-green-500 hover:bg-green-600 flex items-center gap-1"
												: ""
										}
									>
										{experiment.status === "Running" && <RefreshCw className="h-3 w-3 animate-spin" />}
										{experiment.status}
									</Badge>
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<div className="w-[100px]">
											<div className="h-2 w-full rounded-full bg-secondary">
												<div
													className="h-2 rounded-full bg-primary"
													style={{ width: `${experiment.progress}%` }}
												/>
											</div>
										</div>
										<span className="text-xs text-muted-foreground">{experiment.progress}%</span>
									</div>
								</TableCell>
								<TableCell>{experiment.created}</TableCell>
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
		</Card>
	)
}