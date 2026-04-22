import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const datasetSizes = [
	{ name: "Customer Support QA", size: "3.2 MB", percent: 7 },
	{ name: "Product Classification", size: "8.5 MB", percent: 19 },
	{ name: "Sentiment Analysis", size: "5.1 MB", percent: 11 },
	{ name: "Code Generation", size: "12.4 MB", percent: 28 },
	{ name: "Summarization", size: "15.7 MB", percent: 35 },
]

export default function DatasetAnalytics() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Dataset Analytics</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					<div>
						<h3 className="text-sm font-medium mb-2">Dataset Distribution by Type</h3>
						<div className="h-[200px] w-full bg-muted rounded-md flex items-center justify-center">
							<p className="text-sm text-muted-foreground">Dataset distribution chart would appear here</p>
						</div>
					</div>
					<div>
						<h3 className="text-sm font-medium mb-2">Dataset Size Comparison</h3>
						<div className="space-y-2">
							{datasetSizes.map((dataset) => (
								<div key={dataset.name} className="space-y-1">
									<div className="flex items-center justify-between text-sm">
										<span>{dataset.name}</span>
										<span>{dataset.size}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-secondary">
										<div className="h-2 rounded-full bg-primary" style={{ width: `${dataset.percent}%` }} />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}