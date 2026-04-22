import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart } from "lucide-react"

export default function PreliminaryResults() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Preliminary Results</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[300px] w-full bg-muted rounded-md flex items-center justify-center">
					<p className="text-sm text-muted-foreground">Results chart would appear here</p>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="w-full">
					<BarChart className="mr-2 h-4 w-4" />
					View Detailed Metrics
				</Button>
			</CardFooter>
		</Card>
	)
}