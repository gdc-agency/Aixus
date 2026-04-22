import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Clock, Download, RefreshCw } from "lucide-react"

const deploymentHistory = [
	{
		id: "dep-12345",
		name: "Document Classifier",
		environment: "Development",
		version: "v0.4.2",
		status: "Success",
		deployedBy: "John Doe",
		deployedAt: "1 day ago",
	},
	{
		id: "dep-12344",
		name: "Customer Support Bot",
		environment: "Production",
		version: "v1.2.5",
		status: "Success",
		deployedBy: "Sarah Kim",
		deployedAt: "5 days ago",
	},
	{
		id: "dep-12343",
		name: "Content Generator",
		environment: "Staging",
		version: "v0.9.8",
		status: "Success",
		deployedBy: "Alex Chen",
		deployedAt: "3 days ago",
	},
	{
		id: "dep-12342",
		name: "Sentiment Analysis API",
		environment: "Production",
		version: "v1.5.2",
		status: "Failed",
		deployedBy: "Maria Garcia",
		deployedAt: "2 weeks ago",
	},
	{
		id: "dep-12341",
		name: "Sentiment Analysis API",
		environment: "Production",
		version: "v1.5.1",
		status: "Success",
		deployedBy: "James Wilson",
		deployedAt: "1 month ago",
	},
]

export default function DeploymentHistory() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Deployment History</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Deployment ID</TableHead>
							<TableHead>Name</TableHead>
							<TableHead>Environment</TableHead>
							<TableHead>Version</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Deployed By</TableHead>
							<TableHead>Deployed At</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{deploymentHistory.map((deployment) => (
							<TableRow key={deployment.id}>
								<TableCell className="font-medium">{deployment.id}</TableCell>
								<TableCell>{deployment.name}</TableCell>
								<TableCell>
									<Badge
										variant={
											deployment.environment === "Production"
												? "default"
												: deployment.environment === "Staging"
													? "outline"
													: "secondary"
										}
									>
										{deployment.environment}
									</Badge>
								</TableCell>
								<TableCell>{deployment.version}</TableCell>
								<TableCell>
									<Badge
										variant={deployment.status === "Success" ? "default" : "destructive"}
										className={deployment.status === "Success" ? "bg-green-500 hover:bg-green-600" : ""}
									>
										{deployment.status}
									</Badge>
								</TableCell>
								<TableCell>{deployment.deployedBy}</TableCell>
								<TableCell>{deployment.deployedAt}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Button variant="outline" size="sm">
											<Download className="mr-2 h-3 w-3" />
											Logs
										</Button>
										{deployment.status === "Success" && (
											<Button variant="outline" size="sm">
												<RefreshCw className="mr-2 h-3 w-3" />
												Rollback
											</Button>
										)}
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<Clock className="h-4 w-4" />
					<span>Deployment history is retained for 90 days</span>
				</div>
			</CardFooter>
		</Card>
	)
}