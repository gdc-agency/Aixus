"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Copy, Play, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Tester() {
	const [prompt, setPrompt] = useState("")
	const [response, setResponse] = useState("")
	const [isGenerating, setIsGenerating] = useState(false)
	const [selectedTemplate, setSelectedTemplate] = useState(null)

	const templates = [
		{
			id: "1",
			name: "Customer Support Response",
			prompt:
				"You are a helpful customer support agent. Respond to {{customer_name}}'s inquiry about {{issue}} with their {{product}}. Be empathetic, clear, and solution-oriented.",
			variables: ["customer_name", "issue", "product"],
		},
		{
			id: "2",
			name: "Content Summarizer",
			prompt:
				"Summarize the following text in {{length}} sentences, focusing on aspects related to {{focus}}:\n\n{{text}}",
			variables: ["length", "focus", "text"],
		},
		{
			id: "3",
			name: "Product Description Generator",
			prompt:
				"Write a compelling product description for {{product_name}} that highlights these features: {{features}}. The target audience is {{target_audience}}. Make it persuasive and engaging.",
			variables: ["product_name", "features", "target_audience"],
		},
	]

	const handleTemplateSelect = (id:any) => {
		const template = templates.find((t) => t.id === id)
		if (template) {
			setSelectedTemplate(id)
			setPrompt(template.prompt)
		}
	}

	const handleGenerate = () => {
		if (!prompt.trim()) return

		setIsGenerating(true)
		setResponse("")

		// Simulate AI response with a typing effect
		const fullResponse =
			"Based on your prompt, here's my analysis:\n\nThis prompt is well-structured and clear in its instructions. It provides specific guidance on the tone (empathetic, clear, solution-oriented) and purpose (customer support response).\n\nStrengths:\n- Clear variables that can be easily replaced\n- Specific instructions on tone and approach\n- Focused on a single, well-defined task\n\nPotential improvements:\n- Consider adding a variable for specific solutions to recommend\n- You might want to include guidance on response length\n- Could benefit from examples of good/bad responses\n\nOverall effectiveness score: 8/10"
		let currentIndex = 0

		const typingInterval = setInterval(() => {
			if (currentIndex < fullResponse.length) {
				setResponse((prev) => prev + fullResponse[currentIndex])
				currentIndex++
			} else {
				clearInterval(typingInterval)
				setIsGenerating(false)
			}
		}, 10)
	}

	return (
		<div className="grid gap-6 md:grid-cols-3">
			<div className="md:col-span-2 space-y-4">
				<Card>
					<CardHeader className="pb-3">
						<CardTitle>Prompt</CardTitle>
					</CardHeader>
					<CardContent>
						<Textarea
							placeholder="Enter your prompt here..."
							className="min-h-[200px]"
							value={prompt}
							onChange={(e) => setPrompt(e.target.value)}
						/>
					</CardContent>
					<CardFooter className="flex justify-between">
						<div className="text-xs text-muted-foreground">{prompt.length} characters</div>
						<Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()}>
							{isGenerating ? (
								<>
									<Sparkles className="mr-2 h-4 w-4 animate-spin" />
									Analyzing...
								</>
							) : (
								<>
									<Play className="mr-2 h-4 w-4" />
									Analyze Prompt
								</>
							)}
						</Button>
					</CardFooter>
				</Card>

				<Card>
					<CardHeader className="pb-3">
						<CardTitle>Analysis</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="relative min-h-[250px] rounded-md border bg-muted p-4">
							{response ? (
								<pre className="text-sm whitespace-pre-wrap font-sans">{response}</pre>
							) : (
								<div className="flex h-full flex-col items-center justify-center text-center">
									<Bot className="h-10 w-10 text-muted-foreground mb-4" />
									<h3 className="text-lg font-medium">No analysis yet</h3>
									<p className="text-sm text-muted-foreground mt-1 max-w-md">
										Enter a prompt and click "Analyze Prompt" to get AI feedback on its effectiveness.
									</p>
								</div>
							)}
						</div>
					</CardContent>
					<CardFooter className="flex justify-end">
						<Button variant="outline" disabled={!response}>
							<Copy className="mr-2 h-4 w-4" />
							Copy Analysis
						</Button>
					</CardFooter>
				</Card>
			</div>

			<div className="space-y-4">
				<Card>
					<CardHeader>
						<CardTitle>Template Library</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<Tabs defaultValue="all">
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="all">All</TabsTrigger>
								<TabsTrigger value="recent">Recent</TabsTrigger>
								<TabsTrigger value="popular">Popular</TabsTrigger>
							</TabsList>
							<TabsContent value="all" className="space-y-2 pt-2">
								{templates.map((template) => (
									<Button
										key={template.id}
										variant={selectedTemplate === template.id ? "default" : "outline"}
										className="w-full justify-start text-left h-auto py-2"
										size="sm"
										onClick={() => handleTemplateSelect(template.id)}
									>
										<div className="flex flex-col items-start">
											<span className="font-medium">{template.name}</span>
											<span className="text-xs text-muted-foreground mt-1 truncate max-w-full">
												{template.prompt.substring(0, 50)}...
											</span>
										</div>
									</Button>
								))}
							</TabsContent>
							<TabsContent value="recent" className="space-y-2 pt-2">
								{templates.slice(0, 3).map((template) => (
									<Button
										key={template.id}
										variant={selectedTemplate === template.id ? "default" : "outline"}
										className="w-full justify-start text-left h-auto py-2"
										size="sm"
										onClick={() => handleTemplateSelect(template.id)}
									>
										<div className="flex flex-col items-start">
											<span className="font-medium">{template.name}</span>
											<span className="text-xs text-muted-foreground mt-1 truncate max-w-full">
												{template.prompt.substring(0, 50)}...
											</span>
										</div>
									</Button>
								))}
							</TabsContent>
							<TabsContent value="popular" className="space-y-2 pt-2">
								{templates.slice(1, 4).map((template) => (
									<Button
										key={template.id}
										variant={selectedTemplate === template.id ? "default" : "outline"}
										className="w-full justify-start text-left h-auto py-2"
										size="sm"
										onClick={() => handleTemplateSelect(template.id)}
									>
										<div className="flex flex-col items-start">
											<span className="font-medium">{template.name}</span>
											<span className="text-xs text-muted-foreground mt-1 truncate max-w-full">
												{template.prompt.substring(0, 50)}...
											</span>
										</div>
									</Button>
								))}
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Prompt Best Practices</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Be Specific and Clear</h3>
							<p className="text-xs text-muted-foreground">
								Clearly state what you want the AI to do. Avoid ambiguity and provide specific instructions.
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Use Variables for Flexibility</h3>
							<p className="text-xs text-muted-foreground">
								Include variables like {`{{variable}}`} to make your prompts reusable across different contexts.
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Provide Context</h3>
							<p className="text-xs text-muted-foreground">
								Give the AI relevant background information to generate more accurate and useful responses.
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Specify Format and Length</h3>
							<p className="text-xs text-muted-foreground">
								Indicate the desired format (bullet points, paragraphs) and approximate length of the response.
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-sm font-medium">Test and Iterate</h3>
							<p className="text-xs text-muted-foreground">
								Continuously refine your prompts based on the responses you receive to improve results.
							</p>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
