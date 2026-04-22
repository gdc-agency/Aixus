import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Save } from "lucide-react"

export default function AppearanceSettings() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Appearance</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="theme">Theme</Label>
					<Select defaultValue="system">
						<SelectTrigger id="theme">
							<SelectValue placeholder="Select theme" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="light">Light</SelectItem>
							<SelectItem value="dark">Dark</SelectItem>
							<SelectItem value="system">System</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="density">Density</Label>
					<Select defaultValue="default">
						<SelectTrigger id="density">
							<SelectValue placeholder="Select density" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="compact">Compact</SelectItem>
							<SelectItem value="default">Default</SelectItem>
							<SelectItem value="comfortable">Comfortable</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center justify-between">
					<Label htmlFor="animations">Animations</Label>
					<Switch id="animations" defaultChecked />
				</div>
				<Button>
					<Save className="mr-2 h-4 w-4" /> Save Changes
				</Button>
			</CardContent>
		</Card>
	)
}