"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, Settings, User, Wallet } from "lucide-react"
import Link from "next/link"

export function UserNav() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="h-9 w-9 rounded-full hover:bg-transparent">
					<Avatar className="h-8 w-8">
						<AvatarImage src="/images/avatar/11.jpg?height=32&width=32" alt="@hafsa" />
						<AvatarFallback>HH</AvatarFallback>
					</Avatar>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<div className="flex items-center gap-3 p-3">
					<Avatar className="h-9 w-9">
						<AvatarImage src="/images/avatar/11.jpg?height=36&width=36" alt="@hafsa" />
						<AvatarFallback>HH</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<p className="text-sm font-medium">Hafsa Humaira</p>
						<p className="text-xs text-muted-foreground">hello@email.com</p>
					</div>
				</div>
				<DropdownMenuSeparator />
				<Link href="/profile" className="w-full">
					<DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
						<User className="h-4 w-4" />
						<span>Profile</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/wallets" className="w-full">
					<DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
						<Wallet className="h-4 w-4" />
						<span>Wallets</span>
					</DropdownMenuItem>
				</Link>
				<Link href="/settings" className="w-full">
					<DropdownMenuItem className="flex items-center gap-3 p-3 cursor-pointer">
						<Settings className="h-4 w-4" />
						<span>Settings</span>
					</DropdownMenuItem>
				</Link>
				<DropdownMenuSeparator />
				<Link href="/signin" className="w-full">
					<DropdownMenuItem className="flex items-center gap-3 p-3 text-destructive focus:text-destructive cursor-pointer">
						<LogOut className="h-4 w-4" />
						<span>Logout</span>
					</DropdownMenuItem>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

