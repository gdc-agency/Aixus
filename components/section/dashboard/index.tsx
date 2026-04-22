// import DashboardHeader from "./DashboardHeader"
import ActiveUsers from "./ActiveUsers"
import CostBreakdown from "./CostBreakdown"
import ErrorLogs from "./ErrorLogs"
import ModelHealth from "./ModelHealth"
import ModelStatus from "./ModelStatus"
import PerformanceChartSection from "./PerformanceChartSection"
import PerformanceMetrics from "./PerformanceMetrics"
import QuickActions from "./QuickActions"
import RecentActivity from "./RecentActivity"
import RecentExperiments from "./RecentExperiments"
import StatCards from "./StatCards"
import SystemAlerts from "./SystemAlerts"
import TopModels from "./TopModels"
import UsageChartSection from "./UsageChartSection"

export default function Home() {
	return (
		<div className="space-y-6">
			{/* Stat Cards */}
			<StatCards />

			{/* Charts + System Alerts */}
			<div className="grid gap-6 xl:grid-cols-3">
				<div className="xl:col-span-2">
					<UsageChartSection />
				</div>
				<SystemAlerts />
			</div>

			{/* Performance Metrics */}
			<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
				<PerformanceMetrics />
			</div>

			{/* Status + Performance Chart */}
			<div className="grid gap-6 xl:grid-cols-2">
				<RecentExperiments />
				<PerformanceChartSection />
			</div>

			{/* Model Health + Error Logs */}
			<div className="grid gap-6 xl:grid-cols-2">
				<ModelHealth />
				<ErrorLogs />
			</div>

			{/* Model Status + Recent Activity */}
			<div className="grid gap-6 xl:grid-cols-2">
				<ModelStatus />
				<RecentActivity />
			</div>

			{/* Top Models + Quick Actions + Active Users + Cost Breakdown */}
			<div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
				<TopModels />
				<QuickActions />
				<ActiveUsers />
				<CostBreakdown />
			</div>
		</div>
	)
}

