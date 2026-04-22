import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getStageBadge } from "./utils"

const stages = [
	{ model: "Customer Support Assistant", stage: "Production", lastUpdated: "2 days ago" },
	{ model: "Product Classifier", stage: "Staging", lastUpdated: "1 week ago" },
	{ model: "Content Generator", stage: "Production", lastUpdated: "3 days ago" },
	{ model: "Sentiment Analyzer", stage: "Development", lastUpdated: "2 days ago" },
	{ model: "Code Assistant", stage: "Staging", lastUpdated: "1 week ago" },
]

export default function Stages() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Model Stages</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Model</TableHead>
							<TableHead>Stage</TableHead>
							<TableHead>Last Updated</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{stages.map((s) => (
							<TableRow key={`${s.model}-${s.stage}`}>
								<TableCell>{s.model}</TableCell>
								<TableCell>
									<span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStageBadge(s.stage)}`}>
										{s.stage}
									</span>
								</TableCell>
								<TableCell>{s.lastUpdated}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}