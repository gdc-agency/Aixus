import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Settings } from "lucide-react"

const environmentConfigs = [
	{
		name: "Production",
		url: "https://api.example.com",
		variables: 12,
		autoScaling: "Enabled",
		region: "US East",
	},
	{
		name: "Staging",
		url: "https://staging.example.com",
		variables: 15,
		autoScaling: "Disabled",
		region: "US East",
	},
	{
		name: "Development",
		url: "https://dev.example.com",
		variables: 18,
		autoScaling: "Disabled",
		region: "US East",
	},
]

export default function EnvironmentConfiguration() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Environment Configuration</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Environment</TableHead>
							<TableHead>URL</TableHead>
							<TableHead>Variables</TableHead>
							<TableHead>Auto Scaling</TableHead>
							<TableHead>Region</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{environmentConfigs.map((env) => (
							<TableRow key={env.name}>
								<TableCell className="font-medium">{env.name}</TableCell>
								<TableCell>{env.url}</TableCell>
								<TableCell>{env.variables}</TableCell>
								<TableCell>
									<Badge
										variant={env.autoScaling === "Enabled" ? "default" : "outline"}
										className={env.autoScaling === "Enabled" ? "bg-green-500 hover:bg-green-600" : ""}
									>
										{env.autoScaling}
									</Badge>
								</TableCell>
								<TableCell>{env.region}</TableCell>
								<TableCell>
									<Button variant="outline" size="sm">
										<Settings className="mr-2 h-3 w-3" />
										Configure
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}