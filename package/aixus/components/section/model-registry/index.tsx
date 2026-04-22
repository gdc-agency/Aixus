"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Search } from "lucide-react"
import Models from "./Models"
import Stages from "./Stages"
import Versions from "./Versions"

export default function ModelRegistry() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Model Registry</h1>
						<p className="text-muted-foreground">Centralized repository for all your AI models.</p>
					</div>
					<div className="flex items-center gap-2">
						<div className="relative w-64">
							<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
							<Input type="search" placeholder="Search models..." className="pl-8" />
						</div>
						<Button>
							<Plus className="mr-2 h-4 w-4" />
							Register Model
						</Button>
					</div>
				</div>

				<Tabs defaultValue="models">
					<TabsList>
						<TabsTrigger value="models">Models</TabsTrigger>
						<TabsTrigger value="versions">Versions</TabsTrigger>
						<TabsTrigger value="stages">Stages</TabsTrigger>
					</TabsList>

					<TabsContent value="models" className="space-y-6">
						<Models />
					</TabsContent>
					<TabsContent value="versions">
						<Versions />
					</TabsContent>
					<TabsContent value="stages">
						<Stages />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}