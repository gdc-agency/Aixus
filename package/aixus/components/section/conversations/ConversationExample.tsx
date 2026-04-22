import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, User } from "lucide-react"

const messages = [
	{
		role: "user",
		content: "Can you help me optimize my AI model's performance? It's running slowly on production.",
	},
	{
		role: "assistant",
		content:
			"I'd be happy to help with that. There are several ways to optimize AI model performance. Could you tell me more about your model architecture, the hardware you're running on, and any specific performance bottlenecks you've identified?",
	},
	{
		role: "user",
		content:
			"It's a large language model running on a GPU server. The inference time is too high for our real-time application needs.",
	},
	{
		role: "assistant",
		content:
			"For reducing inference time on LLMs, consider these approaches:\n\n1. Model quantization (8-bit or 4-bit precision)\n2. Knowledge distillation to a smaller model\n3. Caching frequent responses\n4. Optimizing prompt length\n5. Using faster inference engines like vLLM or TensorRT\n\nWhich of these would you like to explore first?",
	},
]

export default function ConversationExample() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Conversation Example</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{messages.map((message, index) => {
					const isAssistant = message.role === "assistant"
					return (
						<div
							key={index}
							className={`flex items-start gap-3 ${isAssistant ? "justify-start" : "justify-end"}`}
						>
							{/* Assistant Avatar */}
							{isAssistant && (
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-none">
									<Bot className="h-4 w-4" />
								</div>
							)}

							{/* Message Bubble */}
							<div
								className={`rounded-xl px-4 py-2 max-w-[75%] break-words whitespace-pre-line
                ${isAssistant ? "bg-muted text-gray-900 dark:text-gray-100" : "bg-primary text-primary-foreground"}
                shadow-none`}
							>
								<p className="text-sm leading-relaxed">{message.content}</p>
							</div>

							{/* User Avatar on right */}
							{!isAssistant && (
								<div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted shadow-none">
									<User className="h-4 w-4" />
								</div>
							)}
						</div>
					)
				})}
			</CardContent>
		</Card>
	)
}
