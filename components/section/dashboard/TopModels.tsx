"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const models = [
	{ name: "GPT-4o", usage: "450K calls", percent: 75, color: "bg-blue-500" },
	{ name: "Claude 3", usage: "320K calls", percent: 60, color: "bg-green-500" },
	{ name: "Llama 3", usage: "280K calls", percent: 45, color: "bg-yellow-500" },
	{ name: "Mistral", usage: "150K calls", percent: 25, color: "bg-purple-500" },
	{ name: "Gemini Pro", usage: "200K calls", percent: 35, color: "bg-red-500" },
	{ name: "GPT-3.5 Turbo", usage: "380K calls", percent: 55, color: "bg-teal-500" },
	// { name: "Claude 2.1", usage: "170K calls", percent: 28, color: "bg-orange-500" },
	// { name: "Llama 2", usage: "220K calls", percent: 40, color: "bg-pink-500" },
	// { name: "Mixtral 8x7B", usage: "130K calls", percent: 22, color: "bg-indigo-500" },
]


export default function TopModels() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Top Models</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				{models.map((model, index) => (
					<div
						key={index}
						className="flex items-center gap-4 py-2 rounded-lg hover:bg-muted/10 transition-colors"
					>
						<div className="w-full flex-1">
							<div className="flex justify-between mb-1">
								<span className="text-sm font-medium text-foreground">{model.name}</span>
								<span className="text-sm text-muted-foreground">{model.usage}</span>
							</div>
							<div className="h-2 w-full rounded-full bg-muted/20">
								<div
									className={`${model.color} h-2 rounded-full transition-all duration-300`}
									style={{ width: `${model.percent}%` }}
								/>
							</div>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
