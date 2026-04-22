import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import ActiveDeployments from "./ActiveDeployments"
import DeploymentHistory from "./DeploymentHistory"
import Environments from "./Environments"

export default function Deployments() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Deployments</h1>
						<p className="text-muted-foreground">Deploy and manage your AI models in production.</p>
					</div>
					<Button>
						<Plus className="mr-2 h-4 w-4" />
						New Deployment
					</Button>
				</div>

				<Tabs defaultValue="active">
					<TabsList>
						<TabsTrigger value="active">Active Deployments</TabsTrigger>
						<TabsTrigger value="environments">Environments</TabsTrigger>
						<TabsTrigger value="history">Deployment History</TabsTrigger>
					</TabsList>

					<TabsContent value="active" className="space-y-6">
						<ActiveDeployments />
					</TabsContent>
					<TabsContent value="environments" className="space-y-6">
						<Environments />
					</TabsContent>
					<TabsContent value="history" className="space-y-6">
						<DeploymentHistory />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}