import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield } from "lucide-react"

export default function CurrentPlan() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Current Plan</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="flex items-center justify-between">
					<div>
						<h3 className="text-xl font-bold">Pro Plan</h3>
						<p className="text-sm text-muted-foreground">Billed monthly</p>
					</div>
					<Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
				</div>
				<div className="space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span>Next billing date</span>
						<span className="font-medium">June 1, 2023</span>
					</div>
					<div className="flex items-center justify-between text-sm">
						<span>Monthly fee</span>
						<span className="font-medium">$99.00</span>
					</div>
				</div>
				<div className="rounded-lg bg-muted p-3">
					<div className="flex items-center gap-2">
						<Shield className="h-5 w-5 text-primary" />
						<span className="text-sm font-medium">Your plan renews automatically</span>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Cancel Plan</Button>
				<Button>
					Upgrade Plan <ArrowRight className="ml-2 h-4 w-4" />
				</Button>
			</CardFooter>
		</Card>
	)
}