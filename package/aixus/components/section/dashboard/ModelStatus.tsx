"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { AlertTriangle, Check, X } from "lucide-react" // icon import

const modelStatuses = [
	{ name: "Customer Support", status: "Online", lastChecked: "5 min ago" },
	{ name: "Product Classifier", status: "Offline", lastChecked: "10 min ago" },
	{ name: "Content Generator", status: "Online", lastChecked: "2 min ago" },
	{ name: "Sentiment Analyzer", status: "Online", lastChecked: "8 min ago" },
	{ name: "Code Assistant", status: "Maintenance", lastChecked: "15 min ago" },
]

export default function ModelStatus() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Model Status</CardTitle>
			</CardHeader>
			<CardContent className="overflow-x-auto">
				<Table className="min-w-[500px]">
					<TableHeader>
						<TableRow className="bg-muted/20">
							<TableHead className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Model
							</TableHead>
							<TableHead className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Status
							</TableHead>
							<TableHead className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Last Checked
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{modelStatuses.map((model) => (
							<TableRow
								key={model.name}
								className="hover:bg-muted/10 transition-colors"
							>
								<TableCell className="font-medium">{model.name}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										{/* Icon with colored background */}
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

										{/* Badge */}
										{/* <Badge
											className={cn(
												"px-3 py-1 rounded-full text-sm font-medium transition-all",
												model.status === "Online"
													? "bg-green-100 text-green-800"
													: model.status === "Offline"
														? "bg-red-100 text-red-800"
														: "bg-yellow-100 text-yellow-800"
											)}
										>
											{model.status}
										</Badge> */}
									</div>
								</TableCell>
								<TableCell className="text-sm text-muted-foreground">{model.lastChecked}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
