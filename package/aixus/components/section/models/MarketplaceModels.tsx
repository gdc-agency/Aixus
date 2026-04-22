"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Download } from "lucide-react"

const marketplaceModels = [
	{
		name: "GPT-4o",
		provider: "OpenAI",
		description: "Advanced text and image understanding with improved reasoning.",
		price: "$0.01 / 1K tokens",
		popular: true,
	},
	{
		name: "Claude 3 Opus",
		provider: "Anthropic",
		description: "State-of-the-art reasoning and thoughtful dialogue.",
		price: "$0.015 / 1K tokens",
		popular: true,
	},
	{
		name: "Llama 3 70B",
		provider: "Meta",
		description: "Open-source large language model with strong capabilities.",
		price: "$0.008 / 1K tokens",
		popular: false,
	},
	{
		name: "Mistral Large",
		provider: "Mistral AI",
		description: "Efficient language model with strong reasoning abilities.",
		price: "$0.007 / 1K tokens",
		popular: false,
	},
	{
		name: "Gemini Pro",
		provider: "Google",
		description: "Multimodal model with strong reasoning capabilities.",
		price: "$0.0125 / 1K tokens",
		popular: true,
	},
	{
		name: "Stable Diffusion XL",
		provider: "Stability AI",
		description: "Advanced image generation model.",
		price: "$0.02 / image",
		popular: false,
	},
]

export default function MarketplaceModels() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{marketplaceModels.map((model) => (
				<Card
					key={model.name}
					className="flex flex-col justify-between"
				>
					<div className="flex flex-col gap-2 px-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary">
									<Bot className="w-5 h-5" />
								</div>
								<div className="flex flex-col">
									<CardTitle className="text-base font-semibold text-gray-900 dark:text-white">
										{model.name}
									</CardTitle>
									<span className="text-xs text-muted-foreground">{model.provider}</span>
								</div>
							</div>
							{model.popular && (
								<Badge
									variant="destructive"
									className="text-xs px-3 py-1 rounded-full"
								>
									Popular
								</Badge>
							)}
						</div>
					</div>

					<CardContent className="flex flex-col flex-1 justify-between mt-2">
						<p className="text-sm text-muted-foreground mb-6">{model.description}</p>

						<div className="flex items-center justify-between mt-auto">
							<span className="text-sm font-semibold text-gray-900 dark:text-white">
								{model.price}
							</span>
							<Button
								variant="outline"
								size="sm"
								className="flex items-center gap-2 px-3 py-1.5 hover:bg-primary/10"
							>
								<Download className="w-4 h-4" /> Add
							</Button>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	)
}
