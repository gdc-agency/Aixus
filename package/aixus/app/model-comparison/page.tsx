import Layout from "@/components/layout"
import ModelComparison from "@/components/section/model-comparison"
// import { ModelComparison } from "@/components/model-comparison"

export default function ModelComparisonPage() {
	return (
		<Layout >
			<div className="space-y-6">
				<div>
					<h1 className="text-xl font-bold tracking-tight">Model Comparison</h1>
					<p className="text-muted-foreground">Compare responses from different AI models side by side.</p>
				</div>

				<ModelComparison />
			</div >
		</Layout>
	)
}
