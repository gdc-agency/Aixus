import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, History, Key, Plus, Rocket, Settings, Users } from "lucide-react"
import { ReactNode } from "react"

interface Action {
	label: string
	icon: ReactNode
	variant: "default" | "outline"
}

export default function QuickActions() {
	const actions: Action[] = [
		{ label: "New Experiment", icon: <Plus className="mr-2 h-4 w-4" />, variant: "default" },
		{ label: "Deploy Model", icon: <Rocket className="mr-2 h-4 w-4" />, variant: "outline" },
		{ label: "Manage Settings", icon: <Settings className="mr-2 h-4 w-4" />, variant: "outline" },
		{ label: "View Reports", icon: <BarChart className="mr-2 h-4 w-4" />, variant: "outline" },
		{ label: "Team Access", icon: <Users className="mr-2 h-4 w-4" />, variant: "outline" },
		{ label: "Activity Logs", icon: <History className="mr-2 h-4 w-4" />, variant: "outline" },
		{ label: "API Keys", icon: <Key className="mr-2 h-4 w-4" />, variant: "outline" },
		// { label: "Support Center", icon: <LifeBuoy className="mr-2 h-4 w-4" />, variant: "outline" },
		// { label: "System Status", icon: <Server className="mr-2 h-4 w-4" />, variant: "outline" },
	]

	return (
		<Card>
			<CardHeader>
				<CardTitle>Quick Actions</CardTitle>
			</CardHeader>
			<CardContent className="space-y-2">
				{actions.map((action, index) => (
					<Button
						key={index}
						variant={action.variant}
						className="w-full justify-start hover:bg-accent/80"
					>
						{action.icon}
						{action.label}
					</Button>
				))}
			</CardContent>
		</Card>
	)
}