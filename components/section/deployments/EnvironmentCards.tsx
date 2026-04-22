import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe } from "lucide-react"

const environments = [
	{
		name: "Production",
		description: "Live environment for end users",
		deployments: 3,
		status: "Healthy",
		lastUpdated: "5 days ago",
		resources: { cpu: "8 vCPU", memory: "16 GB", storage: "100 GB" },
	},
	{
		name: "Staging",
		description: "Pre-production testing environment",
		deployments: 1,
		status: "Healthy",
		lastUpdated: "3 days ago",
		resources: { cpu: "4 vCPU", memory: "8 GB", storage: "50 GB" },
	},
	{
		name: "Development",
		description: "Environment for active development",
		deployments: 1,
		status: "Healthy",
		lastUpdated: "1 day ago",
		resources: { cpu: "2 vCPU", memory: "4 GB", storage: "20 GB" },
	},
]

export default function EnvironmentCards() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{environments.map((env) => (
				<Card key={env.name}>
					<CardHeader>
						<div className="flex items-center justify-between">
							<CardTitle>{env.name}</CardTitle>
							<Badge
								variant={env.status === "Healthy" ? "default" : "outline"}
								className={env.status === "Healthy" ? "bg-green-500 hover:bg-green-600" : ""}
							>
								{env.status}
							</Badge>
						</div>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Active Deployments:</span>
								<span className="font-medium">{env.deployments}</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Last Updated:</span>
								<span>{env.lastUpdated}</span>
							</div>
						</div>
						<div className="rounded-lg border p-3">
							<h3 className="text-sm font-medium mb-2">Resources</h3>
							<div className="grid grid-cols-3 gap-2 text-center">
								<div>
									<div className="text-xs text-muted-foreground">CPU</div>
									<div className="text-sm font-medium">{env.resources.cpu}</div>
								</div>
								<div>
									<div className="text-xs text-muted-foreground">Memory</div>
									<div className="text-sm font-medium">{env.resources.memory}</div>
								</div>
								<div>
									<div className="text-xs text-muted-foreground">Storage</div>
									<div className="text-sm font-medium">{env.resources.storage}</div>
								</div>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Button variant="outline" size="sm">
							<Globe className="mr-2 h-3 w-3" />
							View
						</Button>
						<Button size="sm">
							<ArrowRight className="mr-2 h-3 w-3" />
							Deploy
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}