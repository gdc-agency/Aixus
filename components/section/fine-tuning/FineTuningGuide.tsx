import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function FineTuningGuide() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Fine-tuning Guide</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-6">
					<div className="grid gap-6 md:grid-cols-3">
						<div className="space-y-2">
							<h3 className="text-lg font-medium">1. Prepare Your Data</h3>
							<p className="text-sm text-muted-foreground">
								Ensure your training data is high-quality, diverse, and properly formatted. Clean your data to remove
								inconsistencies and errors.
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-lg font-medium">2. Choose the Right Base Model</h3>
							<p className="text-sm text-muted-foreground">
								Select a base model that's closest to your target task. This reduces training time and improves
								results.
							</p>
						</div>
						<div className="space-y-2">
							<h3 className="text-lg font-medium">3. Monitor Training Progress</h3>
							<p className="text-sm text-muted-foreground">
								Keep an eye on loss metrics and validation performance. Stop training when performance plateaus to
								avoid overfitting.
							</p>
						</div>
					</div>

					<Separator />

					<div className="space-y-2">
						<h3 className="text-lg font-medium">Recommended Dataset Sizes</h3>
						<div className="grid gap-4 md:grid-cols-4">
							<div className="rounded-lg border p-3">
								<div className="text-sm font-medium">Classification</div>
								<div className="mt-1 text-2xl font-bold">1,000+</div>
								<div className="text-xs text-muted-foreground">examples</div>
							</div>
							<div className="rounded-lg border p-3">
								<div className="text-sm font-medium">Summarization</div>
								<div className="mt-1 text-2xl font-bold">5,000+</div>
								<div className="text-xs text-muted-foreground">examples</div>
							</div>
							<div className="rounded-lg border p-3">
								<div className="text-sm font-medium">Conversation</div>
								<div className="mt-1 text-2xl font-bold">10,000+</div>
								<div className="text-xs text-muted-foreground">examples</div>
							</div>
							<div className="rounded-lg border p-3">
								<div className="text-sm font-medium">Code Generation</div>
								<div className="mt-1 text-2xl font-bold">8,000+</div>
								<div className="text-xs text-muted-foreground">examples</div>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}