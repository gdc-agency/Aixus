import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function BillingHistory() {
	const transactions = [
		{
			date: "May 1, 2023",
			description: "Monthly subscription - Pro Plan",
			amount: "$99.00",
			method: "Visa ending in 4242",
		},
		{
			date: "April 1, 2023",
			description: "Monthly subscription - Pro Plan",
			amount: "$99.00",
			method: "Visa ending in 4242",
		},
		{
			date: "March 1, 2023",
			description: "Monthly subscription - Pro Plan",
			amount: "$99.00",
			method: "Visa ending in 4242",
		},
		{
			date: "February 1, 2023",
			description: "Monthly subscription - Pro Plan",
			amount: "$99.00",
			method: "Mastercard ending in 5555",
		},
		{
			date: "January 1, 2023",
			description: "Monthly subscription - Pro Plan",
			amount: "$99.00",
			method: "Mastercard ending in 5555",
		},
	]

	return (
		<Card>
			<CardHeader>
				<CardTitle>Billing History</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					{transactions.map((transaction, index) => (
						<div key={index} className="flex items-center justify-between rounded-lg border p-4">
							<div className="space-y-1">
								<p className="font-medium">{transaction.description}</p>
								<div className="flex items-center gap-2 text-sm text-muted-foreground">
									<Calendar className="h-3 w-3" />
									<span>{transaction.date}</span>
								</div>
								<p className="text-sm text-muted-foreground">{transaction.method}</p>
							</div>
							<p className="font-medium">{transaction.amount}</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	)
}