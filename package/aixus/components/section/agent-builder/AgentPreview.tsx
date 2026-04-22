import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot } from "lucide-react"

export default function AgentPreview() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Agent Preview</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="rounded-lg border p-4 bg-muted flex flex-col items-center justify-center min-h-[200px]">
					<Bot className="h-16 w-16 text-primary mb-4" />
					<h3 className="font-medium text-center">Customer Support Assistant</h3>
					<p className="text-sm text-muted-foreground text-center mt-2">
						Powered by GPT-4o with Knowledge Base access
					</p>
					<div className="flex gap-2 mt-4">
						<Badge>Conversational</Badge>
						<Badge variant="outline">API Integration</Badge>
					</div>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-medium">Capabilities</h3>
					<ul className="space-y-2 text-sm">
						<li className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-green-500"></span>
							<span>Answer product questions</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-green-500"></span>
							<span>Troubleshoot common issues</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-green-500"></span>
							<span>Access knowledge base</span>
						</li>
						<li className="flex items-center gap-2">
							<span className="h-2 w-2 rounded-full bg-green-500"></span>
							<span>Call external APIs</span>
						</li>
					</ul>
				</div>
			</CardContent>
		</Card>
	)
}