import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, FileText, Gauge, RefreshCw, Shield, Wand2 } from "lucide-react"

const guides = [
	{
		title: "Getting Started",
		description: "Learn the basics of using the AI platform APIs",
		icon: <FileText className="h-8 w-8 text-primary" />,
		tags: ["Beginner", "Setup"],
	},
	{
		title: "Authentication",
		description: "Secure your API requests with proper authentication",
		icon: <Shield className="h-8 w-8 text-primary" />,
		tags: ["Security", "Setup"],
	},
	{
		title: "Rate Limiting",
		description: "Understand API rate limits and best practices",
		icon: <Gauge className="h-8 w-8 text-primary" />,
		tags: ["Performance", "Production"],
	},
	{
		title: "Streaming Responses",
		description: "Implement streaming for real-time AI responses",
		icon: <RefreshCw className="h-8 w-8 text-primary" />,
		tags: ["Advanced", "Performance"],
	},
	{
		title: "Error Handling",
		description: "Handle API errors gracefully in your applications",
		icon: <AlertTriangle className="h-8 w-8 text-primary" />,
		tags: ["Reliability", "Production"],
	},
	{
		title: "Prompt Engineering",
		description: "Craft effective prompts for better AI responses",
		icon: <Wand2 className="h-8 w-8 text-primary" />,
		tags: ["Best Practices", "Optimization"],
	},
]

export default function Guides() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{guides.map((guide, index) => (
				<Card key={index} className="flex flex-col">
					<CardHeader>
						<div className="flex items-center gap-4">
							{guide.icon}
							<div>
								<CardTitle>{guide.title}</CardTitle>
							</div>
						</div>
					</CardHeader>
					<CardContent className="flex-1">
						<div className="flex flex-wrap gap-2">
							{guide.tags.map((tag) => (
								<Badge key={tag} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
					</CardContent>
					<CardFooter>
						<Button variant="outline" className="w-full">
							Read Guide
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}