import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const versions = [
	{ model: "Customer Support Assistant", version: "v2.3.0", date: "2 days ago" },
	{ model: "Product Classifier", version: "v1.5.2", date: "1 week ago" },
	{ model: "Content Generator", version: "v3.1.0", date: "3 days ago" },
	{ model: "Sentiment Analyzer", version: "v2.0.1", date: "2 days ago" },
	{ model: "Code Assistant", version: "v1.2.5", date: "1 week ago" },
]

export default function Versions() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Model Versions</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Model</TableHead>
							<TableHead>Version</TableHead>
							<TableHead>Date</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{versions.map((v) => (
							<TableRow key={`${v.model}-${v.version}`}>
								<TableCell>{v.model}</TableCell>
								<TableCell>{v.version}</TableCell>
								<TableCell>{v.date}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}