import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Download, FileText, Plus, Upload } from "lucide-react"

const datasets = [
	{
		name: "Customer Support Conversations",
		format: "JSONL",
		size: "1.2 GB",
		examples: "15,000",
		lastUpdated: "2 days ago",
	},
	{
		name: "Legal Documents",
		format: "JSONL",
		size: "3.5 GB",
		examples: "8,500",
		lastUpdated: "1 week ago",
	},
	{
		name: "Medical Case Studies",
		format: "JSONL",
		size: "2.1 GB",
		examples: "5,200",
		lastUpdated: "3 days ago",
	},
	{
		name: "Product Reviews",
		format: "JSONL",
		size: "800 MB",
		examples: "22,000",
		lastUpdated: "5 days ago",
	},
	{
		name: "Code Samples",
		format: "JSONL",
		size: "1.8 GB",
		examples: "12,500",
		lastUpdated: "1 day ago",
	},
]

export default function Datasets() {
	return (
				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{datasets.map((dataset) => (
						<Card key={dataset.name}>
							<CardHeader className="pb-2">
								<div className="flex items-center justify-between">
									<CardTitle className="text-lg">{dataset.name}</CardTitle>
									<FileText className="h-5 w-5 text-muted-foreground" />
								</div>
							</CardHeader>
							<CardContent className="pb-2">
								<div className="grid grid-cols-2 gap-2">
									<div>
										<p className="text-xs text-muted-foreground">Size</p>
										<p className="text-sm font-medium">{dataset.size}</p>
									</div>
									<div>
										<p className="text-xs text-muted-foreground">Examples</p>
										<p className="text-sm font-medium">{dataset.examples}</p>
									</div>
								</div>
								<div className="mt-2">
									<p className="text-xs text-muted-foreground">Last Updated</p>
									<p className="text-sm font-medium">{dataset.lastUpdated}</p>
								</div>
							</CardContent>
							<CardFooter className="flex justify-between">
								<Button variant="outline" size="sm">
									<Download className="mr-2 h-3 w-3" />
									Download
								</Button>
								<Button variant="outline" size="sm">
									<ArrowRight className="mr-2 h-3 w-3" />
									Use
								</Button>
							</CardFooter>
						</Card>
					))}

					<Card className="flex flex-col items-center justify-center p-6 border-dashed">
						<Upload className="h-8 w-8 text-muted-foreground mb-2" />
						<h3 className="text-lg font-medium">Upload New Dataset</h3>
						<p className="text-sm text-muted-foreground text-center mt-1 mb-4">
							Drag and drop or click to upload your training data
						</p>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							Upload Dataset
						</Button>
					</Card>
				</div>
	)
}