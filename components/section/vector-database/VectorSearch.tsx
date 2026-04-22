import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { RefreshCw, Search } from "lucide-react"

const recentSearches = [
	{
		query: "How to reset user password",
		collection: "Support Knowledge Base",
		results: 8,
		time: "2 hours ago",
	},
	{
		query: "Product return policy",
		collection: "Legal Documents",
		results: 5,
		time: "Yesterday",
	},
	{
		query: "API rate limiting documentation",
		collection: "Product Documentation",
		results: 12,
		time: "3 days ago",
	},
]

export default function VectorSearch() {
	return (
		<div className="space-y-8">
			{/* Search Section */}
			<Card className="shadow-none border-muted">
				<CardHeader>
					<CardTitle className="text-lg font-semibold tracking-tight">
						Vector Search
					</CardTitle>
					<p className="text-sm text-muted-foreground">
						Search across your vector collections with semantic precision
					</p>
				</CardHeader>

				<CardContent className="space-y-6">
					<div className="grid gap-6 md:grid-cols-4">
						{/* Query Box */}
						<div className="md:col-span-3 space-y-2">
							<Label htmlFor="search-query" className="text-sm font-medium">
								Search Query
							</Label>
							<Textarea
								id="search-query"
								placeholder="e.g. How do I update API keys?"
								className="min-h-[120px] resize-none text-sm"
							/>
						</div>

						{/* Filters */}
						<div className="space-y-5">
							<div className="space-y-2">
								<Label htmlFor="collection">Collection</Label>
								<Select defaultValue="all">
									<SelectTrigger id="collection" className="text-sm">
										<SelectValue placeholder="Select collection" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="all">All Collections</SelectItem>
										<SelectItem value="product-docs">
											Product Documentation
										</SelectItem>
										<SelectItem value="support-kb">
											Support Knowledge Base
										</SelectItem>
										<SelectItem value="legal">Legal Documents</SelectItem>
										<SelectItem value="research">Research Papers</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="space-y-2">
								<Label htmlFor="limit">Result Limit</Label>
								<Select defaultValue="10">
									<SelectTrigger id="limit" className="text-sm">
										<SelectValue placeholder="Select limit" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="5">5 results</SelectItem>
										<SelectItem value="10">10 results</SelectItem>
										<SelectItem value="20">20 results</SelectItem>
										<SelectItem value="50">50 results</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<Button className="w-full mt-2" size="sm">
								<Search className="mr-2 h-4 w-4" />
								Run Search
							</Button>
						</div>
					</div>

					{/* Results */}
					<div className="rounded-lg border bg-muted/30 p-6 text-center">
						<Search className="h-8 w-8 mx-auto text-muted-foreground mb-3" />
						<p className="text-sm text-muted-foreground">
							Enter a query above to search through your vector collections
						</p>
					</div>
				</CardContent>
			</Card>

			{/* Recent Searches */}
			<Card className="shadow-none border-muted">
				<CardHeader>
					<CardTitle className="text-lg font-semibold tracking-tight">
						Recent Searches
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[40%]">Query</TableHead>
								<TableHead>Collection</TableHead>
								<TableHead className="text-center">Results</TableHead>
								<TableHead>Time</TableHead>
								<TableHead className="text-right">Action</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{recentSearches.map((search, index) => (
								<TableRow key={index} className="hover:bg-muted/30">
									<TableCell className="font-medium">{search.query}</TableCell>
									<TableCell>{search.collection}</TableCell>
									<TableCell className="text-center">
										{search.results}
									</TableCell>
									<TableCell className="text-sm text-muted-foreground">
										{search.time}
									</TableCell>
									<TableCell className="text-right">
										<Button
											variant="outline"
											size="sm"
											className="text-xs"
										>
											<RefreshCw className="mr-2 h-3 w-3" />
											Run Again
										</Button>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	)
}
