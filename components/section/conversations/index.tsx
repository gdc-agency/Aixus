import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Search } from "lucide-react"
import ConversationAnalytics from "./ConversationAnalytics"
import ConversationExample from "./ConversationExample"
import RecentConversations from "./RecentConversations"

export default function Conversations() {
	return (
		<>
			<div className="space-y-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-xl font-bold tracking-tight">Conversations</h1>
						<p className="text-muted-foreground">View and analyze AI conversations and interactions.</p>
					</div>
					<div className="flex items-center gap-2">
						<Button variant="outline">
							<Download className="mr-2 h-4 w-4" />
							Export
						</Button>
					</div>
				</div>

				<RecentConversations />
				<div className="grid gap-6 md:grid-cols-2">
					<ConversationExample />
					<ConversationAnalytics />
				</div>
			</div>
		</>
	)
}