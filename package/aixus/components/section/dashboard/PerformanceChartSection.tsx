import { PerformanceChart } from "@/components/performance-chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PerformanceChartSection() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Model Performance Metrics</CardTitle>
			</CardHeader>
			<CardContent>
				<PerformanceChart />
			</CardContent>
		</Card>
	)
}





