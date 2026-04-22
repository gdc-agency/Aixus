import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const storageData = [
	{ name: "Product Documentation", size: "45 MB", percent: 20, color: "bg-blue-500" },
	{ name: "Customer Support Knowledge Base", size: "28 MB", percent: 12.5, color: "bg-green-500" },
	{ name: "Product Images", size: "120 MB", percent: 53.8, color: "bg-purple-500" },
	{ name: "Legal Documents", size: "18 MB", percent: 8.1, color: "bg-yellow-500" },
	{ name: "Research Papers", size: "12 MB", percent: 5.4, color: "bg-pink-500" },
]

export default function StorageUsage() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					Storage Usage
				</CardTitle>
			</CardHeader>

			<CardContent className="space-y-8">
				{/* Total Storage Section */}
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<span className="text-sm font-medium text-muted-foreground">
							Total Storage
						</span>
						<span className="text-sm font-semibold">
							223 MB <span className="text-muted-foreground">/ 1 GB</span>
						</span>
					</div>
					<Progress value={22.3} className="h-3 rounded-full" />
					<p className="text-xs text-muted-foreground">
						<span className="font-semibold text-foreground">22.3%</span> of allocated storage used
					</p>
				</div>

				{/* Breakdown Section */}
				<div className="space-y-5">
					<h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
						Breakdown by Category
					</h4>

					<div className="space-y-4">
						{storageData.map((item) => (
							<div key={item.name} className="space-y-2">
								<div className="flex items-center justify-between text-sm">
									<span className="truncate font-medium text-foreground w-3/4">
										{item.name}
									</span>
									<span className="font-semibold text-muted-foreground">
										{item.size}
									</span>
								</div>
								<div className="relative h-2.5 w-full rounded-full bg-secondary overflow-hidden">
									<div
										className={`absolute left-0 top-0 h-full ${item.color} transition-all`}
										style={{ width: `${item.percent}%` }}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
