"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Box, Cpu, MessageCircle, Star, User } from "lucide-react"

const modelIcons = {
	"Customer Support Assistant": <User className="w-5 h-5 text-primary" />,
	"Product Classifier": <Box className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
	"Content Generator": <Cpu className="w-5 h-5 text-green-500 dark:text-green-400" />,
	"Sentiment Analyzer": <MessageCircle className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />,
	"Recommendation Engine": <Star className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
	"Chatbot AI": <User className="w-5 h-5 text-pink-500 dark:text-pink-400" />,
}

const errorLogs = [
	{ model: "Customer Support Assistant", error: "API Timeout", time: "1 hour ago", severity: "High" },
	{ model: "Product Classifier", error: "Invalid Input", time: "3 hours ago", severity: "Medium" },
	{ model: "Content Generator", error: "Memory Limit Exceeded", time: "Yesterday", severity: "High" },
	{ model: "Sentiment Analyzer", error: "Rate Limit Reached", time: "2 days ago", severity: "Low" },
]

const severityStyles = {
	High: { bg: "bg-destructive/20", text: "text-destructive" },
	Medium: { bg: "bg-yellow-200 dark:bg-yellow-800/40", text: "text-yellow-700 dark:text-yellow-300" },
	Low: { bg: "bg-green-200 dark:bg-green-800/40", text: "text-green-700 dark:text-green-300" },
}

export default function ErrorLogs() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Error Logs</CardTitle>
			</CardHeader>

			{/* ✅ Desktop Table */}
			<CardContent className="p-0 overflow-x-auto hidden sm:block">
				<Table className="min-w-full border-collapse">
					<TableHeader>
						<TableRow>
							<TableHead className="px-6 py-3 text-left text-sm font-medium text-muted-foreground uppercase tracking-wide">
								Model
							</TableHead>
							<TableHead className="px-6 py-3 text-left text-sm font-medium text-muted-foreground uppercase tracking-wide">
								Error
							</TableHead>
							<TableHead className="px-6 py-3 text-left text-sm font-medium text-muted-foreground uppercase tracking-wide">
								Time
							</TableHead>
							<TableHead className="px-6 py-3 text-left text-sm font-medium text-muted-foreground uppercase tracking-wide">
								Severity
							</TableHead>
						</TableRow>
					</TableHeader>

					<TableBody>
						{errorLogs.map((log, index) => (
							<TableRow key={index}>
								<TableCell className="px-6 py-4 flex items-center gap-3 text-foreground font-medium">
									{modelIcons[log.model] || <Box className="w-5 h-5 text-muted-foreground" />}
									{log.model}
								</TableCell>
								<TableCell className="px-6 py-4 text-foreground">{log.error}</TableCell>
								<TableCell className="px-6 py-4 text-muted-foreground">{log.time}</TableCell>
								<TableCell className="px-6 py-4">
									<span
										className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${severityStyles[log.severity].bg} ${severityStyles[log.severity].text}`}
									>
										{log.severity}
									</span>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>

			{/* ✅ Mobile Layout (iPhone SE etc.) */}
			<CardContent className="p-4 space-y-4 sm:hidden">
				{errorLogs.map((log, index) => (
					<div
						key={index}
						className="border rounded-lg p-4 bg-muted/5 flex flex-col gap-2"
					>
						<div className="flex items-center gap-2 font-semibold">
							{modelIcons[log.model] || <Box className="w-5 h-5 text-muted-foreground" />}
							{log.model}
						</div>
						<p className="text-sm"><strong>Error:</strong> {log.error}</p>
						<p className="text-sm text-muted-foreground"><strong>Time:</strong> {log.time}</p>
						<span
							className={`w-fit px-3 py-1 rounded-full text-sm font-semibold ${severityStyles[log.severity].bg} ${severityStyles[log.severity].text}`}
						>
							{log.severity}
						</span>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
