import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BillingInfo() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Billing Information</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<h3 className="text-sm font-medium">Billing Address</h3>
					<div className="rounded-lg border p-3">
						<p className="text-sm">Acme Inc.</p>
						<p className="text-sm">123 Main St.</p>
						<p className="text-sm">San Francisco, CA 94103</p>
						<p className="text-sm">United States</p>
					</div>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-medium">Tax Information</h3>
					<div className="rounded-lg border p-3">
						<div className="flex items-center justify-between">
							<p className="text-sm">Tax ID: US123456789</p>
							<Button variant="outline" size="sm">
								Edit
							</Button>
						</div>
					</div>
				</div>
				<div className="space-y-2">
					<h3 className="text-sm font-medium">Billing Email</h3>
					<div className="rounded-lg border p-3">
						<div className="flex items-center justify-between">
							<p className="text-sm">billing@acme.com</p>
							<Button variant="outline" size="sm">
								Edit
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}