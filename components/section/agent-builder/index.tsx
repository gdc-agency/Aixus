import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Settings } from "lucide-react"
import Builder from "./Builder"
import MyAgents from "./MyAgents"
import Templates from "./Templates"

export default function AgentBuilder() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Agent Builder</h1>
						<p className="text-muted-foreground">Create and manage AI agents with custom capabilities.</p>
					</div>
					<div className="flex items-center gap-2">
						<Button variant="outline">
							<Settings className="mr-2 h-4 w-4" />
							Settings
						</Button>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							New Agent
						</Button>
					</div>
				</div>

				<Tabs defaultValue="builder">
					<TabsList>
						<TabsTrigger value="builder">Builder</TabsTrigger>
						<TabsTrigger value="agents">My Agents</TabsTrigger>
						<TabsTrigger value="templates">Templates</TabsTrigger>
					</TabsList>

					<TabsContent value="builder" className="space-y-6">
						<Builder />
					</TabsContent>
					<TabsContent value="agents" className="space-y-6">
						<MyAgents />
					</TabsContent>
					<TabsContent value="templates" className="space-y-6">
						<Templates />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}