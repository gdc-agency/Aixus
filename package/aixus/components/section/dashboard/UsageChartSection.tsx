import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UsageChart } from "@/components/usage-chart"

export default function UsageChartSection() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>API Usage by Model</CardTitle>
			</CardHeader>
			<CardContent>
				<UsageChart />
			</CardContent>
		</Card>
	)
}
