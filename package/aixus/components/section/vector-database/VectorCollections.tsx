import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { RefreshCw, Search, Settings } from "lucide-react"

const collections = [
	{
		name: "Product Documentation",
		type: "Text",
		vectors: "15,432",
		dimensions: "1,536",
		size: "45 MB",
		lastUpdated: "2 days ago",
		status: "Active",
	},
	{
		name: "Customer Support Knowledge Base",
		type: "Text",
		vectors: "8,721",
		dimensions: "1,536",
		size: "28 MB",
		lastUpdated: "1 week ago",
		status: "Active",
	},
	{
		name: "Product Images",
		type: "Image",
		vectors: "3,245",
		dimensions: "768",
		size: "120 MB",
		lastUpdated: "3 days ago",
		status: "Active",
	},
	{
		name: "Legal Documents",
		type: "Text",
		vectors: "5,678",
		dimensions: "1,536",
		size: "18 MB",
		lastUpdated: "1 month ago",
		status: "Indexing",
	},
	{
		name: "Research Papers",
		type: "Text",
		vectors: "2,345",
		dimensions: "1,536",
		size: "12 MB",
		lastUpdated: "2 weeks ago",
		status: "Active",
	},
]

export default function VectorCollections() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Vector Collections</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Name</TableHead>
							<TableHead>Type</TableHead>
							<TableHead>Vectors</TableHead>
							<TableHead>Dimensions</TableHead>
							<TableHead>Size</TableHead>
							<TableHead>Last Updated</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{collections.map((collection) => (
							<TableRow key={collection.name}>
								<TableCell className="font-medium">{collection.name}</TableCell>
								<TableCell>{collection.type}</TableCell>
								<TableCell>{collection.vectors}</TableCell>
								<TableCell>{collection.dimensions}</TableCell>
								<TableCell>{collection.size}</TableCell>
								<TableCell>{collection.lastUpdated}</TableCell>
								<TableCell>
									<Badge
										variant={collection.status === "Active" ? "default" : "secondary"}
										className={
											collection.status === "Active"
												? "bg-green-500 hover:bg-green-600"
												: "flex items-center gap-1"
										}
									>
										{collection.status === "Indexing" && <RefreshCw className="h-3 w-3 animate-spin" />}
										{collection.status}
									</Badge>
								</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										<Button variant="outline" size="sm">
											<Search className="mr-2 h-3 w-3" />
											Search
										</Button>
										<Button variant="outline" size="sm">
											<Settings className="h-3 w-3" />
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