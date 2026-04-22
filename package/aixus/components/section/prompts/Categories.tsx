"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Save } from "lucide-react"

const categories = [
	{ name: "Support", count: 12, color: "bg-blue-500" },
	{ name: "Marketing", count: 8, color: "bg-green-500" },
	{ name: "Content", count: 15, color: "bg-purple-500" },
	{ name: "Development", count: 10, color: "bg-yellow-500" },
	{ name: "Communication", count: 7, color: "bg-pink-500" },
	{ name: "Analytics", count: 5, color: "bg-orange-500" },
	{ name: "Productivity", count: 9, color: "bg-teal-500" },
	{ name: "Sales", count: 6, color: "bg-indigo-500" },
]

export default function Categories() {
	return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{categories.map((category) => (
				<Card
					key={category.name}
				>
					<CardHeader className="pb-1">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className={`h-3 w-3 rounded-full ${category.color}`} />
								<CardTitle className="text-base font-semibold">{category.name}</CardTitle>
							</div>
						</div>
					</CardHeader>
					<CardContent className="pb-2">
						<p className="text-3xl font-bold">{category.count}</p>
						<p className="text-xs text-muted-foreground">Templates available</p>
					</CardContent>
					<CardFooter>
						<Button variant="outline" size="sm" className="w-full">
							View Templates
						</Button>
					</CardFooter>
				</Card>
			))}

			{/* Add New Category Card */}
			<Card className="flex flex-col items-center justify-center p-6 border-dashed hover:border-primary/60 transition">
				<Plus className="h-10 w-10 text-muted-foreground mb-3" />
				<h3 className="text-base font-medium">Add Category</h3>
				<p className="text-xs text-muted-foreground text-center mt-1 mb-4">
					Create a new category for organizing templates
				</p>
				<div className="flex w-full gap-2">
					<Input placeholder="Category name" className="text-sm" />
					<Button size="sm">
						<Save className="mr-1 h-4 w-4" />
						Save
					</Button>
				</div>
			</Card>
		</div>
	)
}
