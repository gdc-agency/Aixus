import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"

export default function DeploymentOptions() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Deployment Options</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="deployment-environment">Environment</Label>
					<Select defaultValue="production">
						<SelectTrigger id="deployment-environment">
							<SelectValue placeholder="Select environment" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="development">Development</SelectItem>
							<SelectItem value="staging">Staging</SelectItem>
							<SelectItem value="production">Production</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<Label htmlFor="deployment-method">Deployment Method</Label>
					<Select defaultValue="api">
						<SelectTrigger id="deployment-method">
							<SelectValue placeholder="Select method" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="api">API Endpoint</SelectItem>
							<SelectItem value="widget">Chat Widget</SelectItem>
							<SelectItem value="standalone">Standalone App</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="rate-limiting">Rate Limiting</Label>
						<Switch id="rate-limiting" defaultChecked />
					</div>
					<Input id="rate-limit" type="number" defaultValue="100" />
					<p className="text-xs text-muted-foreground">Maximum requests per minute</p>
				</div>

				<Separator />

				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="monitoring">Enable Monitoring</Label>
						<Switch id="monitoring" defaultChecked />
					</div>
					<p className="text-xs text-muted-foreground">Track performance metrics and usage statistics</p>
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="logging">Enable Logging</Label>
						<Switch id="logging" defaultChecked />
					</div>
					<p className="text-xs text-muted-foreground">Log all conversations for quality assurance</p>
				</div>
			</CardContent>
		</Card>
	)
}