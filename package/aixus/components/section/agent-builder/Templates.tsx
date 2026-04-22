import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Plus } from "lucide-react"

const templates = [
	{
		name: "Customer Support",
		description: "Handles customer inquiries and troubleshooting",
		model: "GPT-4o",
		popularity: "High",
		complexity: "Medium",
	},
	{
		name: "Data Analyst",
		description: "Analyzes data and generates insights",
		model: "Claude 3",
		popularity: "Medium",
		complexity: "High",
	},
	{
		name: "Content Creator",
		description: "Generates marketing content and blog posts",
		model: "GPT-4o",
		popularity: "High",
		complexity: "Medium",
	},
	{
		name: "Research Assistant",
		description: "Conducts research and summarizes findings",
		model: "Llama 3",
		popularity: "Medium",
		complexity: "High",
	},
	{
		name: "Code Assistant",
		description: "Helps with coding tasks and debugging",
		model: "Claude 3",
		popularity: "High",
		complexity: "High",
	},
	{
		name: "Sales Assistant",
		description: "Assists with sales inquiries and lead qualification",
		model: "GPT-4o",
		popularity: "Medium",
		complexity: "Medium",
	},
]

export default function Templates() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{templates.map((template, index) => (
				<Card key={index}>
					<CardHeader className="pb-2">
						<div className="flex items-center justify-between">
							<CardTitle>{template.name}</CardTitle>
							<Badge variant="secondary">{template.popularity} Usage</Badge>
						</div>
					</CardHeader>
					<CardContent className="pb-2">
						<div className="space-y-2">
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Recommended Model:</span>
								<span>{template.model}</span>
							</div>
							<div className="flex items-center justify-between text-sm">
								<span className="text-muted-foreground">Complexity:</span>
								<span>{template.complexity}</span>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Button variant="outline" size="sm">
							<Download className="mr-2 h-3 w-3" />
							Preview
						</Button>
						<Button size="sm">
							<Plus className="mr-2 h-3 w-3" />
							Use Template
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}