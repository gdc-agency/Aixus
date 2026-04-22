import QueryVolume from "./QueryVolume"
import CollectionGrowth from "./CollectionGrowth"
import QueryPerformance from "./QueryPerformance"
import CollectionUsage from "./CollectionUsage"

export default function Analytics() {
	return (
		<>
			<div className="grid gap-6 md:grid-cols-3">
				<QueryVolume />
				<CollectionGrowth />
				<QueryPerformance />
			</div>
			<CollectionUsage />
		</>
	)
}