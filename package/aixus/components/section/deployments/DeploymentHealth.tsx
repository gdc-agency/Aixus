import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DeploymentHealth() {
	return (
		<Card className="shadow-none border-muted">
			<CardHeader>
				<CardTitle className="text-lg font-semibold tracking-tight">
					Deployment Health
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col items-center justify-center py-6 space-y-6">
					{/* Circular Health Indicator */}
					<div className="relative h-44 w-44">
						<svg className="rotate-[-90deg]" viewBox="0 0 36 36" width="100%" height="100%">
							<circle
								className="text-primary/20"
								strokeWidth="3"
								stroke="currentColor"
								fill="transparent"
								r="16"
								cx="18"
								cy="18"
							/>
							<circle
								className="text-primary"
								strokeWidth="3"
								strokeLinecap="round"
								stroke="currentColor"
								fill="transparent"
								r="16"
								cx="18"
								cy="18"
								strokeDasharray="80, 100"
							/>
						</svg>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="text-center">
								<div className="text-4xl font-bold">80%</div>
								<div className="text-sm text-muted-foreground mt-1">Healthy</div>
							</div>
						</div>
					</div>

					{/* Health Status Summary */}
					<div className="grid w-full grid-cols-2 gap-4">
						<div className="rounded-lg border border-green-200 bg-green-50 p-4 text-center">
							<div className="text-sm font-medium text-green-700">Healthy</div>
							<div className="text-2xl font-bold text-green-600">4</div>
						</div>
						<div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-center">
							<div className="text-sm font-medium text-yellow-700">Degraded</div>
							<div className="text-2xl font-bold text-yellow-600">1</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}
