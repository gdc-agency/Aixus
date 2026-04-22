"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Bot, ChevronRight, Copy, Download, MoreHorizontal, Send, Settings, User } from "lucide-react"
import { KeyboardEvent, useEffect, useRef, useState } from "react"

interface Message {
	role: "system" | "user" | "assistant"
	content: string
	timestamp: Date
}

interface SavedChat {
	title: string
	date: string
}

interface PromptTemplate {
	text: string
}

export default function ChatTab() {
	const [messages, setMessages] = useState<Message[]>([
		{
			role: "system",
			content: "You are a helpful AI assistant that provides accurate and concise information.",
			timestamp: new Date(),
		},
		{
			role: "assistant",
			content: "Hello! I'm your AI assistant. How can I help you today?",
			timestamp: new Date(),
		},
	])
	const [input, setInput] = useState<string>("")
	const [isTyping, setIsTyping] = useState<boolean>(false)
	const messagesEndRef = useRef<HTMLDivElement>(null)

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	}, [messages])

	const handleSend = () => {
		if (!input.trim()) return

		// Add user message
		const userMessage: Message = {
			role: "user",
			content: input,
			timestamp: new Date(),
		}
		setMessages((prev) => [...prev, userMessage])
		setInput("")
		setIsTyping(true)

		// Simulate AI response
		setTimeout(() => {
			const responses = [
				"I understand your question about AI models. Large Language Models (LLMs) like me are trained on vast datasets of text to predict the next word in a sequence, which enables us to generate coherent and contextually relevant responses.",
				"That's an interesting point about machine learning. The field has evolved significantly in recent years, with deep learning approaches becoming particularly dominant due to their ability to automatically learn hierarchical representations from data.",
				"Regarding your question about prompt engineering, it's indeed a crucial skill when working with AI models. Effective prompts provide clear instructions, relevant context, and appropriate constraints to guide the model toward generating the desired output.",
				"You're asking about the differences between various AI models. Models like GPT-4, Claude, and Llama each have their own architectures, training methodologies, and specialized capabilities, though they all fall under the umbrella of transformer-based language models.",
				"On the topic of AI ethics, it's important to consider issues like bias, transparency, privacy, and the societal impacts of AI systems. Responsible AI development requires ongoing attention to these concerns throughout the design and deployment process.",
			]

			const randomResponse = responses[Math.floor(Math.random() * responses.length)]

			const assistantMessage: Message = {
				role: "assistant",
				content: randomResponse,
				timestamp: new Date(),
			}
			setMessages((prev) => [...prev, assistantMessage])
			setIsTyping(false)
		}, 1500)
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault()
			handleSend()
		}
	}

	return (
		<div className="grid gap-6 md:grid-cols-4">
			<Card className="md:col-span-3 flex flex-col h-[calc(100vh-15rem)]">
				<CardHeader className="pb-3">
					<div className="flex items-center justify-between">
						<CardTitle>Chat with AI</CardTitle>
						<div className="flex items-center gap-2">
							<Button variant="outline" size="sm">
								<Download className="h-4 w-4 mr-2" />
								Export
							</Button>
							<Sheet>
								<SheetTrigger asChild>
									<Button variant="outline" size="sm">
										<Settings className="h-4 w-4 mr-2" />
										Settings
									</Button>
								</SheetTrigger>
								<SheetContent>
									<SheetHeader>
										<SheetTitle>Chat Settings</SheetTitle>
										<SheetDescription>Configure your chat experience</SheetDescription>
									</SheetHeader>
									<div className="space-y-6 py-4">
										<div className="space-y-2">
											<Label htmlFor="chat-model">Model</Label>
											<Select defaultValue="gpt-4o">
												<SelectTrigger id="chat-model">
													<SelectValue placeholder="Select model" />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value="gpt-4o">GPT-4o</SelectItem>
													<SelectItem value="claude-3">Claude 3 Opus</SelectItem>
													<SelectItem value="llama-3">Llama 3 70B</SelectItem>
													<SelectItem value="mistral">Mistral Large</SelectItem>
												</SelectContent>
											</Select>
										</div>

										<div className="space-y-2">
											<Label htmlFor="system-prompt">System Prompt</Label>
											<Textarea
												id="system-prompt"
												defaultValue="You are a helpful AI assistant that provides accurate and concise information."
												rows={4}
											/>
											<p className="text-xs text-muted-foreground">
												This sets the behavior and capabilities of the AI assistant.
											</p>
										</div>

										<Separator />

										<div className="space-y-2">
											<div className="flex items-center justify-between">
												<Label htmlFor="temperature">Temperature: 0.7</Label>
											</div>
											<Slider id="temperature" defaultValue={[0.7]} max={2} step={0.1} className="w-full" />
										</div>

										<div className="space-y-2">
											<div className="flex items-center justify-between">
												<Label htmlFor="max-tokens">Max Tokens: 2048</Label>
											</div>
											<Slider id="max-tokens" defaultValue={[2048]} max={4096} step={128} className="w-full" />
										</div>

										<div className="flex items-center space-x-2">
											<Switch id="memory" defaultChecked />
											<Label htmlFor="memory">Conversation memory</Label>
										</div>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</div>
				</CardHeader>
				<CardContent className="flex-1 overflow-y-auto pr-4">
					<div className="space-y-4">
						{messages
							.filter((msg) => msg.role !== "system")
							.map((message, index) => (
								<div
									key={index}
									className={`flex gap-3 ${message.role === "assistant" ? "justify-start" : "justify-end"}`}
								>
									{message.role === "assistant" && (
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
											<Bot className="h-4 w-4" />
										</div>
									)}
									<div className="flex flex-col gap-1 max-w-[80%]">
										<div
											className={`rounded-lg px-4 py-2 ${message.role === "assistant" ? "bg-muted" : "bg-primary text-primary-foreground"
												}`}
										>
											<p className="text-sm whitespace-pre-line">{message.content}</p>
										</div>
										<div className="flex items-center gap-2">
											<span className="text-xs text-muted-foreground">
												{message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
											</span>
											{message.role === "assistant" && (
												<DropdownMenu>
													<DropdownMenuTrigger asChild>
														<Button variant="ghost" size="icon" className="h-6 w-6">
															<MoreHorizontal className="h-3 w-3" />
															<span className="sr-only">More</span>
														</Button>
													</DropdownMenuTrigger>
													<DropdownMenuContent align="end">
														<DropdownMenuItem>
															<Copy className="mr-2 h-4 w-4" />
															<span>Copy</span>
														</DropdownMenuItem>
														<DropdownMenuItem>
															<span>Regenerate</span>
														</DropdownMenuItem>
													</DropdownMenuContent>
												</DropdownMenu>
											)}
										</div>
									</div>
									{message.role === "user" && (
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
											<User className="h-4 w-4" />
										</div>
									)}
								</div>
							))}
						{isTyping && (
							<div className="flex gap-3 justify-start">
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
									<Bot className="h-4 w-4" />
								</div>
								<div className="rounded-lg px-4 py-2 bg-muted max-w-[80%]">
									<div className="flex space-x-1">
										<div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.3s]"></div>
										<div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce [animation-delay:-0.15s]"></div>
										<div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
									</div>
								</div>
							</div>
						)}
						<div ref={messagesEndRef} />
					</div>
				</CardContent>
				<CardFooter className="pt-3">
					<div className="flex w-full items-center space-x-2">
						<Textarea
							placeholder="Type your message..."
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKeyDown}
							className="min-h-10 flex-1 resize-none"
							rows={1}
						/>
						<Button size="icon" onClick={handleSend} disabled={!input.trim() || isTyping}>
							<Send className="h-4 w-4" />
							<span className="sr-only">Send</span>
						</Button>
					</div>
				</CardFooter>
			</Card>

			<div className="space-y-6">
				<Card>
					<CardHeader>
						<CardTitle>Saved Chats</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2">
						{[
							{ title: "AI Model Comparison", date: "Today, 10:30 AM" },
							{ title: "Prompt Engineering Tips", date: "Yesterday, 2:15 PM" },
							{ title: "ML Pipeline Design", date: "May 10, 2023" },
						].map((chat, index) => (
							<Button key={index} variant="outline" className="w-full justify-between" size="sm">
								<span className="truncate">{chat.title}</span>
								<ChevronRight className="h-4 w-4" />
							</Button>
						))}
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Prompt Templates</CardTitle>
					</CardHeader>
					<CardContent className="space-y-2">
						<Tabs defaultValue="general">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="general">General</TabsTrigger>
								<TabsTrigger value="custom">Custom</TabsTrigger>
							</TabsList>
							<TabsContent value="general" className="space-y-2 pt-2">
								{[
									"Explain [topic] in simple terms",
									"Compare and contrast [A] and [B]",
									"Summarize this text: [text]",
									"Generate code for [task] in [language]",
								].map((prompt, index) => (
									<Button
										key={index}
										variant="outline"
										className="w-full justify-start text-left h-auto py-2"
										size="sm"
										onClick={() => setInput(prompt)}
									>
										<span className="truncate">{prompt}</span>
									</Button>
								))}
							</TabsContent>
							<TabsContent value="custom" className="space-y-2 pt-2">
								{[
									"Analyze sentiment in this text: [text]",
									"Create a data schema for [application]",
									"Debug this code: [code]",
								].map((prompt, index) => (
									<Button
										key={index}
										variant="outline"
										className="w-full justify-start text-left h-auto py-2"
										size="sm"
										onClick={() => setInput(prompt)}
									>
										<span className="truncate">{prompt}</span>
									</Button>
								))}
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}