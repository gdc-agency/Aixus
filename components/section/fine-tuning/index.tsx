import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import ActiveJobs from "./ActiveJobs"
import CompletedJobs from "./CompletedJobs"
import Datasets from "./Datasets"
import FineTuningGuide from "./FineTuningGuide"

export default function FineTuning() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Fine-tuning</h1>
						<p className="text-muted-foreground">Create custom AI models trained on your data.</p>
					</div>
					<Button>
						<Plus className="mr-2 h-4 w-4" /> New Fine-tuning Job
					</Button>
				</div>

				<Tabs defaultValue="active">
					<TabsList>
						<TabsTrigger value="active">Active Jobs</TabsTrigger>
						<TabsTrigger value="completed">Completed</TabsTrigger>
						<TabsTrigger value="datasets">Datasets</TabsTrigger>
					</TabsList>

					<TabsContent value="active" className="space-y-6">
						<ActiveJobs />
					</TabsContent>
					<TabsContent value="completed" className="space-y-6">
						<CompletedJobs />
					</TabsContent>
					<TabsContent value="datasets" className="space-y-6">
						<Datasets />
					</TabsContent>
				</Tabs>

				<FineTuningGuide />
			</div>
		</>
	)
}