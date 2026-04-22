"use client"

import { useTheme } from "next-themes"
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis
} from "recharts"

const data = [
	{ name: "Jan", GPT4: 4000, Claude: 2400, Llama: 1800 },
	{ name: "Feb", GPT4: 4200, Claude: 2800, Llama: 2000 },
	{ name: "Mar", GPT4: 5000, Claude: 3200, Llama: 2200 },
	{ name: "Apr", GPT4: 4800, Claude: 3500, Llama: 2400 },
	{ name: "May", GPT4: 5500, Claude: 3700, Llama: 2600 },
	{ name: "Jun", GPT4: 6000, Claude: 4000, Llama: 3000 },
	{ name: "Jul", GPT4: 6200, Claude: 4200, Llama: 3200 },
	{ name: "Aug", GPT4: 6400, Claude: 4300, Llama: 3300 },
	{ name: "Sep", GPT4: 6600, Claude: 4500, Llama: 3500 },
	{ name: "Oct", GPT4: 6800, Claude: 4700, Llama: 3700 },
	{ name: "Nov", GPT4: 7000, Claude: 4900, Llama: 3900 },
	{ name: "Dec", GPT4: 7200, Claude: 5100, Llama: 4100 },
]


export function UsageChart() {
	const { theme } = useTheme()
	const isDark = theme === "dark"

	const textColor = isDark ? "#f8fafc" : "#0f172a"
	const gridColor = isDark ? "#334155" : "#e2e8f0"

	// Primary color palette
	const colors = {
		GPT4: "#6366f1",      // Primary
		Claude: "#4ade80",    // Secondary/Accent
		Llama: "#f97316",     // Tertiary/Accent
	}

	return (
		<div className="flex flex-col">
			<ResponsiveContainer width="100%" height={320}>
				<BarChart
					data={data}
					barGap={6}
					margin={{ top: 20, right: 0, left: -50, bottom: 0 }}
					barCategoryGap={0}
				>
					<CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
					<XAxis
						dataKey="name"
						stroke={textColor}
						tickLine={false}
						axisLine={false}
					/>
					<YAxis stroke={textColor} tickLine={false} axisLine={false} tick={false} />

					<Tooltip
						cursor={{ opacity: 0.1 }}
						contentStyle={{
							backgroundColor: isDark ? "#1e293b" : "#ffffff",
							color: textColor,
							borderColor: gridColor,
							borderRadius: "8px",
							boxShadow: isDark
								? "0 4px 12px rgba(0,0,0,0.3)"
								: "0 4px 12px rgba(0,0,0,0.1)",
						}}
					/>

					<Bar dataKey="GPT4" fill={colors.GPT4} radius={[6, 6, 0, 0]} />
					<Bar dataKey="Claude" fill={colors.Claude} radius={[6, 6, 0, 0]} />
					<Bar dataKey="Llama" fill={colors.Llama} radius={[6, 6, 0, 0]} />
				</BarChart>
			</ResponsiveContainer>

			{/* Custom Legend */}
			<div className="flex gap-4 mt-2 justify-center text-xs">
				<LegendDot color={colors.GPT4} label="GPT-4" />
				<LegendDot color={colors.Claude} label="Claude" />
				<LegendDot color={colors.Llama} label="Llama" />
			</div>
		</div>
	)
}

function LegendDot({ color, label }: { color: string; label: string }) {
	return (
		<div className="flex items-center gap-1">
			<span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
			<span className="text-gray-700 dark:text-gray-300">{label}</span>
		</div>
	)
}
