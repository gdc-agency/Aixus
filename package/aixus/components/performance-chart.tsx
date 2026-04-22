"use client"

import { useTheme } from "next-themes"
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts"

const data = [
	{ day: "Mon", latency: 30, accuracy: 92 },
	{ day: "Tue", latency: 50, accuracy: 88 },
	{ day: "Wed", latency: 25, accuracy: 95 },
	{ day: "Thu", latency: 60, accuracy: 85 },
	{ day: "Fri", latency: 35, accuracy: 90 },
	{ day: "Sat", latency: 55, accuracy: 87 },
	{ day: "Sun", latency: 40, accuracy: 93 },
]

export function PerformanceChart() {
	const { theme } = useTheme()
	const isDark = theme === "dark"

	const textColor = isDark ? "#e2e8f0" : "#1e293b"
	const gridColor = isDark ? "rgba(148,163,184,0.1)" : "rgba(148,163,184,0.2)"

	return (
		<div className="w-full">
			<ResponsiveContainer width="100%" height={300}>
				<AreaChart
					data={data}
					margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
				>
					<defs>
						<linearGradient id="latencyGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#6366f1" stopOpacity={0.4} />
							<stop offset="95%" stopColor="#6366f1" stopOpacity={0.05} />
						</linearGradient>
						<linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
							<stop offset="5%" stopColor="#4ade80" stopOpacity={0.4} />
							<stop offset="95%" stopColor="#4ade80" stopOpacity={0.05} />
						</linearGradient>
					</defs>

					<CartesianGrid strokeDasharray="3 3" stroke={gridColor} />

					<XAxis
						dataKey="day"
						stroke={textColor}
						tickLine={false}
						axisLine={false}
						padding={{ left: 10, right: 10 }}
					/>

					<YAxis hide />

					<Tooltip
						cursor={{ opacity: 0.08 }}
						contentStyle={{
							backgroundColor: isDark ? "rgba(30,41,59,0.9)" : "rgba(255,255,255,0.95)",
							backdropFilter: "blur(6px)",
							borderColor: gridColor,
							borderRadius: "10px",
							padding: "8px 12px",
							boxShadow: isDark
								? "0 4px 12px rgba(0,0,0,0.3)"
								: "0 4px 12px rgba(0,0,0,0.1)",
						}}
					/>

					<Area
						type="monotone"
						dataKey="latency"
						stroke="#6366f1"
						strokeWidth={3}
						fill="url(#latencyGradient)"
						activeDot={{ r: 5, stroke: "#6366f1", strokeWidth: 2 }}
					/>
					<Area
						type="monotone"
						dataKey="accuracy"
						stroke="#4ade80"
						strokeWidth={3}
						fill="url(#accuracyGradient)"
						activeDot={{ r: 5, stroke: "#4ade80", strokeWidth: 2 }}
					/>
				</AreaChart>
			</ResponsiveContainer>

			<div className="flex gap-3 mt-3 justify-center">
				<LegendDot color="#6366f1" label="Latency (ms)" />
				<LegendDot color="#4ade80" label="Accuracy (%)" />
			</div>
		</div>
	)
}

function LegendDot({ color, label }) {
	return (
		<div className="flex items-center gap-2 px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800">
			<span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
			<span className="text-gray-700 dark:text-gray-300 text-xs font-medium">{label}</span>
		</div>
	)
}
