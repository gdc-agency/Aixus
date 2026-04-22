import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RefreshCw } from "lucide-react"

const activeJobs = [
	{
		name: "Customer Support Assistant",
		baseModel: "GPT-4o",
		status: "Training",
		progress: 65,
		created: "2 days ago",
		eta: "4 hours",
	},
	{
		name: "Legal Document Analyzer",
		baseModel: "Claude 3",
		status: "Validating",
		progress: 25,
		created: "1 day ago",
		eta: "8 hours",
	},
	{
		name: "Medical Diagnosis Helper",
		baseModel: "Llama 3",
		status: "Preprocessing",
		progress: 15,
		created: "12 hours ago",
		eta: "10 hours",
	},
]

export default function ActiveJobs() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Active Fine-tuning Jobs</CardTitle>
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
							<TableHead>ETA</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{activeJobs.map((job) => (
							<TableRow key={job.name}>
								<TableCell className="font-medium">{job.name}</TableCell>
								<TableCell>{job.baseModel}</TableCell>
								<TableCell>
									<Badge
										variant={
											job.status === "Training"
												? "default"
												: job.status === "Validating"
													? "outline"
													: "secondary"
										}
										className="flex w-fit items-center gap-1"
									>
										<RefreshCw className="h-3 w-3 animate-spin" />
										{job.status}
									</Badge>
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Progress value={job.progress} className="h-2 w-[100px]" />
										<span className="text-xs text-muted-foreground">{job.progress}%</span>
									</div>
								</TableCell>
								<TableCell>{job.created}</TableCell>
								<TableCell>{job.eta}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}