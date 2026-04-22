"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function UserNotification() {
	const [notifications, setNotifications] = useState([
		{
			id: "1",
			title: "New AI model suggestion",
			description: "A new model has been recommended based on your usage.",
			timestamp: "2 min ago",
			image: "/images/avatar/1.jpg?height=40&width=40",
			read: false,
		},
		{
			id: "2",
			title: "Performance report ready",
			description: "Your weekly AI performance metrics are now available.",
			timestamp: "1 hour ago",
			image: "/images/avatar/2.jpg?height=40&width=40",
			read: false,
		},
		{
			id: "3",
			title: "Security alert",
			description: "Suspicious login detected. Verify your account.",
			timestamp: "3 hours ago",
			image: "/images/avatar/3.jpg?height=40&width=40",
			read: false,
		},
		{
			id: "4",
			title: "AI task completed",
			description: "Your scheduled AI task has finished successfully.",
			timestamp: "5 hours ago",
			image: "/images/avatar/4.jpg?height=40&width=40",
			read: true,
		},
	])

	const unreadCount = notifications.filter((n) => !n.read).length

	const markAsRead = (id) => {
		setNotifications(
			notifications.map((n) => (n.id === id ? { ...n, read: true } : n))
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="h-10 w-10 rounded-full relative bg-card hover:bg-card/80 transition"
				>
					<Bell className="h-5 w-5 text-gray-700 dark:text-gray-200" />
					{unreadCount > 0 && (
						<Badge
							variant="destructive"
							className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
						>
							{unreadCount}
						</Badge>
					)}
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent
				align="end"
				className="w-96 bg-white dark:bg-gray-900 rounded-xl p-2"
			>
				<DropdownMenuLabel className="text-sm font-semibold text-gray-700 dark:text-gray-200">
					Notifications
				</DropdownMenuLabel>
				<DropdownMenuSeparator className="my-1" />

				<ScrollArea className="h-[320px]">
					{notifications.map((notification) => (
						<DropdownMenuItem
							key={notification.id}
							onSelect={() => markAsRead(notification.id)}
							className={`flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition ${!notification.read ? "bg-gray-50 dark:bg-gray-800" : ""
								}`}
						>
							<Image
								src={notification.image || "/images/avatar/5.jpg"}
								alt=""
								width={40}
								height={40}
								className="rounded-full object-cover"
							/>
							<div className="flex-1 flex flex-col space-y-1">
								<p className="text-sm font-medium text-gray-800 dark:text-gray-100">
									{notification.title}
								</p>
								<p className="text-xs text-gray-600 dark:text-gray-400">
									{notification.description}
								</p>
								<p className="text-xs text-gray-400 dark:text-gray-500">
									{notification.timestamp}
								</p>
							</div>
							{!notification.read && (
								<span className="h-2 w-2 mt-2 rounded-full bg-primary" />
							)}
						</DropdownMenuItem>
					))}
				</ScrollArea>

				<DropdownMenuSeparator className="my-1" />
				<DropdownMenuItem className="text-center text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition">
					View all notifications
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
