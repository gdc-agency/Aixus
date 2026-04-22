import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PlanComparison() {
	const plans = [
		{
			name: "Starter",
			price: "$29",
			apiCalls: "250,000",
			storage: "10 GB",
			trainingHours: "2",
			teamMembers: "3",
			support: "Email",
			current: false,
		},
		{
			name: "Pro",
			price: "$99",
			apiCalls: "1,000,000",
			storage: "50 GB",
			trainingHours: "10",
			teamMembers: "10",
			support: "Priority Email",
			current: true,
		},
		{
			name: "Enterprise",
			price: "$499",
			apiCalls: "5,000,000",
			storage: "250 GB",
			trainingHours: "50",
			teamMembers: "Unlimited",
			support: "24/7 Phone & Email",
			current: false,
		},
	]

	return (
		<Card>
			<CardHeader>
				<CardTitle>Plan Comparison</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-4 gap-6">
					<div className="col-span-1">
						<div className="h-12"></div>
						<div className="mt-8 space-y-6">
							<div className="space-y-2">
								<h4 className="text-sm font-medium">API Calls</h4>
								<p className="text-xs text-muted-foreground">Monthly API request limit</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium">Storage</h4>
								<p className="text-xs text-muted-foreground">Data storage capacity</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium">Training Hours</h4>
								<p className="text-xs text-muted-foreground">Custom model training time</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium">Team Members</h4>
								<p className="text-xs text-muted-foreground">Number of team seats</p>
							</div>
							<div className="space-y-2">
								<h4 className="text-sm font-medium">Support</h4>
								<p className="text-xs text-muted-foreground">Customer support level</p>
							</div>
						</div>
					</div>
					{plans.map((plan) => (
						<div key={plan.name} className="col-span-1">
							<div className="rounded-lg border p-4 text-center">
								<h3 className="text-lg font-bold">{plan.name}</h3>
								<div className="mt-2 flex items-baseline justify-center gap-1">
									<span className="text-2xl font-bold">{plan.price}</span>
									<span className="text-sm text-muted-foreground">/ month</span>
								</div>
								{plan.current ? (
									<Badge className="mt-2">Current Plan</Badge>
								) : (
									<Button variant="outline" size="sm" className="mt-2">
										{plan.price === "$29" ? "Downgrade" : "Upgrade"}
									</Button>
								)}
							</div>
							<div className="mt-8 space-y-6">
								<div className="text-center">
									<p className="font-medium">{plan.apiCalls}</p>
								</div>
								<div className="text-center">
									<p className="font-medium">{plan.storage}</p>
								</div>
								<div className="text-center">
									<p className="font-medium">{plan.trainingHours} hours</p>
								</div>
								<div className="text-center">
									<p className="font-medium">{plan.teamMembers}</p>
								</div>
								<div className="text-center">
									<p className="font-medium">{plan.support}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}