import Layout from "@/components/layout"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Edit, Mail, MoreHorizontal, Plus, Shield, Trash, User } from "lucide-react"

export default function TeamMembersPage() {
	return (
		<Layout >
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Team Members</h1>
						<p className="text-muted-foreground">Manage your team and member permissions.</p>
					</div>
					<Dialog>
						<DialogTrigger asChild>
							<Button>
								<Plus className="mr-2 h-4 w-4" /> Add Member
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Add Team Member</DialogTitle>
								<DialogDescription>
									Invite a new member to join your team. They will receive an email invitation.
								</DialogDescription>
							</DialogHeader>
							<div className="grid gap-4 py-4">
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="name" className="text-right">
										Name
									</Label>
									<Input id="name" placeholder="John Doe" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="email" className="text-right">
										Email
									</Label>
									<Input id="email" placeholder="john@example.com" type="email" className="col-span-3" />
								</div>
								<div className="grid grid-cols-4 items-center gap-4">
									<Label htmlFor="role" className="text-right">
										Role
									</Label>
									<Select>
										<SelectTrigger id="role" className="col-span-3">
											<SelectValue placeholder="Select role" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="admin">Admin</SelectItem>
											<SelectItem value="developer">Developer</SelectItem>
											<SelectItem value="viewer">Viewer</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
							<DialogFooter>
								<Button type="submit">Send Invitation</Button>
							</DialogFooter>
						</DialogContent>
					</Dialog>
				</div>

				<Tabs defaultValue="all">
					<TabsList>
						<TabsTrigger value="all">All Members</TabsTrigger>
						<TabsTrigger value="admins">Admins</TabsTrigger>
						<TabsTrigger value="developers">Developers</TabsTrigger>
						<TabsTrigger value="viewers">Viewers</TabsTrigger>
					</TabsList>

					<TabsContent value="all" className="space-y-6">
						<Card>
							<CardHeader className="pb-3">
								<CardTitle>Team Members</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Name</TableHead>
											<TableHead>Email</TableHead>
											<TableHead>Role</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Last Active</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[
											{
												name: "John Doe",
												email: "john@example.com",
												role: "Admin",
												status: "Active",
												lastActive: "Just now",
												avatar: "JD",
											},
											{
												name: "Sarah Kim",
												email: "sarah@example.com",
												role: "Developer",
												status: "Active",
												lastActive: "5 minutes ago",
												avatar: "SK",
											},
											{
												name: "Alex Chen",
												email: "alex@example.com",
												role: "Developer",
												status: "Active",
												lastActive: "1 hour ago",
												avatar: "AC",
											},
											{
												name: "Maria Garcia",
												email: "maria@example.com",
												role: "Viewer",
												status: "Inactive",
												lastActive: "2 days ago",
												avatar: "MG",
											},
											{
												name: "James Wilson",
												email: "james@example.com",
												role: "Admin",
												status: "Active",
												lastActive: "3 hours ago",
												avatar: "JW",
											},
										].map((member) => (
											<TableRow key={member.email}>
												<TableCell>
													<div className="flex items-center gap-3">
														<Avatar>
															<AvatarImage
																src={`/placeholder.svgheight=40&width=40&query=user ${member.name}`}
															/>
															<AvatarFallback>{member.avatar}</AvatarFallback>
														</Avatar>
														<span className="font-medium">{member.name}</span>
													</div>
												</TableCell>
												<TableCell>{member.email}</TableCell>
												<TableCell>
													<Badge
														variant={
															member.role === "Admin" ? "default" : member.role === "Developer" ? "outline" : "secondary"
														}
														className="flex w-fit items-center gap-1"
													>
														{member.role === "Admin" && <Shield className="h-3 w-3" />}
														{member.role}
													</Badge>
												</TableCell>
												<TableCell>
													<Badge
														variant={member.status === "Active" ? "default" : "secondary"}
														className={`${member.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}`}
													>
														{member.status}
													</Badge>
												</TableCell>
												<TableCell>{member.lastActive}</TableCell>
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
															<DropdownMenuItem>
																<Edit className="mr-2 h-4 w-4" />
																<span>Edit Member</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Mail className="mr-2 h-4 w-4" />
																<span>Send Message</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Copy className="mr-2 h-4 w-4" />
																<span>Copy Email</span>
															</DropdownMenuItem>
															<DropdownMenuSeparator />
															<DropdownMenuItem className="text-red-600">
																<Trash className="mr-2 h-4 w-4" />
																<span>Remove Member</span>
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>

						<div className="grid gap-6 md:grid-cols-2">
							<Card>
								<CardHeader>
									<CardTitle>Activity Log</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-4">
										{[
											{
												user: "John Doe",
												action: "Added new team member",
												target: "Sarah Kim",
												time: "2 hours ago",
											},
											{
												user: "Sarah Kim",
												action: "Updated model permissions",
												target: "GPT-4o",
												time: "5 hours ago",
											},
											{
												user: "Alex Chen",
												action: "Created new API key",
												target: "Production API",
												time: "Yesterday",
											},
											{
												user: "James Wilson",
												action: "Changed role for",
												target: "Maria Garcia",
												time: "2 days ago",
											},
											{
												user: "John Doe",
												action: "Deployed new model",
												target: "Custom Classifier",
												time: "3 days ago",
											},
										].map((activity, index) => (
											<div key={index} className="flex items-start gap-4">
												<div className="rounded-full bg-muted p-2">
													<User className="h-4 w-4" />
												</div>
												<div className="flex-1 space-y-1">
													<p className="text-sm font-medium leading-none">
														<span className="font-semibold">{activity.user}</span> {activity.action}{" "}
														<span className="font-semibold">{activity.target}</span>
													</p>
													<p className="text-xs text-muted-foreground">{activity.time}</p>
												</div>
											</div>
										))}
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Role Permissions</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="space-y-6">
										<div className="space-y-2">
											<h3 className="text-sm font-medium flex items-center">
												<Shield className="h-4 w-4 mr-2 text-primary" />
												Admin
											</h3>
											<ul className="text-sm space-y-1 ml-6 list-disc text-muted-foreground">
												<li>Full access to all features and settings</li>
												<li>Can add, edit, and remove team members</li>
												<li>Can manage billing and subscriptions</li>
												<li>Can deploy and manage all AI models</li>
												<li>Can create and manage API keys</li>
											</ul>
										</div>

										<div className="space-y-2">
											<h3 className="text-sm font-medium flex items-center">
												<User className="h-4 w-4 mr-2 text-primary" />
												Developer
											</h3>
											<ul className="text-sm space-y-1 ml-6 list-disc text-muted-foreground">
												<li>Can use all AI models and features</li>
												<li>Can create and manage their own API keys</li>
												<li>Can view team members but not modify</li>
												<li>Can view but not modify billing</li>
												<li>Can deploy models with approval</li>
											</ul>
										</div>

										<div className="space-y-2">
											<h3 className="text-sm font-medium flex items-center">
												<User className="h-4 w-4 mr-2 text-muted-foreground" />
												Viewer
											</h3>
											<ul className="text-sm space-y-1 ml-6 list-disc text-muted-foreground">
												<li>Can use selected AI models</li>
												<li>Read-only access to analytics</li>
												<li>Cannot create API keys</li>
												<li>Cannot view billing information</li>
												<li>Cannot modify team or settings</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</TabsContent>

					<TabsContent value="admins" className="space-y-6">
						<Card>
							<CardHeader className="pb-3">
								<CardTitle>Admin Members</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Name</TableHead>
											<TableHead>Email</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Last Active</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[
											{
												name: "John Doe",
												email: "john@example.com",
												status: "Active",
												lastActive: "Just now",
												avatar: "JD",
											},
											{
												name: "James Wilson",
												email: "james@example.com",
												status: "Active",
												lastActive: "3 hours ago",
												avatar: "JW",
											},
										].map((member) => (
											<TableRow key={member.email}>
												<TableCell>
													<div className="flex items-center gap-3">
														<Avatar>
															<AvatarImage
																src={`/placeholder.svgheight=40&width=40&query=user ${member.name}`}
															/>
															<AvatarFallback>{member.avatar}</AvatarFallback>
														</Avatar>
														<span className="font-medium">{member.name}</span>
													</div>
												</TableCell>
												<TableCell>{member.email}</TableCell>
												<TableCell>
													<Badge
														variant={member.status === "Active" ? "default" : "secondary"}
														className={`${member.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}`}
													>
														{member.status}
													</Badge>
												</TableCell>
												<TableCell>{member.lastActive}</TableCell>
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
															<DropdownMenuItem>
																<Edit className="mr-2 h-4 w-4" />
																<span>Edit Member</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Mail className="mr-2 h-4 w-4" />
																<span>Send Message</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Copy className="mr-2 h-4 w-4" />
																<span>Copy Email</span>
															</DropdownMenuItem>
															<DropdownMenuSeparator />
															<DropdownMenuItem className="text-red-600">
																<Trash className="mr-2 h-4 w-4" />
																<span>Remove Member</span>
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="developers" className="space-y-6">
						<Card>
							<CardHeader className="pb-3">
								<CardTitle>Developer Members</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Name</TableHead>
											<TableHead>Email</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Last Active</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[
											{
												name: "Sarah Kim",
												email: "sarah@example.com",
												status: "Active",
												lastActive: "5 minutes ago",
												avatar: "SK",
											},
											{
												name: "Alex Chen",
												email: "alex@example.com",
												status: "Active",
												lastActive: "1 hour ago",
												avatar: "AC",
											},
										].map((member) => (
											<TableRow key={member.email}>
												<TableCell>
													<div className="flex items-center gap-3">
														<Avatar>
															<AvatarImage
																src={`/placeholder.svgheight=40&width=40&query=user ${member.name}`}
															/>
															<AvatarFallback>{member.avatar}</AvatarFallback>
														</Avatar>
														<span className="font-medium">{member.name}</span>
													</div>
												</TableCell>
												<TableCell>{member.email}</TableCell>
												<TableCell>
													<Badge
														variant={member.status === "Active" ? "default" : "secondary"}
														className={`${member.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}`}
													>
														{member.status}
													</Badge>
												</TableCell>
												<TableCell>{member.lastActive}</TableCell>
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
															<DropdownMenuItem>
																<Edit className="mr-2 h-4 w-4" />
																<span>Edit Member</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Mail className="mr-2 h-4 w-4" />
																<span>Send Message</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Copy className="mr-2 h-4 w-4" />
																<span>Copy Email</span>
															</DropdownMenuItem>
															<DropdownMenuSeparator />
															<DropdownMenuItem className="text-red-600">
																<Trash className="mr-2 h-4 w-4" />
																<span>Remove Member</span>
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="viewers" className="space-y-6">
						<Card>
							<CardHeader className="pb-3">
								<CardTitle>Viewer Members</CardTitle>
							</CardHeader>
							<CardContent>
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Name</TableHead>
											<TableHead>Email</TableHead>
											<TableHead>Status</TableHead>
											<TableHead>Last Active</TableHead>
											<TableHead>Actions</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[
											{
												name: "Maria Garcia",
												email: "maria@example.com",
												status: "Inactive",
												lastActive: "2 days ago",
												avatar: "MG",
											},
										].map((member) => (
											<TableRow key={member.email}>
												<TableCell>
													<div className="flex items-center gap-3">
														<Avatar>
															<AvatarImage
																src={`/placeholder.svgheight=40&width=40&query=user ${member.name}`}
															/>
															<AvatarFallback>{member.avatar}</AvatarFallback>
														</Avatar>
														<span className="font-medium">{member.name}</span>
													</div>
												</TableCell>
												<TableCell>{member.email}</TableCell>
												<TableCell>
													<Badge
														variant={member.status === "Active" ? "default" : "secondary"}
														className={`${member.status === "Active" ? "bg-green-500 hover:bg-green-600" : ""}`}
													>
														{member.status}
													</Badge>
												</TableCell>
												<TableCell>{member.lastActive}</TableCell>
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
															<DropdownMenuItem>
																<Edit className="mr-2 h-4 w-4" />
																<span>Edit Member</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Mail className="mr-2 h-4 w-4" />
																<span>Send Message</span>
															</DropdownMenuItem>
															<DropdownMenuItem>
																<Copy className="mr-2 h-4 w-4" />
																<span>Copy Email</span>
															</DropdownMenuItem>
															<DropdownMenuSeparator />
															<DropdownMenuItem className="text-red-600">
																<Trash className="mr-2 h-4 w-4" />
																<span>Remove Member</span>
															</DropdownMenuItem>
														</DropdownMenuContent>
													</DropdownMenu>
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
