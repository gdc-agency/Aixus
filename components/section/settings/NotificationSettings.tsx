import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

export default function NotificationSettings() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Notification Preferences</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-4">
					<h3 className="text-sm font-medium">Email Notifications</h3>
					<div className="grid gap-2">
						<div className="flex items-center justify-between">
							<Label htmlFor="usage-alerts">Usage Alerts</Label>
							<Switch id="usage-alerts" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<Label htmlFor="model-deployments">Model Deployments</Label>
							<Switch id="model-deployments" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<Label htmlFor="billing-updates">Billing Updates</Label>
							<Switch id="billing-updates" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<Label htmlFor="team-activity">Team Activity</Label>
							<Switch id="team-activity" />
						</div>
					</div>
				</div>
				<div className="space-y-4">
					<h3 className="text-sm font-medium">In-App Notifications</h3>
					<div className="grid gap-2">
						<div className="flex items-center justify-between">
							<Label htmlFor="error-alerts">Error Alerts</Label>
							<Switch id="error-alerts" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<Label htmlFor="performance-issues">Performance Issues</Label>
							<Switch id="performance-issues" defaultChecked />
						</div>
						<div className="flex items-center justify-between">
							<Label htmlFor="new-features">New Features</Label>
							<Switch id="new-features" defaultChecked />
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="notification-frequency">Notification Frequency</Label>
					<Select defaultValue="realtime">
						<SelectTrigger id="notification-frequency">
							<SelectValue placeholder="Select frequency" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="realtime">Real-time</SelectItem>
							<SelectItem value="hourly">Hourly Digest</SelectItem>
							<SelectItem value="daily">Daily Digest</SelectItem>
							<SelectItem value="weekly">Weekly Digest</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<Button>
					<Save className="mr-2 h-4 w-4" /> Save Changes
				</Button>
			</CardContent>
		</Card>
	)
}