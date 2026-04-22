import ExperimentsTable from "./ExperimentsTable"
import ExperimentDetails from "./ExperimentDetails"
import PreliminaryResults from "./PreliminaryResults"
import CreateExperiment from "./CreateExperiment"

export default function ActiveExperiments() {
	return (
		<>
			<ExperimentsTable />
			<div className="grid gap-6 md:grid-cols-3">
				<ExperimentDetails />
				<PreliminaryResults />
				<CreateExperiment />
			</div>
		</>
	)
}