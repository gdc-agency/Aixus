"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import ComparisonAnalysis from "./ComparisonAnalysis"
import PromptInput from "./PromptInput"

interface ModelResponse {
	model: string
	response: string
	responseTime: string
	tokenCount: number
	isGenerating: boolean
}

interface ResponseData {
	model: string
	fullResponse: string
	responseTime: string
	tokenCount: number
}

export default function ModelComparison() {
	const [prompt, setPrompt] = useState<string>("")
	const [isComparing, setIsComparing] = useState<boolean>(false)
	const [modelResponses, setModelResponses] = useState<ModelResponse[]>([
		{ model: "GPT-4o", response: "", responseTime: "", tokenCount: 0, isGenerating: false },
		{ model: "Claude 3", response: "", responseTime: "", tokenCount: 0, isGenerating: false },
		{ model: "Llama 3", response: "", responseTime: "", tokenCount: 0, isGenerating: false },
	])

	const handleCompare = () => {
		if (!prompt.trim() || isComparing) return
		setIsComparing(true)

		// reset models before simulation
		setModelResponses((prev) =>
			prev.map((m) => ({ ...m, response: "", isGenerating: true, responseTime: "", tokenCount: 0 }))
		)

		const responses: ResponseData[] = [
			{
				model: "GPT-4o",
				fullResponse:
					"AI models are computational systems designed to perform tasks that typically require human intelligence. These models are trained on vast amounts of data and can recognize patterns, make predictions, and generate content.\n\nThe field has seen remarkable progress in recent years, particularly with large language models like GPT-4, which can understand and generate human language with impressive capabilities.",
				responseTime: "1.2s",
				tokenCount: 78,
			},
			{
				model: "Claude 3",
				fullResponse:
					"Artificial Intelligence models are computational frameworks that simulate aspects of human cognition. They process input data through mathematical operations to produce outputs that solve specific problems or tasks.\n\nModern AI models, particularly large language models, are trained on diverse datasets to recognize patterns and generate responses that appear human-like in their reasoning and communication.",
				responseTime: "1.5s",
				tokenCount: 82,
			},
			{
				model: "Llama 3",
				fullResponse:
					"AI models are computational systems that learn patterns from data to perform specific tasks. They range from simple statistical models to complex neural networks.\n\nThese models work by processing input through layers of mathematical operations, with parameters adjusted during training to minimize errors. The recent advances in transformer-based architectures have significantly improved capabilities in language understanding and generation.",
				responseTime: "1.8s",
				tokenCount: 75,
			},
		]

		// simulate typing effect
		responses.forEach((modelData, index) => {
			let currentIndex = 0
			setTimeout(() => {
				const typingInterval = setInterval(() => {
					if (currentIndex < modelData.fullResponse.length) {
						setModelResponses((prev) =>
							prev.map((m, i) =>
								i === index ? { ...m, response: modelData.fullResponse.slice(0, currentIndex + 1) } : m
							)
						)
						currentIndex++
					} else {
						clearInterval(typingInterval)
						setModelResponses((prev) =>
							prev.map((m, i) =>
								i === index
									? {
										...m,
										isGenerating: false,
										responseTime: modelData.responseTime,
										tokenCount: modelData.tokenCount,
									}
									: m
							)
						)

						// check if all are done
						if (index === responses.length - 1) setIsComparing(false)
					}
				}, 15)
			}, 500 + index * 300)
		})
	}

	return (
		<div className="space-y-6">
			{/* Input Section */}
			<PromptInput
				prompt={prompt}
				setPrompt={setPrompt}
				isComparing={isComparing}
				handleCompare={handleCompare}
			/>

			{/* Model Responses */}
			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{modelResponses.map((m, i) => (
					<Card key={i} className="flex flex-col">
						<CardHeader className="flex flex-row items-center justify-between">
							<CardTitle className="text-base font-semibold">{m.model}</CardTitle>
							{m.isGenerating ? (
								<Badge variant="secondary" className="flex items-center gap-1">
									<Loader2 className="h-3 w-3 animate-spin" /> Generating
								</Badge>
							) : (
								<Badge variant="outline">Done</Badge>
							)}
						</CardHeader>
						<CardContent className="flex-1 space-y-2 text-sm">
							<div className="rounded-md border bg-muted/50 p-3 h-40 overflow-auto whitespace-pre-line">
								{m.response || (
									<span className="text-muted-foreground italic">Waiting for response…</span>
								)}
							</div>
							<div className="flex justify-between text-xs text-muted-foreground">
								<span>Time: {m.responseTime || "--"}</span>
								<span>Tokens: {m.tokenCount || "--"}</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			{/* Analysis Section */}
			<ComparisonAnalysis modelResponses={modelResponses} />
		</div>
	)
}