import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, Plus, Search } from "lucide-react"

const datasets = [
	{
		name: "Customer Support QA",
		type: "Question Answering",
		examples: 1250,
		size: "3.2 MB",
		created: "2 months ago",
		lastUsed: "1 week ago",
	},
	{
		name: "Product Classification",
		type: "Classification",
		examples: 5000,
		size: "8.5 MB",
		created: "3 months ago",
		lastUsed: "2 weeks ago",
	},
	{
		name: "Sentiment Analysis",
		type: "Sentiment",
		examples: 3500,
		size: "5.1 MB",
		created: "1 month ago",
		lastUsed: "3 days ago",
	},
	{
		name: "Code Generation",
		type: "Code",
		examples: 1800,
		size: "12.4 MB",
		created: "2 weeks ago",
		lastUsed: "5 days ago",
	},
	{
		name: "Summarization",
		type: "Summarization",
		examples: 2200,
		size: "15.7 MB",
		created: "1 month ago",
		lastUsed: "Yesterday",
	},
]

export default function DatasetTable() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Evaluation Datasets</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Examples</TableHead>
							<TableHead>Size</TableHead>
							<TableHead>Created</TableHead>
							<TableHead>Last Used</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{datasets.map((dataset) => (
							<TableRow key={dataset.name}>
								<TableCell className="font-medium">{dataset.name}</TableCell>
								<TableCell>{dataset.type}</TableCell>
								<TableCell>{dataset.examples}</TableCell>
								<TableCell>{dataset.size}</TableCell>
								<TableCell>{dataset.created}</TableCell>
								<TableCell>{dataset.lastUsed}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Button variant="outline" size="sm">
											<Search className="mr-2 h-3 w-3" />
											View
										</Button>
										<Button variant="outline" size="sm">
											<FileText className="mr-2 h-3 w-3" />
											Use
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
					<Plus className="mr-2 h-4 w-4" />
					Upload Dataset
				</Button>
			</CardFooter>
		</Card>
	)
}