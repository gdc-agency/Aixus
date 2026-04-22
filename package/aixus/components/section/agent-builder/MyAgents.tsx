import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Rocket, Settings } from "lucide-react"

const agents = [
	{
		name: "Customer Support Assistant",
		description: "Handles customer inquiries and troubleshooting",
		model: "GPT-4o",
		status: "Active",
		type: "Conversational",
		lastUpdated: "2 days ago",
	},
	{
		name: "Product Recommendation Agent",
		description: "Recommends products based on customer preferences",
		model: "Claude 3",
		status: "Active",
		type: "Task-oriented",
		lastUpdated: "1 week ago",
	},
	{
		name: "Data Analysis Assistant",
		description: "Analyzes data and generates insights",
		model: "GPT-4o",
		status: "Inactive",
		type: "Task-oriented",
		lastUpdated: "3 weeks ago",
	},
	{
		name: "Content Creation Agent",
		description: "Generates marketing content and blog posts",
		model: "Claude 3",
		status: "Active",
		type: "Creative",
		lastUpdated: "5 days ago",
	},
	{
		name: "Research Assistant",
		description: "Conducts research and summarizes findings",
		model: "Llama 3",
		status: "Development",
		type: "Autonomous",
		lastUpdated: "1 day ago",
	},
]

export default function MyAgents() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{agents.map((agent, index) => (
				<Card key={index}>
					<CardHeader className="pb-2">
						<div className="flex items-center justify-between">
							<CardTitle>{agent.name}</CardTitle>
							<Badge
								variant={
									agent.status === "Active" ? "default" : agent.status === "Development" ? "secondary" : "outline"
								}
								className={agent.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}
							>
								{agent.status}
							</Badge>
						</div>
					</CardHeader>
					<CardContent className="pb-2">
						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Model:</span>
								<span>{agent.model}</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Type:</span>
								<span>{agent.type}</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Last Updated:</span>
								<span>{agent.lastUpdated}</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Button variant="outline" size="sm">
							<Settings className="mr-2 h-3 w-3" />
							Edit
						</Button>
						<Button size="sm">
							<Rocket className="mr-2 h-3 w-3" />
							Deploy
						</Button>
					</CardFooter>
				</Card>
			))}

			<Card className="flex flex-col items-center justify-center p-6 border-dashed">
				<Plus className="h-8 w-8 text-muted-foreground mb-2" />
				<h3 className="text-lg font-medium">Create New Agent</h3>
				<p className="text-sm text-muted-foreground text-center mt-1 mb-4">
					Build a custom AI agent for your specific needs
				</p>
				<Button>
					<Plus className="mr-2 h-4 w-4" />
					New Agent
				</Button>
			</Card>
		</div>
	)
}