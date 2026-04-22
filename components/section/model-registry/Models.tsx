import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tag } from "lucide-react"
import { getStageBadge } from "./utils"

const models = [
	{
		name: "Customer Support Assistant",
		type: "Fine-tuned",
		latestVersion: "v2.3.0",
		stage: "Production",
		created: "3 months ago",
		lastUpdated: "2 days ago",
	},
	{
		name: "Product Classifier",
		type: "Classification",
		latestVersion: "v1.5.2",
		stage: "Staging",
		created: "2 months ago",
		lastUpdated: "1 week ago",
	},
	{
		name: "Content Generator",
		type: "Fine-tuned",
		latestVersion: "v3.1.0",
		stage: "Production",
		created: "6 months ago",
		lastUpdated: "3 days ago",
	},
	{
		name: "Sentiment Analyzer",
		type: "Classification",
		latestVersion: "v2.0.1",
		stage: "Development",
		created: "1 month ago",
		lastUpdated: "2 days ago",
	},
	{
		name: "Code Assistant",
		type: "Fine-tuned",
		latestVersion: "v1.2.5",
		stage: "Staging",
		created: "2 months ago",
		lastUpdated: "1 week ago",
	},
]

export default function Models() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Registered Models</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Latest Version</TableHead>
							<TableHead>Stage</TableHead>
							<TableHead>Created</TableHead>
							<TableHead>Last Updated</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{models.map((model) => (
							<TableRow key={model.name}>
								<TableCell className="font-medium">{model.name}</TableCell>
								<TableCell>{model.type}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Tag className="h-3 w-3 text-muted-foreground" />
										<span>{model.latestVersion}</span>
									</div>
								</TableCell>
								<TableCell>
									<span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStageBadge(model.stage)}`}>
										{model.stage}
									</span>
								</TableCell>
								<TableCell>{model.created}</TableCell>
								<TableCell>{model.lastUpdated}</TableCell>
								<TableCell className="flex gap-2">
									<Button size="sm" variant="outline">Edit</Button>
									<Button size="sm" variant="destructive">Delete</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}