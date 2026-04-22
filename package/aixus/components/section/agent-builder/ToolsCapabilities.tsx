import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Bot, Code, Database, GitBranch, Plus } from "lucide-react"

export default function ToolsCapabilities() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Tools & Capabilities</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-center justify-between rounded-lg border p-4">
					<div className="flex items-center gap-3">
						<Database className="h-5 w-5 text-primary" />
						<div>
							<h3 className="font-medium">Knowledge Base</h3>
							<p className="text-sm text-muted-foreground">Access to product documentation and FAQs</p>
						</div>
					</div>
					<Switch defaultChecked />
				</div>

				<div className="flex items-center justify-between rounded-lg border p-4">
					<div className="flex items-center gap-3">
						<Code className="h-5 w-5 text-primary" />
						<div>
							<h3 className="font-medium">Code Execution</h3>
							<p className="text-sm text-muted-foreground">Run code snippets and return results</p>
						</div>
					</div>
					<Switch />
				</div>

				<div className="flex items-center justify-between rounded-lg border p-4">
					<div className="flex items-center gap-3">
						<GitBranch className="h-5 w-5 text-primary" />
						<div>
							<h3 className="font-medium">API Integration</h3>
							<p className="text-sm text-muted-foreground">Connect to external APIs and services</p>
						</div>
					</div>
					<Switch defaultChecked />
				</div>

				<div className="flex items-center justify-between rounded-lg border p-4">
					<div className="flex items-center gap-3">
						<Bot className="h-5 w-5 text-primary" />
						<div>
							<h3 className="font-medium">Multi-agent Collaboration</h3>
							<p className="text-sm text-muted-foreground">Work with other agents to solve complex tasks</p>
						</div>
					</div>
					<Switch />
				</div>

				<Button variant="outline" className="w-full">
					<Plus className="mr-2 h-4 w-4" />
					Add Custom Tool
				</Button>
			</CardContent>
		</Card>
	)
}