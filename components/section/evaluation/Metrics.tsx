import MetricCards from "./MetricCards"
import PerformanceCharts from "./PerformanceCharts"
import ModelPerformance from "./ModelPerformance"

export default function Metrics() {
	return (
		<>
			<MetricCards />
			<PerformanceCharts />
			<ModelPerformance />
		</>
	)
}