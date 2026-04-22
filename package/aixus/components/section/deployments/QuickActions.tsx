import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, RefreshCw, Rocket, Server } from "lucide-react"

export default function QuickActions() {
	return (
		<Card className="shadow-none border-muted">
			<CardHeader className="pb-2">
				<CardTitle className="text-lg font-semibold tracking-tight">
					Quick Actions
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-3">
					<Button
						className="w-full justify-start font-medium"
						variant="default"
					>
						<Rocket className="mr-2 h-4 w-4" />
						Deploy New Model
					</Button>

					<Button
						className="w-full justify-start font-medium"
						variant="outline"
					>
						<RefreshCw className="mr-2 h-4 w-4" />
						Update Existing Deployment
					</Button>

					<Button
						className="w-full justify-start font-medium"
						variant="outline"
					>
						<Globe className="mr-2 h-4 w-4" />
						Configure Custom Domain
					</Button>

					<Button
						className="w-full justify-start font-medium"
						variant="outline"
					>
						<Server className="mr-2 h-4 w-4" />
						Scale Resources
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}
