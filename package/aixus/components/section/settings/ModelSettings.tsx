import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Save } from "lucide-react"

export default function ModelSettings() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Model Settings</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-4">
					<h3 className="text-sm font-medium">Default Models</h3>
					<div className="space-y-2">
						<Label htmlFor="text-generation">Text Generation</Label>
						<Select defaultValue="gpt-4o">
							<SelectTrigger id="text-generation">
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
						<Label htmlFor="image-generation">Image Generation</Label>
						<Select defaultValue="dalle-3">
							<SelectTrigger id="image-generation">
								<SelectValue placeholder="Select model" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="dalle-3">DALL-E 3</SelectItem>
								<SelectItem value="midjourney">Midjourney</SelectItem>
								<SelectItem value="stable-diffusion">Stable Diffusion XL</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<Label htmlFor="embeddings">Embeddings</Label>
						<Select defaultValue="text-embedding-3">
							<SelectTrigger id="embeddings">
								<SelectValue placeholder="Select model" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="text-embedding-3">Text Embedding 3</SelectItem>
								<SelectItem value="cohere-embed">Cohere Embed</SelectItem>
								<SelectItem value="jina-embed">Jina Embed</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="space-y-4">
					<h3 className="text-sm font-medium">Model Parameters</h3>
					<div className="space-y-2">
						<Label htmlFor="temperature">Temperature</Label>
						<div className="flex items-center gap-4">
							<Input
								id="temperature"
								type="range"
								min="0"
								max="2"
								step="0.1"
								defaultValue="0.7"
								className="w-full"
							/>
							<span className="w-12 text-center">0.7</span>
						</div>
						<p className="text-xs text-muted-foreground">
							Controls randomness: Lower values are more deterministic, higher values are more creative.
						</p>
					</div>
					<div className="space-y-2">
						<Label htmlFor="max-tokens">Max Tokens</Label>
						<Input id="max-tokens" type="number" defaultValue="2048" />
						<p className="text-xs text-muted-foreground">Maximum number of tokens to generate in the response.</p>
					</div>
					<div className="space-y-2">
						<Label htmlFor="system-prompt">Default System Prompt</Label>
						<Textarea
							id="system-prompt"
							rows={4}
							defaultValue="You are a helpful AI assistant that provides accurate and concise information."
						/>
						<p className="text-xs text-muted-foreground">
							System prompt that defines the AI's behavior and capabilities.
						</p>
					</div>
				</div>
				<Button>
					<Save className="mr-2 h-4 w-4" /> Save Changes
				</Button>
			</CardContent>
		</Card>
	)
}