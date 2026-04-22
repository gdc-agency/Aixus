import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function AgentConfiguration() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Agent Configuration</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="agent-name">Agent Name</Label>
					<Input id="agent-name" placeholder="Customer Support Assistant" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="agent-description">Description</Label>
					<Textarea
						id="agent-description"
						placeholder="An AI agent that helps customers with product inquiries and troubleshooting"
						rows={3}
					/>
				</div>
				<div className="grid gap-4 md:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="base-model">Base Model</Label>
						<Select defaultValue="gpt-4o">
							<SelectTrigger id="base-model">
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
						<Label htmlFor="agent-type">Agent Type</Label>
						<Select defaultValue="conversational">
							<SelectTrigger id="agent-type">
								<SelectValue placeholder="Select type" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="conversational">Conversational</SelectItem>
								<SelectItem value="task">Task-oriented</SelectItem>
								<SelectItem value="autonomous">Autonomous</SelectItem>
								<SelectItem value="custom">Custom</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="system-prompt">System Prompt</Label>
					<Textarea
						id="system-prompt"
						placeholder="You are a helpful customer support assistant for Acme Inc. You help customers with product inquiries, troubleshooting, and general questions about our services."
						rows={5}
					/>
					<p className="text-xs text-muted-foreground">
						Define the core instructions and personality of your agent.
					</p>
				</div>
			</CardContent>
		</Card>
	)
}