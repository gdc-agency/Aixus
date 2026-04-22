import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import ApiReference from "./ApiReference"
import Examples from "./Examples"
import Guides from "./Guides"
import Sdks from "./Sdks"

export default function ApiDocs() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">API Documentation</h1>
						<p className="text-muted-foreground">Reference documentation for the AI platform APIs.</p>
					</div>
					<div className="relative w-64">
						<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
						<Input type="search" placeholder="Search documentation..." className="pl-8" />
					</div>
				</div>

				<Tabs defaultValue="reference">
					<TabsList>
						<TabsTrigger value="reference">API Reference</TabsTrigger>
						<TabsTrigger value="guides">Guides</TabsTrigger>
						<TabsTrigger value="examples">Examples</TabsTrigger>
						<TabsTrigger value="sdks">SDKs</TabsTrigger>
					</TabsList>

					<TabsContent value="reference" className="space-y-6">
						<ApiReference />
					</TabsContent>
					<TabsContent value="guides" className="space-y-6">
						<Guides />
					</TabsContent>
					<TabsContent value="examples" className="space-y-6">
						<Examples />
					</TabsContent>
					<TabsContent value="sdks" className="space-y-6">
						<Sdks />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}