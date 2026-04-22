import DeploymentsTable from "./DeploymentsTable"
import DeploymentHealth from "./DeploymentHealth"
import RecentDeployments from "./RecentDeployments"
import QuickActions from "./QuickActions"

export default function ActiveDeployments() {
	return (
		<>
			<DeploymentsTable />
			<div className="grid gap-6 md:grid-cols-3">
				<DeploymentHealth />
				<RecentDeployments />
				<QuickActions />
			</div>
		</>
	)
}