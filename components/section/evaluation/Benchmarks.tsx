import BenchmarkResults from "./BenchmarkResults"
import BenchmarkComparison from "./BenchmarkComparison"
import AvailableBenchmarks from "./AvailableBenchmarks"

export default function Benchmarks() {
	return (
		<>
			<BenchmarkResults />
			<div className="grid gap-6 md:grid-cols-2">
				<BenchmarkComparison />
				<AvailableBenchmarks />
			</div>
		</>
	)
}