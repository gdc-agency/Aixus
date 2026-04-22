import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Settings } from "lucide-react"
import Benchmarks from "./Benchmarks"
import EvaluationDatasets from "./EvaluationDatasets"
import Metrics from "./Metrics"
import RunEvaluation from "./RunEvaluation"

export default function Evaluation() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Evaluation</h1>
						<p className="text-muted-foreground">Evaluate and benchmark your AI models and agents.</p>
					</div>
					<div className="flex items-center gap-2">
						<Button variant="outline">
							<Settings className="mr-2 h-4 w-4" />
							Settings
						</Button>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							New Evaluation
						</Button>
					</div>
				</div>

				<Tabs defaultValue="metrics">
					<TabsList>
						<TabsTrigger value="metrics">Metrics</TabsTrigger>
						<TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
						<TabsTrigger value="datasets">Evaluation Datasets</TabsTrigger>
						<TabsTrigger value="run">Run Evaluation</TabsTrigger>
					</TabsList>

					<TabsContent value="metrics" className="space-y-6">
						<Metrics />
					</TabsContent>
					<TabsContent value="benchmarks" className="space-y-6">
						<Benchmarks />
					</TabsContent>
					<TabsContent value="datasets" className="space-y-6">
						<EvaluationDatasets />
					</TabsContent>
					<TabsContent value="run" className="space-y-6">
						<RunEvaluation />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}