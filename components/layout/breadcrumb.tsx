import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

// Define types for breadcrumb items
interface BreadcrumbItem {
	title: string
	href: string
}

// Define props interface
interface BreadcrumbProps {
	title: string
	subtitle?: string
	items?: BreadcrumbItem[]
}

export function Breadcrumb({ title, subtitle, items = [] }: BreadcrumbProps) {
	return (
		<div className="py-4">
			<div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
				<div className="flex flex-col gap-1">
					<h1 className="text-2xl font-bold tracking-tight">{title}</h1>
					{subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
				</div>
				{items.length > 0 && (
					<nav className="flex items-center space-x-1 text-sm text-muted-foreground">
						{items.map((item, index) => (
							<div key={item.href} className="flex items-center">
								{index > 0 && <ChevronRight className="h-4 w-4" />}
								<Link
									href={item.href}
									className={cn(
										"hover:text-foreground",
										index === items.length - 1 ? "text-foreground pointer-events-none" : "hover:underline"
									)}
								>
									{item.title}
								</Link>
							</div>
						))}
					</nav>
				)}
			</div>
		</div>
	)
}