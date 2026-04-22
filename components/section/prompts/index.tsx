import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import Categories from "./Categories"
import Templates from "./Templates"
import Tester from "./Tester"

export default function Prompts() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Prompt Templates</h1>
						<p className="text-muted-foreground">Create and manage reusable prompts for your AI models.</p>
					</div>
					<Button>
						<Plus className="mr-2 h-4 w-4" /> New Template
					</Button>
				</div>

				<Tabs defaultValue="templates">
					<TabsList>
						<TabsTrigger value="templates">Templates</TabsTrigger>
						<TabsTrigger value="categories">Categories</TabsTrigger>
						<TabsTrigger value="tester">Prompt Tester</TabsTrigger>
					</TabsList>

					<TabsContent value="templates" className="space-y-6">
						<Templates />
					</TabsContent>
					<TabsContent value="categories" className="space-y-6">
						<Categories />
					</TabsContent>
					<TabsContent value="tester" className="space-y-6">
						<Tester />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}