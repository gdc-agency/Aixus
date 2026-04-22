import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const endpoints = [
	{
		category: "Models",
		items: ["List Models", "Retrieve Model"],
	},
	{
		category: "Completions",
		items: ["Create Completion", "Stream Completion"],
	},
	{
		category: "Chat",
		items: ["Create Chat", "Stream Chat"],
	},
	{
		category: "Embeddings",
		items: ["Create Embeddings"],
	},
	{
		category: "Fine-tuning",
		items: ["Create Fine-tune", "List Fine-tunes", "Retrieve Fine-tune", "Cancel Fine-tune"],
	},
]

export default function ApiEndpoints() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					API Endpoints
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				{endpoints.map((category) => (
					<div key={category.category} className="space-y-2">
						<h3 className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
							{category.category}
						</h3>
						<ul className="space-y-1">
							{category.items.map((item, index) => (
								<li key={item}>
									<Button
										variant="outline"
										className={`w-full justify-start text-sm md:text-base h-auto px-3 py-2 rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${item === "Create Completion" ? "bg-primary/10 text-primary font-semibold hover:bg-primary/20" : "text-gray-700 dark:text-gray-300"
											}`}
									>
										{item}
									</Button>
								</li>
							))}
						</ul>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
