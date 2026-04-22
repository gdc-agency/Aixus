import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download } from "lucide-react"

const collectionUsage = [
	{
		name: "Product Documentation",
		queries: "1,245",
		responseTime: "120ms",
		relevanceScore: "0.92",
		growthRate: "+5.2%",
	},
	{
		name: "Customer Support Knowledge Base",
		queries: "3,782",
		responseTime: "95ms",
		relevanceScore: "0.88",
		growthRate: "+12.7%",
	},
	{
		name: "Product Images",
		queries: "567",
		responseTime: "210ms",
		relevanceScore: "0.85",
		growthRate: "+2.1%",
	},
	{
		name: "Legal Documents",
		queries: "421",
		responseTime: "145ms",
		relevanceScore: "0.91",
		growthRate: "+1.5%",
	},
	{
		name: "Research Papers",
		queries: "189",
		responseTime: "180ms",
		relevanceScore: "0.94",
		growthRate: "+0.8%",
	},
]

export default function CollectionUsage() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Collection Usage</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Collection</TableHead>
							<TableHead>Queries</TableHead>
							<TableHead>Avg. Response Time</TableHead>
							<TableHead>Relevance Score</TableHead>
							<TableHead>Growth Rate</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{collectionUsage.map((collection) => (
							<TableRow key={collection.name}>
								<TableCell className="font-medium">{collection.name}</TableCell>
								<TableCell>{collection.queries}</TableCell>
								<TableCell>{collection.responseTime}</TableCell>
								<TableCell>{collection.relevanceScore}</TableCell>
								<TableCell className="text-green-500">{collection.growthRate}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="ml-auto">
					<Download className="mr-2 h-4 w-4" />
					Export Report
				</Button>
			</CardFooter>
		</Card>
	)
}