import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, GitMerge } from "lucide-react"

export default function ExperimentDetails() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Experiment Details</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span className="text-muted-foreground">Base Model:</span>
						<span>GPT-4o</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span className="text-muted-foreground">Created:</span>
						<span>2 days ago</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span className="text-muted-foreground">Owner:</span>
						<span>John Doe</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span className="text-muted-foreground">Status:</span>
						<Badge className="bg-green-500 hover:bg-green-600">Running</Badge>
					</div>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-medium">Description</h3>
					<p className="text-sm text-muted-foreground">
						Experiment to improve response quality by fine-tuning on high-quality examples and adjusting
						temperature and top-p parameters.
					</p>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-medium">Hypothesis</h3>
					<p className="text-sm text-muted-foreground">
						Reducing temperature to 0.5 and using a top-p of 0.9 will result in more accurate and relevant
						responses while maintaining creativity.
					</p>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-medium">Parameters</h3>
					<div className="rounded-lg border p-3">
						<div className="grid grid-cols-2 gap-2 text-sm">
							<div>
								<div className="text-xs text-muted-foreground">Temperature</div>
								<div className="font-medium">0.5</div>
							</div>
							<div>
								<div className="text-xs text-muted-foreground">Top-p</div>
								<div className="font-medium">0.9</div>
							</div>
							<div>
								<div className="text-xs text-muted-foreground">Max Tokens</div>
								<div className="font-medium">1024</div>
							</div>
							<div>
								<div className="text-xs text-muted-foreground">Frequency Penalty</div>
								<div className="font-medium">0.2</div>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline" size="sm">
					<Clock className="mr-2 h-3 w-3" />
					View Logs
				</Button>
				<Button variant="outline" size="sm">
					<GitMerge className="mr-2 h-3 w-3" />
					Compare
				</Button>
			</CardFooter>
		</Card>
	)
}