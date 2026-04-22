import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CostAnalytics() {
	const modelData = [
		{ name: "GPT-4o", cost: "$1,200", percent: 48, color: "bg-blue-500" },
		{ name: "Claude 3", cost: "$850", percent: 34, color: "bg-indigo-500" },
		{ name: "Llama 3", cost: "$250", percent: 10, color: "bg-purple-500" },
		{ name: "Mistral", cost: "$150", percent: 6, color: "bg-pink-500" },
		{ name: "Others", cost: "$50", percent: 2, color: "bg-gray-400" },
	]

	const serviceData = [
		{ name: "API Calls", cost: "$1,800", percent: 72, color: "bg-green-500" },
		{ name: "Fine-tuning", cost: "$450", percent: 18, color: "bg-teal-500" },
		{ name: "Storage", cost: "$150", percent: 6, color: "bg-yellow-500" },
		{ name: "Embeddings", cost: "$100", percent: 4, color: "bg-orange-500" },
	]

	const recommendations = [
		{
			title: "Optimize Token Usage",
			description: "Reduce prompt length to minimize token consumption.",
			saving: "Potential saving: $250/month",
		},
		{
			title: "Caching Frequent Responses",
			description: "Implement caching for common queries to reduce API calls.",
			saving: "Potential saving: $350/month",
		},
		{
			title: "Model Downgrading",
			description: "Use smaller models for simpler tasks that don't require advanced reasoning.",
			saving: "Potential saving: $200/month",
		},
		{
			title: "Request Batching",
			description: "Batch similar requests together to reduce API overhead.",
			saving: "Potential saving: $150/month",
		},
	]

	return (
		<div className="space-y-6">
			{/* Cost Analysis */}
			<Card>
				<CardHeader>
					<CardTitle>Cost by Model</CardTitle>
				</CardHeader>
				<CardContent className="space-y-8">
					{/* Cost by Model */}
					<section>
						<div className="space-y-4">
							{modelData.map((model) => (
								<div key={model.name} className="flex flex-col">
									<div className="flex justify-between mb-1">
										<span className="font-medium text-gray-900 dark:text-white">{model.name}</span>
										<span className="font-medium text-gray-800 dark:text-gray-200">{model.cost}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
										<div
											className={`${model.color} h-2 rounded-full transition-all duration-500`}
											style={{ width: `${model.percent}%` }}
										/>
									</div>
									<p className="mt-1 text-xs text-muted-foreground text-right">{model.percent}% of total</p>
								</div>
							))}
						</div>
					</section>

					{/* Cost by Service */}
					<section>
						<h3 className="mb-4 text-md font-semibold text-gray-800 dark:text-gray-100">Cost by Service</h3>
						<div className="space-y-4">
							{serviceData.map((service) => (
								<div key={service.name} className="flex flex-col">
									<div className="flex justify-between mb-1">
										<span className="font-medium text-gray-900 dark:text-white">{service.name}</span>
										<span className="font-medium text-gray-800 dark:text-gray-200">{service.cost}</span>
									</div>
									<div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
										<div
											className={`${service.color} h-2 rounded-full transition-all duration-500`}
											style={{ width: `${service.percent}%` }}
										/>
									</div>
									<p className="mt-1 text-xs text-muted-foreground text-right">{service.percent}% of total</p>
								</div>
							))}
						</div>
					</section>
				</CardContent>
			</Card>

			{/* Cost Optimization Recommendations */}
			<Card>
				<CardHeader>
					<CardTitle>Cost Optimization Recommendations</CardTitle>
				</CardHeader>
				<CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
					{recommendations.map((rec, index) => (
						<div key={index} className="rounded-lg border p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
							<h4 className="text-sm font-semibold text-gray-900 dark:text-white">{rec.title}</h4>
							<p className="mt-1 text-sm text-muted-foreground">{rec.description}</p>
							<p className="mt-2 text-sm font-medium text-green-600 dark:text-green-500">{rec.saving}</p>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	)
}
