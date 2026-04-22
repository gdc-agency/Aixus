import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Download, FileText, RefreshCw, Upload } from "lucide-react"

const recentActivities = [
	{
		action: "Added 120 documents to Product Documentation",
		time: "2 hours ago",
	},
	{
		action: "Reindexed Customer Support Knowledge Base",
		time: "1 day ago",
	},
	{
		action: "Created Legal Documents collection",
		time: "1 month ago",
	},
]

const actions = [
	{
		label: "Upload Documents",
		description: "Add new documents to collections",
		icon: Upload,
		color: "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400",
	},
	{
		label: "Create Collection",
		description: "Set up a new vector collection",
		icon: Database,
		color: "bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400",
	},
	{
		label: "Reindex Collection",
		description: "Update vector indexes",
		icon: RefreshCw,
		color: "bg-yellow-50 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-400",
	},
	{
		label: "Export Collection",
		description: "Download collection data",
		icon: Download,
		color: "bg-purple-50 text-purple-600 dark:bg-purple-950 dark:text-purple-400",
	},
]

export default function QuickActions() {
	return (
		<Card className="border-muted shadow-none">
			<CardHeader className="space-y-1">
				<CardTitle className="text-xl font-semibold tracking-tight">
					Quick Actions
				</CardTitle>
				<p className="text-sm text-muted-foreground">
					Manage your collections with one click
				</p>
			</CardHeader>

			<CardContent className="space-y-8">
				{/* Action Buttons */}
				<div className="grid gap-4 md:grid-cols-2">
					{actions.map((action, idx) => (
						<Button
							key={idx}
							className="h-auto py-5 px-4 justify-start border rounded-xl shadow-none hover:shadow-md transition-all duration-200"
							variant="outline"
						>
							<div className="flex items-start gap-3">
								<div
									className={`flex h-10 w-10 items-center justify-center rounded-lg ${action.color}`}
								>
									<action.icon className="h-5 w-5" />
								</div>
								<div className="flex flex-col items-start text-left">
									<span className="font-medium text-sm">{action.label}</span>
									<span className="text-xs text-muted-foreground mt-1 leading-tight">
										{action.description}
									</span>
								</div>
							</div>
						</Button>
					))}
				</div>

				{/* Recent Activity */}
				<div className="rounded-lg border p-4 bg-muted/40">
					<h3 className="text-sm font-semibold mb-3 text-foreground">
						Recent Activity
					</h3>
					<div className="space-y-4">
						{recentActivities.map((activity, index) => (
							<div
								key={index}
								className="flex items-start gap-3 text-sm leading-snug"
							>
								<FileText className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
								<div>
									<p className="text-foreground">{activity.action}</p>
									<p className="text-xs text-muted-foreground">{activity.time}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
