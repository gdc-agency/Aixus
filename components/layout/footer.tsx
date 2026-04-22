import { cn } from "@/lib/utils"
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react"
import Link from "next/link"
import { HTMLAttributes } from "react"

interface SiteFooterProps extends HTMLAttributes<HTMLElement> {
	className?: string
}

export function SiteFooter({ className, ...props }: SiteFooterProps) {
	return (
		<footer
			className={cn(
				"mx-auto fixed bottom-0 left-0 right-0 z-0 bg-background/80 backdrop-blur-xl border-b border-border/50 lg:left-[280px] transition-all duration-300",
				className
			)}
			{...props}
		>
			<div className="flex h-16 items-center justify-between px-6">
				<p className="text-sm text-muted-foreground bg-card shadow-none px-4 py-2 rounded-full">
					© Copyright <span className="text-primary">
						<a href="https://globaldigitalcare.pk">Global Digital Care</a></span> | All Rights Reserved
				</p>
				<div className="flex items-center space-x-4 bg-card shadow-none px-4 py-2 rounded-full">
					<Link href="#" className="text-muted-foreground hover:text-foreground">
						<Facebook className="h-4 w-4" />
						<span className="sr-only">Facebook</span>
					</Link>
					<Link href="#" className="text-muted-foreground hover:text-foreground">
						<Twitter className="h-4 w-4" />
						<span className="sr-only">Twitter</span>
					</Link>
					<Link href="#" className="text-muted-foreground hover:text-foreground">
						<Linkedin className="h-4 w-4" />
						<span className="sr-only">LinkedIn</span>
					</Link>
					<Link href="#" className="text-muted-foreground hover:text-foreground">
						<Youtube className="h-4 w-4" />
						<span className="sr-only">YouTube</span>
					</Link>
				</div>
			</div>
		</footer>
	)
}