import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PerformanceCharts() {
	return (
		<div className="grid gap-6 md:grid-cols-2">
			<Card>
				<CardHeader>
					<CardTitle>Performance by Model</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
						<p className="text-sm text-muted-foreground">Performance chart would appear here</p>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Metrics Over Time</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
						<p className="text-sm text-muted-foreground">Trends chart would appear here</p>
					</div>
				</CardContent>
			</Card>
		</div>
	)
}