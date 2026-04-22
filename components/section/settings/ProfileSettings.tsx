import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Save } from "lucide-react"

export default function ProfileSettings() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="first-name">First name</Label>
						<Input id="first-name" defaultValue="John" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="last-name">Last name</Label>
						<Input id="last-name" defaultValue="Doe" />
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input id="email" type="email" defaultValue="john@example.com" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="company">Company</Label>
					<Input id="company" defaultValue="Acme Inc." />
				</div>
				<Button>
					<Save className="mr-2 h-4 w-4" /> Save Changes
				</Button>
			</CardContent>
		</Card>
	)
}