"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activeUsers = [
	{ name: "John Doe", status: "Active", lastActivity: "Deploying model", avatar: "JD", image: "/images/avatar/1.jpg" },
	{ name: "Sarah Kim", status: "Idle", lastActivity: "Viewing reports", avatar: "SK", image: "/images/avatar/2.jpg" },
	{ name: "Alex Chen", status: "Active", lastActivity: "Running experiment", avatar: "AC", image: "/images/avatar/3.jpg" },
	{ name: "Maria Garcia", status: "Offline", lastActivity: "Updated settings", avatar: "MG", image: "/images/avatar/4.jpg" },
]

export default function ActiveUsers() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Active Users</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				{activeUsers.map((user, index) => (
					<div
						key={index}
						className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/10 transition-colors"
					>
						{/* Avatar */}
						<Avatar className="w-12 h-12 shadow-none">
							{user.image ? (
								<AvatarImage
									src={user.image}
									alt={user.name}
									onError={(e) => {
										e.currentTarget.src = "/images/avatar/default.jpg"
									}}
								/>
							) : null}
							<AvatarFallback>{user.avatar}</AvatarFallback>
						</Avatar>

						{/* User info */}
						<div className="flex-1">
							<div className="flex items-center justify-between">
								<p className="text-sm font-semibold text-foreground">{user.name}</p>
								<Badge
									className={`text-sm font-medium ${user.status === "Active"
										? "bg-green-500 text-white"
										: user.status === "Idle"
											? "bg-yellow-500/20 text-yellow-600"
											: "bg-gray-200 text-gray-600"
										}`}
								>
									{user.status}
								</Badge>
							</div>
							<p className="text-sm text-muted-foreground">{user.lastActivity}</p>
						</div>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
