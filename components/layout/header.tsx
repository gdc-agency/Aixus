"use client"

import { ModeToggle } from "@/components/elements/mode-toggle"
import { UserNav } from "@/components/elements/user-nav"
import { Input } from "@/components/ui/input"
import { Menu, Search, X } from "lucide-react"
import Link from "next/link"
import { Dispatch, SetStateAction } from "react"
import { UserNotification } from "../elements/user-notification"

interface DashboardHeaderProps {
	mobileOpen: boolean
	setMobileOpen: Dispatch<SetStateAction<boolean>>
}

export function DashboardHeader({ mobileOpen, setMobileOpen }: DashboardHeaderProps) {
	return (
		<>
			<header className="mx-auto fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-0 border-border/50 lg:left-[280px] transition-all duration-300">
				<div className="flex h-[69px] items-center justify-between px-6">
					{/* Mobile Menu Button */}
					<button
						className="lg:hidden p-2 rounded-xl hover:bg-accent transition-all duration-200 hover:scale-105 active:scale-95"
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label="Toggle mobile menu"
					>
						{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>

					{/* Search Bar (Desktop) */}
					<div className="relative w-full max-w-md hidden md:block">
						<Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Search models, conversations, or documentation..."
							className="w-full pl-11 pr-4 bg-primary/5 border-0 shadow-none rounded-2xl h-12"
						/>
					</div>

					{/* Mobile Search */}
					<div className="flex-1 mx-4 md:hidden">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input
								type="search"
								placeholder="Search..."
								className="w-full pl-10 pr-4 bg-card/50 border-0 shadow-none rounded-xl h-10 focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-0"
							/>
						</div>
					</div>

					{/* Actions */}
					<div className="flex items-center gap-2">
						<Link
							href="/documentation"
							className="hidden md:inline-block text-sm font-medium bg-primary text-white px-3 py-2 rounded-lg"
						>
							Docs
						</Link>
						<ModeToggle />
						<UserNotification />
						<UserNav />
					</div>
				</div>
			</header>

			{/* Mobile Backdrop */}
			{mobileOpen && (
				<div
					className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden transition-opacity duration-300 pointer-events-auto"
					onClick={() => setMobileOpen(false)}
				/>
			)}
		</>
	)
}
