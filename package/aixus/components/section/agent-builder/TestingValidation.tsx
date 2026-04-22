import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Rocket, Save } from "lucide-react"

export default function TestingValidation() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Testing & Validation</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="test-prompt">Test Prompt</Label>
					<Textarea
						id="test-prompt"
						placeholder="I'm having trouble with my account login. Can you help me troubleshoot?"
						rows={3}
					/>
				</div>
				<Button className="w-full">
					<Rocket className="mr-2 h-4 w-4" />
					Run Test
				</Button>
				<div className="rounded-lg border p-4 bg-muted">
					<p className="text-sm text-muted-foreground">
						Test results will appear here. Run a test to see how your agent responds.
					</p>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">
					<Save className="mr-2 h-4 w-4" />
					Save Draft
				</Button>
				<Button>
					<Rocket className="mr-2 h-4 w-4" />
					Deploy Agent
				</Button>
			</CardFooter>
		</Card>
	)
}