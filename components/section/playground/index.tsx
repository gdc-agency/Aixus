"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Share } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import ChatTab from "./ChatTab"
import CompletionTab from "./CompletionTab"
import ImageGenerationTab from "./ImageGenerationTab"

type TabValue = "chat" | "completion" | "image"

interface CompletionTabProps {
	prompt: string
	setPrompt: Dispatch<SetStateAction<string>>
	response: string
	isGenerating: boolean
	handleGenerate: () => void
}

export default function Playground() {
	const [activeTab, setActiveTab] = useState<TabValue>("chat")
	const [prompt, setPrompt] = useState<string>("")
	const [response, setResponse] = useState<string>("")
	const [isGenerating, setIsGenerating] = useState<boolean>(false)

	const handleGenerate = () => {
		if (!prompt.trim()) return

		setIsGenerating(true)
		setResponse("")

		// Simulate AI response with a typing effect
		const fullResponse =
			"Based on your prompt, here's my response:\n\nAI models are computational systems designed to perform tasks that typically require human intelligence. These models are trained on vast amounts of data and can recognize patterns, make predictions, generate content, and more.\n\nThe field of AI has seen remarkable progress in recent years, particularly with the development of large language models (LLMs) like GPT-4, Claude, and Llama. These models have demonstrated impressive capabilities in understanding and generating human language, reasoning about complex topics, and even showing creative abilities.\n\nHowever, it's important to note that current AI systems have limitations. They don't truly 'understand' information the way humans do, can produce incorrect or biased outputs, and require careful prompt engineering to achieve desired results."
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

	const handleTabChange = (value: string) => {
		// Validate that the value is a valid TabValue
		if (["chat", "completion", "image"].includes(value)) {
			setActiveTab(value as TabValue)
		}
	}

	return (
		<div className="space-y-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-xl font-bold tracking-tight">AI Playground</h1>
					<p className="text-muted-foreground">Test and experiment with AI models in real-time.</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline">
						<Share className="mr-2 h-4 w-4" />
						Share
					</Button>
					<Button variant="outline">
						<Download className="mr-2 h-4 w-4" />
						Export
					</Button>
				</div>
			</div>

			<Tabs defaultValue="chat" value={activeTab} onValueChange={handleTabChange}>
				<TabsList className="grid w-full grid-cols-3">
					<TabsTrigger value="chat">Chat</TabsTrigger>
					<TabsTrigger value="completion">Completion</TabsTrigger>
					<TabsTrigger value="image">Image Generation</TabsTrigger>
				</TabsList>

				<TabsContent value="chat" className="space-y-4">
					<ChatTab />
				</TabsContent>
				<TabsContent value="completion" className="space-y-4">
					<CompletionTab
						prompt={prompt}
						setPrompt={setPrompt}
						response={response}
						isGenerating={isGenerating}
						handleGenerate={handleGenerate}
					/>
				</TabsContent>
				<TabsContent value="image" className="space-y-4">
					<ImageGenerationTab />
				</TabsContent>
			</Tabs>
		</div>
	)
}