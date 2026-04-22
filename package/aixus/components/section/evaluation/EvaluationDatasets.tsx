import DatasetTable from "./DatasetTable"
import DatasetAnalytics from "./DatasetAnalytics"
import CreateDataset from "./CreateDataset"

export default function EvaluationDatasets() {
	return (
		<>
			<DatasetTable />
			<div className="grid gap-6 md:grid-cols-2">
				<DatasetAnalytics />
				<CreateDataset />
			</div>
		</>
	)
}