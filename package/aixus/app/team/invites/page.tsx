import Layout from "@/components/layout"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Copy, Plus, RefreshCw, User, X } from "lucide-react"

export default function TeamInvitesPage() {
	return (
		<Layout >
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Team Invites</h1>
						<p className="text-muted-foreground">Manage invitations to your team.</p>
					</div>
					<Dialog>
						<DialogTrigger asChild>
							<Button>
								<Plus className="mr-2 h-4 w-4" /> New Invitation
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Invite Team Member</DialogTitle>
								<DialogDescription>
									Send an invitation to join your team. They will receive an email with instructions.
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="invite-email" className="text-right">
										Email
									</Label>
									<Input id="invite-email" placeholder="colleague@example.com" type="email" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="invite-role" className="text-right">
										Role
									</Label>
									<Select>
										<SelectTrigger id="invite-role" className="col-span-3">
											<SelectValue placeholder="Select role" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="admin">Admin</SelectItem>
											<SelectItem value="developer">Developer</SelectItem>
											<SelectItem value="viewer">Viewer</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="invite-message" className="text-right">
										Message
									</Label>
									<Textarea
										id="invite-message"
										placeholder="Optional message to include in the invitation"
										className="col-span-3"
									/>
								</div>
							</div>
							<DialogFooter>
								<Button type="submit">Send Invitation</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>

				<Tabs defaultValue="pending">
					<TabsList>
						<TabsTrigger value="pending">Pending Invites</TabsTrigger>
						<TabsTrigger value="expired">Expired</TabsTrigger>
						<TabsTrigger value="accepted">Accepted</TabsTrigger>
					</TabsList>

					<TabsContent value="pending" className="space-y-6">
						<Card>
							<CardHeader className="pb-3">
								<CardTitle>Pending Invitations</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Email</TableHead>
											<TableHead>Role</TableHead>
											<TableHead>Sent By</TableHead>
											<TableHead>Sent Date</TableHead>
											<TableHead>Expires</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[
											{
												email: "david@example.com",
												role: "Developer",
												sentBy: "John Doe",
												sentDate: "Today, 10:30 AM",
												expires: "6 days",
												status: "Pending",
											},
											{
												email: "emma@example.com",
												role: "Admin",
												sentBy: "John Doe",
												sentDate: "Yesterday, 2:15 PM",
												expires: "5 days",
												status: "Pending",
											},
											{
												email: "michael@example.com",
												role: "Viewer",
												sentBy: "Sarah Kim",
												sentDate: "2 days ago",
												expires: "5 days",
												status: "Pending",
											},
										].map((invite) => (
											<TableRow key={invite.email}>
												<TableCell className="font-medium">{invite.email}</TableCell>
												<TableCell>
													<Badge variant="outline">{invite.role}</Badge>
												</TableCell>
												<TableCell>{invite.sentBy}</TableCell>
												<TableCell>{invite.sentDate}</TableCell>
												<TableCell>
													<div className="flex items-center gap-1">
														<Clock className="h-3 w-3 text-muted-foreground" />
														<span>{invite.expires}</span>
													</div>
												</TableCell>
												<TableCell>
													<Badge className="flex w-fit items-center gap-1 bg-yellow-500 hover:bg-yellow-600">
														<Clock className="h-3 w-3" />
														{invite.status}
													</Badge>
												</TableCell>
												<TableCell>
													<div className="flex items-center gap-2">
														<Button variant="outline" size="sm">
															<RefreshCw className="mr-2 h-3 w-3" />
															Resend
														</Button>
														<Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
															<X className="mr-2 h-3 w-3" />
															Cancel
														</Button>
													</div>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Invitation Link</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="flex items-center gap-4">
										<div className="flex-1">
											<Input
												readOnly
												value="https://ai-dashboard.example.com/invite/team/abc123xyz456"
												className="bg-muted"
											/>
										</div>
										<Button variant="outline">
											<Copy className="mr-2 h-4 w-4" />
											Copy
										</Button>
										<Button variant="outline">
											<RefreshCw className="mr-2 h-4 w-4" />
											Generate New
										</Button>
									</div>

									<div className="flex items-center justify-between rounded-lg border p-3">
										<div className="space-y-0.5">
											<h3 className="text-sm font-medium">Link Settings</h3>
											<p className="text-xs text-muted-foreground">
												This link grants Developer access and expires in 7 days
											</p>
										</div>
										<Button variant="outline" size="sm">
											Edit
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="expired" className="space-y-6">
						<Card>
							<CardHeader className="pb-3">
								<CardTitle>Expired Invitations</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Email</TableHead>
											<TableHead>Role</TableHead>
											<TableHead>Sent By</TableHead>
											<TableHead>Sent Date</TableHead>
											<TableHead>Expired On</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[
											{
												email: "robert@example.com",
												role: "Developer",
												sentBy: "John Doe",
												sentDate: "2 weeks ago",
												expiredOn: "1 week ago",
												status: "Expired",
											},
											{
												email: "lisa@example.com",
												role: "Viewer",
												sentBy: "Sarah Kim",
												sentDate: "3 weeks ago",
												expiredOn: "1 week ago",
												status: "Expired",
											},
										].map((invite) => (
											<TableRow key={invite.email}>
												<TableCell className="font-medium">{invite.email}</TableCell>
												<TableCell>
													<Badge variant="outline">{invite.role}</Badge>
												</TableCell>
												<TableCell>{invite.sentBy}</TableCell>
												<TableCell>{invite.sentDate}</TableCell>
												<TableCell>{invite.expiredOn}</TableCell>
												<TableCell>
													<Badge variant="secondary" className="flex w-fit items-center gap-1">
														<X className="h-3 w-3" />
														{invite.status}
													</Badge>
												</TableCell>
												<TableCell>
													<Button variant="outline" size="sm">
														<RefreshCw className="mr-2 h-3 w-3" />
														Resend
													</Button>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="accepted" className="space-y-6">
						<Card>
							<CardHeader className="pb-3">
								<CardTitle>Accepted Invitations</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Email</TableHead>
											<TableHead>Role</TableHead>
											<TableHead>Sent By</TableHead>
											<TableHead>Sent Date</TableHead>
											<TableHead>Accepted On</TableHead>
											<TableHead>Status</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[
											{
												email: "sarah@example.com",
												role: "Developer",
												sentBy: "John Doe",
												sentDate: "2 months ago",
												acceptedOn: "2 months ago",
												status: "Accepted",
											},
											{
												email: "alex@example.com",
												role: "Developer",
												sentBy: "John Doe",
												sentDate: "3 months ago",
												acceptedOn: "3 months ago",
												status: "Accepted",
											},
											{
												email: "maria@example.com",
												role: "Viewer",
												sentBy: "James Wilson",
												sentDate: "1 month ago",
												acceptedOn: "1 month ago",
												status: "Accepted",
											},
										].map((invite) => (
											<TableRow key={invite.email}>
												<TableCell className="font-medium">{invite.email}</TableCell>
												<TableCell>
													<Badge variant="outline">{invite.role}</Badge>
												</TableCell>
												<TableCell>{invite.sentBy}</TableCell>
												<TableCell>{invite.sentDate}</TableCell>
												<TableCell>{invite.acceptedOn}</TableCell>
												<TableCell>
													<Badge className="flex w-fit items-center gap-1 bg-green-500 hover:bg-green-600">
														<User className="h-3 w-3" />
														{invite.status}
													</Badge>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</Layout>
	)
}
