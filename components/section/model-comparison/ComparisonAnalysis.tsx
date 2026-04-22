import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface ModelResponse {
	model: string
	response: string
	responseTime: string
	tokenCount: number
	isGenerating: boolean
}

interface ComparisonAnalysisProps {
	modelResponses: ModelResponse[]
}

export default function ComparisonAnalysis({ modelResponses }: ComparisonAnalysisProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Model Comparison</CardTitle>
			</CardHeader>
			<CardContent>
				{!modelResponses.some((model) => model.response) ? (
					<div className="flex flex-col items-center justify-center py-8 text-center">
						<h3 className="text-lg font-medium">No comparison available</h3>
						<p className="text-sm text-muted-foreground mt-1 max-w-md">
							Enter a prompt and compare models to see an analysis of their responses.
						</p>
					</div>
				) : (
					<div className="space-y-6">
						<div className="grid gap-6 md:grid-cols-3">
							<div className="space-y-2">
								<h3 className="text-sm font-medium">Response Time</h3>
								<div className="space-y-2">
									{modelResponses.map(
										(model, index) =>
											model.responseTime && (
												<div key={index} className="flex items-center justify-between">
													<span className="text-sm">{model.model}</span>
													<span className="text-sm font-medium">{model.responseTime}</span>
												</div>
											),
									)}
								</div>
							</div>
							<div className="space-y-2">
								<h3 className="text-sm font-medium">Token Usage</h3>
								<div className="space-y-2">
									{modelResponses.map(
										(model, index) =>
											model.tokenCount > 0 && (
												<div key={index} className="flex items-center justify-between">
													<span className="text-sm">{model.model}</span>
													<span className="text-sm font-medium">{model.tokenCount} tokens</span>
												</div>
											),
									)}
								</div>
							</div>
							<div className="space-y-2">
								<h3 className="text-sm font-medium">Response Length</h3>
								<div className="space-y-2">
									{modelResponses.map(
										(model, index) =>
											model.response && (
												<div key={index} className="flex items-center justify-between">
													<span className="text-sm">{model.model}</span>
													<span className="text-sm font-medium">{model.response.length} chars</span>
												</div>
											),
									)}
								</div>
							</div>
						</div>

						<Separator />

						<div className="space-y-2">
							<h3 className="text-sm font-medium">Key Differences</h3>
							<p className="text-sm">
								GPT-4o provides a more concise explanation with technical details, while Claude 3 offers a more
								conceptual overview with philosophical undertones. Llama 3 balances technical and conceptual aspects
								with a focus on the architectural components.
							</p>
						</div>

						<div className="space-y-2">
							<h3 className="text-sm font-medium">Recommendation</h3>
							<p className="text-sm">
								For this particular prompt, GPT-4o provides the most balanced response in terms of clarity,
								conciseness, and technical accuracy. However, if you need more technical details about model
								architecture, Llama 3's response might be more suitable.
							</p>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}