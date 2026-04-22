import { Button } from "@/components/ui/button"
import { Calendar, Download } from "lucide-react"
import CostAnalytics from "./CostAnalytics"
import PerformanceAnalytics from "./PerformanceAnalytics"
import UsageAnalytics from "./UsageAnalytics"

export default function Analytics() {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-xl font-bold tracking-tight">Analytics</h1>
					<p className="text-muted-foreground">
						Detailed analytics and performance metrics for your AI models.
					</p>
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline">
						<Calendar className="mr-2 h-4 w-4" />
						Last 30 Days
					</Button>
					<Button variant="outline">
						<Download className="mr-2 h-4 w-4" />
						Export
					</Button>
				</div>
			</div>

			{/* Analytics Sections (Tabs removed) */}
			<div className="space-y-6">
				<UsageAnalytics />
				<PerformanceAnalytics />
				<CostAnalytics />
			</div>
		</div>
	)
}
