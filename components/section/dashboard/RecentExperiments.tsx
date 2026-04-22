"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"
import { Check, Loader, X } from "lucide-react"

const experiments = [
	{ id: "EXP-001", name: "Sentiment Fine-Tuning", status: "Running", created: "1 day ago" },
	{ id: "EXP-002", name: "Classifier Optimization", status: "Completed", created: "3 days ago" },
	{ id: "EXP-003", name: "Content Generation V2", status: "Failed", created: "5 days ago" },
	{ id: "EXP-004", name: "Topic Modeling", status: "Running", created: "12 hours ago" },
	{ id: "EXP-005", name: "Language Translation", status: "Completed", created: "2 days ago" },
]

export default function RecentExperiments() {
	return (
		<div className="w-full">

			{/* ✅ Desktop & Tablet (Table View) */}
			<div className="hidden sm:block">
				<Card>
					<CardHeader>
						<CardTitle>Recent Experiments</CardTitle>
					</CardHeader>
					<CardContent className="overflow-x-auto p-0">
						<Table className="w-full font-sans">
							<TableHeader className="bg-muted/20">
								<TableRow>
									<TableHead className="px-4 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
										ID
									</TableHead>
									<TableHead className="px-4 py-4 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
										Name
									</TableHead>
									<TableHead className="px-4 py-4 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
										Status
									</TableHead>
									<TableHead className="px-4 py-4 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
										Created
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{experiments.map((exp) => (
									<TableRow key={exp.id} className="hover:bg-muted/10 transition-colors">
										<TableCell className="px-4 py-4 font-medium">{exp.id}</TableCell>
										<TableCell className="px-4 py-4">{exp.name}</TableCell>
										<TableCell className="px-4 py-4 flex items-center justify-center">
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
										</TableCell>
										<TableCell className="px-4 py-4 text-sm text-muted-foreground text-center">
											{exp.created}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</CardContent>
				</Card>
			</div>

			{/* ✅ Mobile View (Cards Instead of Table) */}
			<div className="grid gap-3 sm:hidden">
				{experiments.map((exp) => (
					<Card key={exp.id} className="p-4">
						<div className="flex justify-between items-center mb-2">
							<h3 className="font-semibold">{exp.name}</h3>
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
						</div>
						<p className="text-sm text-muted-foreground">
							<strong>ID:</strong> {exp.id}
						</p>
						<p className="text-sm text-muted-foreground">
							<strong>Created:</strong> {exp.created}
						</p>
					</Card>
				))}
			</div>
		</div>
	)
}
