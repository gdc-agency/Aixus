import AgentConfiguration from "./AgentConfiguration"
import ToolsCapabilities from "./ToolsCapabilities"
import TestingValidation from "./TestingValidation"
import AgentPreview from "./AgentPreview"
import DeploymentOptions from "./DeploymentOptions"

export default function Builder() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			<div className="md:col-span-2 space-y-6">
				<AgentConfiguration />
				<ToolsCapabilities />
				<TestingValidation />
			</div>
			<div className="space-y-6">
				<AgentPreview />
				<DeploymentOptions />
			</div>
		</div>
	)
}