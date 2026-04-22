import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import DeployedModels from "./DeployedModels"
import DevelopmentModels from "./DevelopmentModels"
import MarketplaceModels from "./MarketplaceModels"

export default function Models() {
	return (
		<div className="space-y-6">
			{/* Header */}
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-xl font-bold tracking-tight">AI Models</h1>
					<p className="text-muted-foreground">Manage and deploy your AI models.</p>
				</div>
				<Button>
					<Plus className="mr-2 h-4 w-4" /> Add Model
				</Button>
			</div>

			{/* Sections (Tabs removed, showing all) */}
			<div className="space-y-6">
				<DeployedModels />
				<DevelopmentModels />
				<MarketplaceModels />
			</div>
		</div>
	)
}
