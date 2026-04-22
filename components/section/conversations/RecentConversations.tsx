import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MoreHorizontal } from "lucide-react"

const conversations = [
	{
		id: "CONV-1234",
		model: "GPT-4o",
		user: "john@example.com",
		date: "Today, 10:30 AM",
		messages: 12,
		status: "Completed",
	},
	{
		id: "CONV-1233",
		model: "Claude 3",
		user: "sarah@example.com",
		date: "Today, 9:15 AM",
		messages: 8,
		status: "Completed",
	},
	{
		id: "CONV-1232",
		model: "GPT-4o",
		user: "alex@example.com",
		date: "Yesterday, 4:45 PM",
		messages: 15,
		status: "Completed",
	},
	{
		id: "CONV-1231",
		model: "Llama 3",
		user: "maria@example.com",
		date: "Yesterday, 2:30 PM",
		messages: 6,
		status: "Completed",
	},
	{
		id: "CONV-1230",
		model: "GPT-4o",
		user: "james@example.com",
		date: "Yesterday, 11:20 AM",
		messages: 10,
		status: "Completed",
	},
]

export default function RecentConversations() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Recent Conversations</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Model</TableHead>
							<TableHead>User</TableHead>
							<TableHead>Date</TableHead>
							<TableHead>Messages</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Actions</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{conversations.map((conversation) => (
							<TableRow key={conversation.id}>
								<TableCell className="font-medium">{conversation.id}</TableCell>
								<TableCell>{conversation.model}</TableCell>
								<TableCell>{conversation.user}</TableCell>
								<TableCell>{conversation.date}</TableCell>
								<TableCell>{conversation.messages}</TableCell>
								<TableCell>
									<Badge variant="outline">{conversation.status}</Badge>
								</TableCell>
								<TableCell>
									<DropdownMenu>
										<DropdownMenuTrigger asChild>
											<Button variant="ghost" size="icon">
												<MoreHorizontal className="h-4 w-4" />
												<span className="sr-only">Actions</span>
											</Button>
										</DropdownMenuTrigger>
										<DropdownMenuContent align="end">
											<DropdownMenuLabel>Actions</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuItem>View Details</DropdownMenuItem>
											<DropdownMenuItem>Download Transcript</DropdownMenuItem>
											<DropdownMenuItem>Analyze Sentiment</DropdownMenuItem>
											<DropdownMenuSeparator />
											<DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
										</DropdownMenuContent>
									</DropdownMenu>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	)
}