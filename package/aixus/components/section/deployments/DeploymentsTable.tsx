import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const deployments = [
	{
		name: "Customer Support Bot",
		type: "Agent",
		environment: "Production",
		status: "Healthy",
		version: "v1.2.5",
		deployed: "5 days ago",
		traffic: 85,
	},
	{
		name: "Product Recommendation API",
		type: "API",
		environment: "Production",
		status: "Healthy",
		version: "v2.0.1",
		deployed: "2 weeks ago",
		traffic: 65,
	},
	{
		name: "Content Generator",
		type: "Service",
		environment: "Staging",
		status: "Healthy",
		version: "v0.9.8",
		deployed: "3 days ago",
		traffic: 30,
	},
	{
		name: "Sentiment Analysis API",
		type: "API",
		environment: "Production",
		status: "Degraded",
		version: "v1.5.2",
		deployed: "1 month ago",
		traffic: 45,
	},
	{
		name: "Document Classifier",
		type: "Service",
		environment: "Development",
		status: "Healthy",
		version: "v0.4.2",
		deployed: "1 day ago",
		traffic: 10,
	},
]

export default function DeploymentsTable() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Active Deployments</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Environment</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Version</TableHead>
							<TableHead>Deployed</TableHead>
							<TableHead>Traffic</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{deployments.map((deployment) => (
							<TableRow key={deployment.name}>
								<TableCell className="font-medium">{deployment.name}</TableCell>
								<TableCell>{deployment.type}</TableCell>
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
								<TableCell>
									<Badge
										variant={deployment.status === "Healthy" ? "default" : "outline"}
										className={
											deployment.status === "Healthy" ? "bg-green-500 hover:bg-green-600" : "text-yellow-500"
										}
									>
										{deployment.status}
									</Badge>
								</TableCell>
								<TableCell>{deployment.version}</TableCell>
								<TableCell>{deployment.deployed}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Progress value={deployment.traffic} className="h-2 w-[60px]" />
										<span className="text-xs text-muted-foreground">{deployment.traffic}%</span>
									</div>
								</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="icon">
												<MoreHorizontal className="h-4 w-4" />
												<span className="sr-only">Actions</span>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>View Details</DropdownMenuItem>
											<DropdownMenuItem>Update Version</DropdownMenuItem>
											<DropdownMenuItem>View Logs</DropdownMenuItem>
											<DropdownMenuItem>View Metrics</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem className="text-red-600">Rollback</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}