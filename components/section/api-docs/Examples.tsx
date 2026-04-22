import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Code, FileText, Image, MessageSquare, Search, Settings } from "lucide-react"

const examples = [
	{
		title: "Chatbot Implementation",
		description: "Build a conversational AI chatbot with streaming responses",
		language: "JavaScript",
		complexity: "Intermediate",
		icon: <MessageSquare className="h-8 w-8 text-primary" />,
		tags: ["Chat", "Streaming", "Frontend"],
	},
	{
		title: "Document Summarization",
		description: "Extract key insights from long documents using AI",
		language: "Python",
		complexity: "Intermediate",
		icon: <FileText className="h-8 w-8 text-primary" />,
		tags: ["Summarization", "NLP", "Backend"],
	},
	{
		title: "Image Generation API",
		description: "Generate images from text descriptions",
		language: "JavaScript",
		complexity: "Advanced",
		icon: <Image className="h-8 w-8 text-primary" />,
		tags: ["Images", "Multimodal", "Frontend"],
	},
	{
		title: "Sentiment Analysis",
		description: "Analyze sentiment in customer feedback",
		language: "Python",
		complexity: "Beginner",
		icon: <BarChart className="h-8 w-8 text-primary" />,
		tags: ["Analysis", "Classification", "Backend"],
	},
	{
		title: "Vector Search Implementation",
		description: "Build a semantic search using vector embeddings",
		language: "TypeScript",
		complexity: "Advanced",
		icon: <Search className="h-8 w-8 text-primary" />,
		tags: ["Search", "Embeddings", "Database"],
	},
	{
		title: "Fine-tuning Workflow",
		description: "End-to-end process for fine-tuning custom models",
		language: "Python",
		complexity: "Advanced",
		icon: <Settings className="h-8 w-8 text-primary" />,
		tags: ["Fine-tuning", "Training", "MLOps"],
	},
]

export default function Examples() {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			{examples.map((example, index) => (
				<Card key={index} className="flex flex-col">
					<CardHeader>
						<div className="flex items-center justify-between">
							<CardTitle>{example.title}</CardTitle>
							<Badge>{example.language}</Badge>
						</div>
					</CardHeader>
					<CardContent className="flex-1">
						<div className="flex flex-wrap gap-2">
							{example.tags.map((tag) => (
								<Badge key={tag} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
						<div className="mt-4 flex items-center gap-2">
							<Code className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">Complexity: {example.complexity}</span>
						</div>
					</CardContent>
					<CardFooter>
						<Button variant="outline" className="w-full">
							View Example
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}