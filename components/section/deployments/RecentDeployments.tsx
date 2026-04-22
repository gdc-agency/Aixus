import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"

const recentDeployments = [
	{
		name: "Document Classifier",
		environment: "Development",
		time: "1 day ago",
		status: "Success",
	},
	{
		name: "Customer Support Bot",
		environment: "Production",
		time: "5 days ago",
		status: "Success",
	},
	{
		name: "Content Generator",
		environment: "Staging",
		time: "3 days ago",
		status: "Success",
	},
	{
		name: "Sentiment Analysis API",
		environment: "Production",
		time: "2 weeks ago",
		status: "Failed",
	},
]

export default function RecentDeployments() {
	return (
		<Card className="shadow-none">
			<CardHeader className="pb-2">
				<CardTitle className="text-lg font-semibold tracking-tight">
					Recent Deployments
				</CardTitle>
			</CardHeader>

			<CardContent className="divide-y divide-border">
				{recentDeployments.map((deployment, index) => (
					<div key={index} className="flex items-start justify-between py-4">
						<div className="flex items-start gap-3">
							<span
								className={`mt-1 h-3 w-3 rounded-full ${deployment.status === "Success"
									? "bg-green-500"
									: "bg-red-500"
									}`}
							/>
							<div>
								<p className="font-medium text-sm">{deployment.name}</p>
								<p className="text-xs text-muted-foreground mt-0.5">
									{deployment.time}
								</p>
							</div>
						</div>

						<div className="flex flex-col items-end gap-1">
							<Badge
								variant={
									deployment.environment === "Production" ? "default" : "secondary"
								}
								className="text-[10px] px-2 py-0.5"
							>
								{deployment.environment}
							</Badge>
							<span
								className={`text-xs font-medium ${deployment.status === "Success"
									? "text-green-600"
									: "text-red-600"
									}`}
							>
								{deployment.status}
							</span>
						</div>
					</div>
				))}
			</CardContent>

			<CardFooter>
				<Button variant="outline" className="w-full text-sm">
					<Clock className="mr-2 h-4 w-4" />
					View Deployment History
				</Button>
			</CardFooter>
		</Card>
	)
}
