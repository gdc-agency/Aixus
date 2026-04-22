"use client"

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
				{/* Responsive Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

					{/* Labels Column */}
					<div className="lg:col-span-1">
						<div className="h-12 hidden lg:block"></div>
						<div className="space-y-6">
							{[
								{ title: "API Calls", desc: "Monthly API request limit" },
								{ title: "Storage", desc: "Data storage capacity" },
								{ title: "Training Hours", desc: "Custom model training time" },
								{ title: "Team Members", desc: "Number of team seats" },
								{ title: "Support", desc: "Customer support level" },
							].map((item, index) => (
								<div key={index} className="space-y-1 text-center lg:text-left">
									<h4 className="text-sm font-medium">{item.title}</h4>
									<p className="text-xs text-muted-foreground">{item.desc}</p>
								</div>
							))}
						</div>
					</div>

					{/* Plans */}
					{plans.map((plan) => (
						<div key={plan.name} className="lg:col-span-1">
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

							<div className="mt-6 space-y-4 text-center">
								<p className="font-medium">{plan.apiCalls}</p>
								<p className="font-medium">{plan.storage}</p>
								<p className="font-medium">{plan.trainingHours} hours</p>
								<p className="font-medium">{plan.teamMembers}</p>
								<p className="font-medium">{plan.support}</p>
							</div>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}
