import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FileText } from "lucide-react"

export default function UsageSummary() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Usage Summary</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span>API Calls</span>
						<span className="font-medium">850,000 / 1,000,000</span>
					</div>
					<Progress value={85} className="h-2" />
					<p className="text-xs text-muted-foreground">85% of monthly allowance used</p>
				</div>
				<div className="space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span>Storage</span>
						<span className="font-medium">15 GB / 50 GB</span>
					</div>
					<Progress value={30} className="h-2" />
					<p className="text-xs text-muted-foreground">30% of monthly allowance used</p>
				</div>
				<div className="space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span>Training Hours</span>
						<span className="font-medium">8 / 10 hours</span>
					</div>
					<Progress value={80} className="h-2" />
					<p className="text-xs text-muted-foreground">80% of monthly allowance used</p>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="w-full">
					<FileText className="mr-2 h-4 w-4" />
					View Detailed Usage
				</Button>
			</CardFooter>
		</Card>
	)
}