import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from "lucide-react"
import ActiveExperiments from "./ActiveExperiments"
import ArchivedExperiments from "./ArchivedExperiments"
import CompletedExperiments from "./CompletedExperiments"

export default function Experiments() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Experiments</h1>
						<p className="text-muted-foreground">Track and manage AI model experiments and versions.</p>
					</div>
					<div className="flex items-center gap-2">
						<div className="relative w-64">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input type="search" placeholder="Search experiments..." className="pl-8" />
						</div>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							New Experiment
						</Button>
					</div>
				</div>

				<Tabs defaultValue="active">
					<TabsList>
						<TabsTrigger value="active">Active Experiments</TabsTrigger>
						<TabsTrigger value="completed">Completed</TabsTrigger>
						<TabsTrigger value="archived">Archived</TabsTrigger>
					</TabsList>

					<TabsContent value="active" className="space-y-6">
						<ActiveExperiments />
					</TabsContent>
					<TabsContent value="completed" className="space-y-6">
						<CompletedExperiments />
					</TabsContent>
					<TabsContent value="archived" className="space-y-6">
						<ArchivedExperiments />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}