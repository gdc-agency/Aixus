"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Copy, Edit, Plus, Trash } from "lucide-react"

const templates = [
	{
		name: "Customer Support Response",
		description: "Template for responding to customer inquiries",
		category: "Support",
		variables: ["customer_name", "issue", "product"],
		prompt:
			"You are a helpful customer support agent. Respond to {{customer_name}}'s inquiry about {{issue}} with their {{product}}. Be empathetic, clear, and solution-oriented.",
		lastUsed: "2 days ago",
	},
	{
		name: "Content Summarizer",
		description: "Summarize articles and long-form content",
		category: "Content",
		variables: ["text", "length", "focus"],
		prompt:
			"Summarize the following text in {{length}} sentences, focusing on aspects related to {{focus}}:\n\n{{text}}",
		lastUsed: "Yesterday",
	},
	{
		name: "Product Description Generator",
		description: "Create compelling product descriptions",
		category: "Marketing",
		variables: ["product_name", "features", "target_audience"],
		prompt:
			"Write a compelling product description for {{product_name}} that highlights these features: {{features}}. The target audience is {{target_audience}}. Make it persuasive and engaging.",
		lastUsed: "1 week ago",
	},
]

export default function Templates() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{templates.map((template, index) => (
				<Card key={index} className="flex flex-col border shadow-none hover:shadow-md transition">
					<CardHeader className="pb-2">
						<div className="flex items-start justify-between">
							<div>
								<CardTitle className="text-base font-semibold">{template.name}</CardTitle>
								<p className="text-xs text-muted-foreground mt-1">{template.description}</p>
							</div>
							<Badge variant="outline" className="text-xs">{template.category}</Badge>
						</div>
					</CardHeader>
					<CardContent className="flex-1 space-y-3 text-sm">
						<div>
							<Label className="text-xs text-muted-foreground">Variables</Label>
							<div className="flex flex-wrap gap-1 mt-1">
								{template.variables.map((variable) => (
									<Badge key={variable} variant="secondary" className="text-xs">
										{variable}
									</Badge>
								))}
							</div>
						</div>
						<div>
							<Label className="text-xs text-muted-foreground">Prompt</Label>
							<div className="mt-1 rounded-md bg-muted/60 p-2 border text-xs max-h-28 overflow-y-auto">
								{template.prompt}
							</div>
						</div>
						<p className="text-xs text-muted-foreground italic">Last used: {template.lastUsed}</p>
					</CardContent>
					<CardFooter className="flex justify-between border-t pt-3">
						<div className="flex gap-2">
							<Button variant="outline" size="sm">
								<Edit className="mr-1 h-3 w-3" /> Edit
							</Button>
							<Button variant="outline" size="sm">
								<Copy className="mr-1 h-3 w-3" /> Copy
							</Button>
						</div>
						<Button
							variant="ghost"
							size="sm"
							className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950"
						>
							<Trash className="h-3 w-3" />
						</Button>
					</CardFooter>
				</Card>
			))}

			{/* Create New Template Card */}
			<Card className="flex flex-col items-center justify-center p-6 border-dashed hover:border-primary/60 transition">
				<Plus className="h-10 w-10 text-muted-foreground mb-3" />
				<h3 className="text-base font-medium">Create New Template</h3>
				<p className="text-xs text-muted-foreground text-center mt-1 mb-4">
					Design reusable prompts with variables
				</p>
				<Button>
					<Plus className="mr-2 h-4 w-4" /> New Template
				</Button>
			</Card>
		</div>
	)
}
