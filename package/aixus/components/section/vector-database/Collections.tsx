import VectorCollections from "./VectorCollections"
import StorageUsage from "./StorageUsage"
import QuickActions from "./QuickActions"

export default function Collections() {
	return (
		<>
			<VectorCollections />
			<div className="grid gap-6 xl:grid-cols-2">
				<StorageUsage />
				<QuickActions />
			</div>
		</>
	)
}