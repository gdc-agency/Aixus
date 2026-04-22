import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UsageChart } from "@/components/usage-chart"
import { BarChart3 } from "lucide-react"

export default function UsageAnalytics() {
	return (
		<>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between">
					<div>
						<CardTitle>API Usage</CardTitle>
					</div>
					<BarChart3 className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<UsageChart />
				</CardContent>
			</Card>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				<Card>
					<CardHeader>
						<CardTitle>Usage by Model Type</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{[
							{ name: "Text Generation", usage: "65%", color: "bg-blue-500" },
							{ name: "Image Generation", usage: "15%", color: "bg-green-500" },
							{ name: "Classification", usage: "12%", color: "bg-yellow-500" },
							{ name: "Embeddings", usage: "8%", color: "bg-purple-500" },
						].map((type) => (
							<div key={type.name} className="flex items-center gap-3">
								<div className={`h-4 w-4 rounded-full ${type.color}`} />
								<div className="flex-1">
									<div className="flex justify-between mb-1">
										<span className="text-sm font-medium text-gray-900 dark:text-white">{type.name}</span>
										<span className="text-sm text-muted-foreground">{type.usage}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
										<div className={`h-2 rounded-full ${type.color} transition-all duration-500`} style={{ width: type.usage }} />
									</div>
								</div>
							</div>
						))}
					</CardContent>
				</Card>

				{/* Top API Endpoints */}
				<Card>
					<CardHeader>
						<CardTitle>Top API Endpoints</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{[
							{ name: "/api/chat", calls: "450K", percent: 75, color: "bg-green-500" },
							{ name: "/api/complete", calls: "320K", percent: 60, color: "bg-blue-500" },
							{ name: "/api/generate", calls: "280K", percent: 45, color: "bg-yellow-500" },
							{ name: "/api/classify", calls: "150K", percent: 25, color: "bg-purple-500" },
						].map((endpoint) => (
							<div key={endpoint.name} className="flex items-center gap-3">
								<div className="flex-1">
									<div className="flex justify-between mb-1">
										<span className="text-sm font-medium text-gray-900 dark:text-white">{endpoint.name}</span>
										<span className="text-sm text-muted-foreground">{endpoint.calls}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
										<div
											className={`h-2 rounded-full ${endpoint.color} transition-all duration-500`}
											style={{ width: `${endpoint.percent}%` }}
										/>
									</div>
								</div>
							</div>
						))}
					</CardContent>
				</Card>

				{/* Usage by Application */}
				<Card>
					<CardHeader>
						<CardTitle>Usage by Application</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{[
							{ name: "Customer Support", calls: "380K", percent: 70, color: "bg-purple-500" },
							{ name: "Content Creation", calls: "290K", percent: 55, color: "bg-blue-500" },
							{ name: "Data Analysis", calls: "210K", percent: 40, color: "bg-green-500" },
							{ name: "Search Enhancement", calls: "180K", percent: 30, color: "bg-yellow-500" },
						].map((app) => (
							<div key={app.name} className="flex items-center gap-3">
								<div className="flex-1">
									<div className="flex justify-between mb-1">
										<span className="text-sm font-medium text-gray-900 dark:text-white">{app.name}</span>
										<span className="text-sm text-muted-foreground">{app.calls}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
										<div
											className={`h-2 rounded-full ${app.color} transition-all duration-500`}
											style={{ width: `${app.percent}%` }}
										/>
									</div>
								</div>
							</div>
						))}
					</CardContent>
				</Card>
			</div>


		</>
	)
}