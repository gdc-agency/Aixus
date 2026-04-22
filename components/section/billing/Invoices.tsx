import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, Download, Receipt } from "lucide-react"

export default function Invoices() {
	const invoices = [
		{ id: "INV-001", date: "May 1, 2023", amount: "$99.00", status: "Paid" },
		{ id: "INV-002", date: "April 1, 2023", amount: "$99.00", status: "Paid" },
		{ id: "INV-003", date: "March 1, 2023", amount: "$99.00", status: "Paid" },
		{ id: "INV-004", date: "February 1, 2023", amount: "$99.00", status: "Paid" },
		{ id: "INV-005", date: "January 1, 2023", amount: "$99.00", status: "Paid" },
	]

	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Invoices</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Invoice</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Amount</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{invoices.map((invoice) => (
							<TableRow key={invoice.id}>
								<TableCell className="font-medium">{invoice.id}</TableCell>
								<TableCell>{invoice.date}</TableCell>
								<TableCell>{invoice.amount}</TableCell>
								<TableCell>
									<Badge className="bg-green-500 hover:bg-green-600">
										<Check className="mr-1 h-3 w-3" />
										{invoice.status}
									</Badge>
								</TableCell>
								<TableCell>
									<Button variant="outline" size="sm">
										<Download className="mr-2 h-3 w-3" />
										Download
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter>
				<div className="flex items-center gap-2 text-sm text-muted-foreground">
					<Receipt className="h-4 w-4" />
					<span>Invoices are generated on the 1st of each month</span>
				</div>
			</CardFooter>
		</Card>
	)
}