import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Upload } from "lucide-react"
import Analytics from "./Analytics"
import Collections from "./Collections"
import VectorSearch from "./VectorSearch"

export default function VectorDatabase() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Vector Database</h1>
						<p className="text-muted-foreground">Manage your vector embeddings and knowledge bases.</p>
					</div>
					<div className="flex items-center gap-2">
						<Button variant="outline">
							<Upload className="mr-2 h-4 w-4" />
							Import
						</Button>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							New Collection
						</Button>
					</div>
				</div>

				<Tabs defaultValue="collections">
					<TabsList>
						<TabsTrigger value="collections">Collections</TabsTrigger>
						<TabsTrigger value="search">Vector Search</TabsTrigger>
						<TabsTrigger value="analytics">Analytics</TabsTrigger>
					</TabsList>

					<TabsContent value="collections" className="space-y-6">
						<Collections />
					</TabsContent>
					<TabsContent value="search" className="space-y-6">
						<VectorSearch />
					</TabsContent>
					<TabsContent value="analytics" className="space-y-6">
						<Analytics />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}