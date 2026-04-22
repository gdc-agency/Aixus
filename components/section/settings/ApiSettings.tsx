import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

export default function ApiSettings() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>API Settings</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-4">
					<h3 className="text-sm font-medium">API Keys</h3>
					<div className="space-y-2">
						<Label htmlFor="openai-key">OpenAI API Key</Label>
						<div className="flex gap-2">
							<Input id="openai-key" type="password" value="••••••••••••••••••••••••••••••" readOnly />
							<Button variant="outline">Reveal</Button>
							<Button variant="outline">Regenerate</Button>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="anthropic-key">Anthropic API Key</Label>
						<div className="flex gap-2">
							<Input id="anthropic-key" type="password" value="••••••••••••••••••••••••••••••" readOnly />
							<Button variant="outline">Reveal</Button>
							<Button variant="outline">Regenerate</Button>
						</div>
					</div>
					<div className="space-y-2">
						<Label htmlFor="huggingface-key">Hugging Face API Key</Label>
						<div className="flex gap-2">
							<Input id="huggingface-key" type="password" value="••••••••••••••••••••••••••••••" readOnly />
							<Button variant="outline">Reveal</Button>
							<Button variant="outline">Regenerate</Button>
						</div>
					</div>
				</div>
				<div className="space-y-4">
					<h3 className="text-sm font-medium">Webhooks</h3>
					<div className="space-y-2">
						<Label htmlFor="webhook-url">Webhook URL</Label>
						<Input id="webhook-url" placeholder="https://example.com/webhook" />
					</div>
					<div className="space-y-2">
						<Label>Events</Label>
						<div className="grid gap-2">
							<div className="flex items-center space-x-2">
								<Switch id="model-deployed" />
								<Label htmlFor="model-deployed">Model Deployed</Label>
							</div>
							<div className="flex items-center space-x-2">
								<Switch id="usage-limit" />
								<Label htmlFor="usage-limit">Usage Limit Reached</Label>
							</div>
							<div className="flex items-center space-x-2">
								<Switch id="error-rate" />
								<Label htmlFor="error-rate">Error Rate Threshold</Label>
							</div>
						</div>
					</div>
				</div>
				<Button>
					<Save className="mr-2 h-4 w-4" /> Save Changes
				</Button>
			</CardContent>
		</Card>
	)
}