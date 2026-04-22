import ApiEndpoints from "./ApiEndpoints"
import EndpointDetails from "./EndpointDetails"
import CodeExamples from "./CodeExamples"

export default function ApiReference() {
	return (
		<div className="grid gap-6 md:grid-cols-4">
			<div className="md:col-span-1 space-y-6">
				<ApiEndpoints />
			</div>
			<div className="md:col-span-3 space-y-6">
				<EndpointDetails />
				<CodeExamples />
			</div>
		</div>
	)
}