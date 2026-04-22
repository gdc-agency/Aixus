import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Plus } from "lucide-react"

export default function PaymentMethods() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Payment Methods</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div className="rounded-lg border p-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div className="rounded-md bg-muted p-2">
									<CreditCard className="h-6 w-6" />
								</div>
								<div>
									<p className="font-medium">Visa ending in 4242</p>
									<p className="text-sm text-muted-foreground">Expires 04/2025</p>
								</div>
							</div>
							<Badge>Default</Badge>
						</div>
					</div>
					<div className="rounded-lg border p-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4">
								<div className="rounded-md bg-muted p-2">
									<CreditCard className="h-6 w-6" />
								</div>
								<div>
									<p className="font-medium">Mastercard ending in 5555</p>
									<p className="text-sm text-muted-foreground">Expires 08/2024</p>
								</div>
							</div>
							<Button variant="outline" size="sm">
								Make Default
							</Button>
						</div>
					</div>
					<Button variant="outline" className="w-full">
						<Plus className="mr-2 h-4 w-4" />
						Add Payment Method
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}