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
import { Check, Clock, MoreHorizontal, RefreshCw } from "lucide-react"

const developmentModels = [
	{
		name: "Custom GPT Fine-tune",
		type: "Fine-tuned",
		status: "Training",
		progress: "75%",
		created: "3 days ago",
	},
	{
		name: "Sentiment Analyzer",
		type: "Classification",
		status: "Testing",
		progress: "90%",
		created: "1 week ago",
	},
	{
		name: "Document Summarizer",
		type: "Summarization",
		status: "Review",
		progress: "100%",
		created: "2 days ago",
	},
]

export default function DevelopmentModels() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Development Models</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Progress</TableHead>
							<TableHead>Created</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{developmentModels.map((model) => (
							<TableRow key={model.name}>
								<TableCell className="font-medium">{model.name}</TableCell>
								<TableCell>{model.type}</TableCell>
								<TableCell>
									<Badge
										variant={
											model.status === "Training"
												? "secondary"
												: model.status === "Testing"
													? "outline"
													: "default"
										}
									>
										{model.status === "Training" && <RefreshCw className="mr-1 h-3 w-3 animate-spin" />}
										{model.status === "Testing" && <Clock className="mr-1 h-3 w-3" />}
										{model.status === "Review" && <Check className="mr-1 h-3 w-3" />}
										{model.status}
									</Badge>
								</TableCell>
								<TableCell>
									<div className="w-full flex-1">
										<div className="h-2 w-full rounded-full bg-secondary">
											<div className="h-2 rounded-full bg-primary" style={{ width: model.progress }} />
										</div>
									</div>
								</TableCell>
								<TableCell>{model.created}</TableCell>
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
											<DropdownMenuItem>View Metrics</DropdownMenuItem>
											<DropdownMenuItem>Deploy to Production</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
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