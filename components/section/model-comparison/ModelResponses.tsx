import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Copy, Sparkles } from "lucide-react"

interface ModelResponse {
	model: string
	response: string
	responseTime: string
	tokenCount: number
	isGenerating: boolean
}

interface ModelResponsesProps {
	modelResponses: ModelResponse[]
}

export default function ModelResponses({ modelResponses }: ModelResponsesProps) {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{modelResponses.map((model, index) => (
				<Card key={index} className="flex flex-col">
					<CardHeader className="pb-3">
						<div className="flex items-center justify-between">
							<CardTitle>{model.model}</CardTitle>
							{model.isGenerating ? (
								<Badge variant="outline" className="flex items-center gap-1">
									<Sparkles className="h-3 w-3 animate-spin" />
									Generating
								</Badge>
							) : (
								model.response && <Badge variant="outline">Completed</Badge>
							)}
						</div>
					</CardHeader>
					<CardContent className="flex-1">
						<div className="relative min-h-[250px] rounded-md border bg-muted p-4">
							{model.response ? (
								<pre className="text-sm whitespace-pre-wrap font-sans">{model.response}</pre>
							) : model.isGenerating ? (
								<div className="flex space-x-1 justify-center items-center h-full">
									<div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]"></div>
									<div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]"></div>
									<div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
								</div>
							) : (
								<div className="flex h-full flex-col items-center justify-center text-center">
									<Bot className="h-10 w-10 text-muted-foreground mb-4" />
									<h3 className="text-lg font-medium">No response yet</h3>
									<p className="text-sm text-muted-foreground mt-1 max-w-md">
										Enter a prompt and click "Compare Models" to see how this model responds.
									</p>
								</div>
							)}
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						{model.response && (
							<>
								<div className="text-xs text-muted-foreground">
									{model.responseTime} • {model.tokenCount} tokens
								</div>
								<Button variant="outline" size="sm">
									<Copy className="mr-2 h-3 w-3" />
									Copy
								</Button>
							</>
						)}
					</CardFooter>
				</Card>
			))}
		</div>
	)
}