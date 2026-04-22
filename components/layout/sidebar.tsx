"use client"

import { cn } from "@/lib/utils"
import {
	BarChart3,
	Bot,
	Code,
	CreditCard,
	Database,
	FileText,
	FlaskConical,
	Gauge,
	GitBranch,
	Globe,
	Layers,
	LayoutDashboard,
	MessageSquare,
	Rocket,
	Settings,
	Sparkles,
	Wand2,
	X,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"
import { Logo } from "../elements/logo"

// Define types for navigation items
interface NavItem {
  title: string
  icon: React.ComponentType<{ className?: string }>
  href: string
  badge: string | null
}

interface NavSection {
  title?: string
  items: NavItem[]
}

// Navigation configuration
const navigationSections: NavSection[] = [
	{
		items: [
			{ title: "Dashboard", icon: LayoutDashboard, href: "/", badge: null },
			{ title: "Models", icon: Bot, href: "/models", badge: "12" },
			{ title: "Analytics", icon: BarChart3, href: "/analytics", badge: null },
			{ title: "Conversations", icon: MessageSquare, href: "/conversations", badge: "3" },
		],
	},
	{
		title: "AI Tools",
		items: [
			{ title: "Playground", icon: Sparkles, href: "/playground", badge: "New" },
			{ title: "Fine-tuning", icon: FlaskConical, href: "/fine-tuning", badge: null },
			{ title: "Prompt Templates", icon: Wand2, href: "/prompts", badge: null },
			{ title: "Model Comparison", icon: FileText, href: "/model-comparison", badge: null },
			{ title: "Agent Builder", icon: Rocket, href: "/agent-builder", badge: "Beta" },
			{ title: "Vector Database", icon: Database, href: "/vector-database", badge: null },
			{ title: "Deployments", icon: Globe, href: "/deployments", badge: null },
			{ title: "Evaluation", icon: Gauge, href: "/evaluation", badge: null },
		],
	},
	{
		title: "Development",
		items: [
			{ title: "API Documentation", icon: Code, href: "/api-docs", badge: null },
			{ title: "Experiments", icon: GitBranch, href: "/experiments", badge: null },
			{ title: "Model Registry", icon: Layers, href: "/model-registry", badge: null },
		],
	},
	{
		title: "Management",
		items: [
			{ title: "Billing", icon: CreditCard, href: "/billing", badge: null },
			{ title: "Settings", icon: Settings, href: "/settings", badge: null },
		],
	},
]

// Navigation component
interface MainNavProps {
  onItemClick: () => void
}

function MainNav({ onItemClick }: MainNavProps) {
	const pathname = usePathname()

	return (
		<div className="relative h-[calc(100vh-5rem)] overflow-hidden">
			<PerfectScrollbar className="flex flex-col gap-1 w-full px-3 py-2">
				{navigationSections.map((section, sectionIndex) => (
					<div key={sectionIndex} className="w-full mb-6 last:mb-0">
						{section.title && (
							<div className="flex items-center justify-between w-full px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
								<span>{section.title}</span>
							</div>
						)}
						<div className="space-y-1">
							{section.items.map((item) => {
								const isActive = pathname === item.href
								return (
									<Link
										key={item.href}
										href={item.href}
										onClick={onItemClick}
										className={cn(
											"group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium w-full justify-start",
											isActive ? "bg-primary text-white" : "text-gray-300"
										)}
									>
										<item.icon
											className={cn(
												"shrink-0 h-5 w-5",
												isActive ? "text-white" : "text-gray-300"
											)}
										/>
										<span className="truncate">{item.title}</span>
										{item.badge && (
											<span
												className={cn(
													"ml-auto px-2 py-0.5 text-xs font-medium rounded-full",
													item.badge === "New"
														? "bg-green-500/20 text-green-400 border border-green-500/30"
														: item.badge === "Beta"
															? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
															: "bg-primary text-gray-300"
												)}
											>
												{item.badge}
											</span>
										)}
									</Link>
								)
							})}
						</div>
					</div>
				))}
			</PerfectScrollbar>
		</div>
	)
}

// Promo Card component
function PromoCard() {
	return (
		<div className="p-2">
			<div className="bg-gradient-to-r from-primary/10 to-gray-600/10 rounded-xl p-4 m-2 border border-primary">
				<h3 className="text-sm font-semibold text-white">Upgrade to Pro</h3>
				<p className="text-xs text-gray-300 mt-1">Unlock premium features and boost productivity!</p>
				<Link
					href="/pricing"
					className="inline-block mt-3 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg"
				>
					Learn More
				</Link>
			</div>
		</div>
	)
}

// Unified Sidebar component
interface DashboardSidebarProps {
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

export function DashboardSidebar({ mobileOpen, setMobileOpen }: DashboardSidebarProps) {
	return (
		<div
			className={cn(
				"flex flex-col bg-black fixed top-0 left-0 bottom-0 z-[60] w-[280px] border-0 transition-transform duration-300 ease-out",
				!mobileOpen && "lg:translate-x-0 -translate-x-full"
			)}
		>
			{/* Header */}
			<div className="flex border-b border-gray-900 h-[88px] py-4 px-8">
				<Link href="/" className="flex items-center gap-3">
					<Logo size="md" />
				</Link>
				<button
					onClick={() => setMobileOpen(false)}
					className="ml-auto p-2 rounded-lg bg-gray-800 md:hidden"
				>
					<X className="h-5 w-5 text-gray-300" />
				</button>
			</div>

			{/* Navigation */}
			<div className="flex-1 p-2">
				<MainNav onItemClick={() => setMobileOpen(false)} />
			</div>

			{/* Promo Card */}
			{!mobileOpen && <PromoCard />}
		</div>
	)
}