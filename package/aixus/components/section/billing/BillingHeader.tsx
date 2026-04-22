import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export default function BillingHeader() {
	return (
		<div className="flex items-center justify-between animate-fade-in">
			<div>
				<h1 className="text-xl font-bold tracking-tight">Billing</h1>
				<p className="text-muted-foreground">Manage your subscription and billing information.</p>
			</div>
			<Dialog>
				<DialogTrigger asChild>
					<Button>
						<Plus className="mr-2 h-4 w-4" /> Add Payment Method
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Add Payment Method</DialogTitle>
						<DialogDescription>Add a new credit card or other payment method to your account.</DialogDescription>
					</DialogHeader>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="card-name" className="text-right">
								Name on Card
							</Label>
							<Input id="card-name" placeholder="John Doe" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="card-number" className="text-right">
								Card Number
							</Label>
							<Input id="card-number" placeholder="•••• •••• •••• ••••" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="expiration" className="text-right">
								Expiration
							</Label>
							<div className="col-span-3 flex gap-2">
								<Input id="expiration-month" placeholder="MM" className="w-20" />
								<span className="flex items-center">/</span>
								<Input id="expiration-year" placeholder="YY" className="w-20" />
								<div className="ml-auto flex items-center gap-2">
									<Label htmlFor="cvc" className="text-right">
										CVC
									</Label>
									<Input id="cvc" placeholder="•••" className="w-20" />
								</div>
							</div>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="country" className="text-right">
								Country
							</Label>
							<Input id="country" placeholder="United States" className="col-span-3" />
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="postal-code" className="text-right">
								Postal Code
							</Label>
							<Input id="postal-code" placeholder="12345" className="col-span-3" />
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Save Payment Method</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	)
}