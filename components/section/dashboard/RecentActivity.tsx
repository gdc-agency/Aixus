"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
	{
		user: "John Doe",
		action: "Deployed GPT-4o model",
		time: "2 hours ago",
		avatar: "JD",
		image: "/images/avatar/1.jpg",
	},
	{
		user: "Sarah Kim",
		action: "Updated Claude 3 parameters",
		time: "5 hours ago",
		avatar: "SK",
		image: "/images/avatar/2.jpg",
	},
	{
		user: "Alex Chen",
		action: "Created new fine-tuned model",
		time: "Yesterday",
		avatar: "AC",
		image: "/images/avatar/3.jpg",
	},
	{
		user: "Maria Garcia",
		action: "Added team member",
		time: "2 days ago",
		avatar: "MG",
		image: "/images/avatar/4.jpg",
	},
]

export default function RecentActivity() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Recent Activity</CardTitle>
			</CardHeader>
			<CardContent className="space-y-3">
				{activities.map((activity, index) => (
					<div
						key={index}
						className="flex items-center gap-4 py-3 rounded-lg hover:bg-muted/10 transition-colors"
					>
						{/* Avatar */}
						<Avatar className="w-12 h-12 shadow-none">
							{activity.image ? (
								<AvatarImage
									src={activity.image}
									alt={activity.user}
									onError={(e) => {
										e.currentTarget.src = "/images/avatar/default.jpg"
									}}
								/>
							) : null}
							<AvatarFallback>{activity.avatar}</AvatarFallback>
						</Avatar>

						{/* User info */}
						<div className="flex-1">
							<p className="text-sm font-semibold text-foreground">{activity.user}</p>
							<p className="text-sm text-muted-foreground">{activity.action}</p>
						</div>

						{/* Timestamp */}
						<div className="text-xs text-muted-foreground">{activity.time}</div>
					</div>
				))}
			</CardContent>
		</Card>
	)
}
