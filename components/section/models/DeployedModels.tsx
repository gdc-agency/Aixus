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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const deployedModels = [
	{
		name: "GPT-4o",
		type: "Text Generation",
		status: "Active",
		version: "1.0.4",
		updated: "2 days ago",
	},
	{
		name: "Claude 3 Opus",
		type: "Text Generation",
		status: "Active",
		version: "2.1.0",
		updated: "1 week ago",
	},
	{
		name: "Llama 3 70B",
		type: "Text Generation",
		status: "Active",
		version: "3.0.1",
		updated: "3 days ago",
	},
	{
		name: "Mistral Large",
		type: "Text Generation",
		status: "Maintenance",
		version: "1.2.0",
		updated: "2 weeks ago",
	},
	{
		name: "Custom Classifier",
		type: "Classification",
		status: "Active",
		version: "2.3.5",
		updated: "5 days ago",
	},
]

export default function DeployedModels() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Deployed Models</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Version</TableHead>
							<TableHead>Last Updated</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{deployedModels.map((model) => (
							<TableRow key={model.name}>
								<TableCell className="font-medium">{model.name}</TableCell>
								<TableCell>{model.type}</TableCell>
								<TableCell>
									<Badge
										variant={
											model.status === "Active"
												? "default"
												: model.status === "Maintenance"
													? "outline"
													: "destructive"
										}
									>
										{model.status}
									</Badge>
								</TableCell>
								<TableCell>{model.version}</TableCell>
								<TableCell>{model.updated}</TableCell>
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
											<DropdownMenuItem>Update Model</DropdownMenuItem>
											<DropdownMenuItem>View Logs</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
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