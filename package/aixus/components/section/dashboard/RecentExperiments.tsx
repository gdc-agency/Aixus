"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Check, Loader, X } from "lucide-react" // icons

const experiments = [
	{ id: "EXP-001", name: "Sentiment Fine-Tuning", status: "Running", created: "1 day ago" },
	{ id: "EXP-002", name: "Classifier Optimization", status: "Completed", created: "3 days ago" },
	{ id: "EXP-003", name: "Content Generation V2", status: "Failed", created: "5 days ago" },
	{ id: "EXP-004", name: "Topic Modeling", status: "Running", created: "12 hours ago" },
	{ id: "EXP-005", name: "Language Translation", status: "Completed", created: "2 days ago" },
]


export default function RecentExperiments() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Experiments</CardTitle>
			</CardHeader>
			<CardContent className="overflow-x-auto">
				<Table className="min-w-[500px] font-sans">
					<TableHeader>
						<TableRow className="bg-muted/20">
							<TableHead className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
								ID
							</TableHead>
							<TableHead className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Name
							</TableHead>
							<TableHead className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Status
							</TableHead>
							<TableHead className="text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
								Created
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{experiments.map((exp) => (
							<TableRow
								key={exp.id}
								className="hover:bg-muted/10 transition-colors rounded-lg"
							>
								<TableCell className="font-medium">{exp.id}</TableCell>
								<TableCell>{exp.name}</TableCell>
								<TableCell>
									<div className="flex items-center gap-2">
										{/* Icon with colored background */}
										<div
											className={cn(
												"flex items-center justify-center w-6 h-6 rounded-full",
												exp.status === "Running"
													? "bg-blue-100 text-blue-600 animate-spin"
													: exp.status === "Completed"
														? "bg-green-100 text-green-600"
														: "bg-red-100 text-red-600"
											)}
										>
											{exp.status === "Running" && <Loader className="w-3 h-3" />}
											{exp.status === "Completed" && <Check className="w-3 h-3" />}
											{exp.status === "Failed" && <X className="w-3 h-3" />}
										</div>
										{/* <span
											className={cn(
												"px-3 py-1 rounded-full text-sm font-medium transition-all",
												exp.status === "Running"
													? "bg-blue-100 text-blue-700"
													: exp.status === "Completed"
														? "bg-green-100 text-green-700"
														: "bg-red-100 text-red-700"
											)}
										>
											{exp.status}
										</span> */}
									</div>
								</TableCell>
								<TableCell className="text-sm text-muted-foreground">{exp.created}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}
