import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BenchmarkComparison() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Benchmark Comparison</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
					<p className="text-sm text-muted-foreground">Benchmark comparison chart would appear here</p>
				</div>
			</CardContent>
		</Card>
	)
}