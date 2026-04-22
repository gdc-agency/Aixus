"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { AlertTriangle, Check, X } from "lucide-react"

const modelStatuses = [
	{ name: "Customer Support", status: "Online", lastChecked: "5 min ago" },
	{ name: "Product Classifier", status: "Offline", lastChecked: "10 min ago" },
	{ name: "Content Generator", status: "Online", lastChecked: "2 min ago" },
	{ name: "Sentiment Analyzer", status: "Online", lastChecked: "8 min ago" },
	{ name: "Code Assistant", status: "Maintenance", lastChecked: "15 min ago" },
]

export default function ModelStatus() {
	return (
		<div className="w-full">
			{/* ✅ Desktop & Tablet (Table View) */}
			<div className="hidden sm:block">
				<Card>
					<CardHeader>
						<CardTitle className="text-base sm:text-lg">Model Status</CardTitle>
					</CardHeader>
					<CardContent className="overflow-x-auto">
						<Table className="w-full min-w-[450px]">
							<TableHeader>
								<TableRow className="bg-muted/20">
									<TableHead>Model</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Last Checked</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{modelStatuses.map((model) => (
									<TableRow key={model.name} className="hover:bg-muted/10">
										<TableCell className="font-medium">{model.name}</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												<div
													className={cn(
														"flex items-center justify-center w-6 h-6 rounded-full",
														model.status === "Online"
															? "bg-green-100 text-green-600"
															: model.status === "Offline"
																? "bg-red-100 text-red-600"
																: "bg-yellow-100 text-yellow-600"
													)}
												>
													{model.status === "Online" && <Check className="w-3 h-3" />}
													{model.status === "Offline" && <X className="w-3 h-3" />}
													{model.status === "Maintenance" && <AlertTriangle className="w-3 h-3" />}
												</div>
											</div>
										</TableCell>
										<TableCell className="text-muted-foreground">{model.lastChecked}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>

			{/* ✅ Mobile View (Card List) */}
			<div className="grid gap-3 sm:hidden">
				{modelStatuses.map((model) => (
					<Card key={model.name} className="p-4">
						<div className="flex justify-between items-center mb-2">
							<h3 className="font-semibold">{model.name}</h3>
							<div
								className={cn(
									"flex items-center justify-center w-5 h-5 rounded-full",
									model.status === "Online"
										? "bg-green-100 text-green-600"
										: model.status === "Offline"
											? "bg-red-100 text-red-600"
											: "bg-yellow-100 text-yellow-600"
								)}
							>
								{model.status === "Online" && <Check className="w-3 h-3" />}
								{model.status === "Offline" && <X className="w-3 h-3" />}
								{model.status === "Maintenance" && <AlertTriangle className="w-3 h-3" />}
							</div>
						</div>
						<p className="text-sm text-muted-foreground">
							Last checked: {model.lastChecked}
						</p>
					</Card>
				))}
			</div>
		</div>
	)
}
