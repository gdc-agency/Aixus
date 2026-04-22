import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function QueryPerformance() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Query Performance</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[200px] w-full bg-muted rounded-md flex items-center justify-center">
					<p className="text-sm text-muted-foreground">Query performance chart would appear here</p>
				</div>
			</CardContent>
		</Card>
	)
}