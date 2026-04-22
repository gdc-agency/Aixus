import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export default function CreateExperiment() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Create Experiment</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="experiment-name">Experiment Name</Label>
					<Input id="experiment-name" placeholder="E.g., Improved Response Quality" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="base-model">Base Model</Label>
					<Select>
						<SelectTrigger id="base-model">
							<SelectValue placeholder="Select model" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="gpt-4o">GPT-4o</SelectItem>
							<SelectItem value="claude-3">Claude 3</SelectItem>
							<SelectItem value="llama-3">Llama 3</SelectItem>
							<SelectItem value="mistral">Mistral Large</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="experiment-type">Experiment Type</Label>
					<Select>
						<SelectTrigger id="experiment-type">
							<SelectValue placeholder="Select type" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="parameter">Parameter Tuning</SelectItem>
							<SelectItem value="fine-tuning">Fine-tuning</SelectItem>
							<SelectItem value="prompt">Prompt Engineering</SelectItem>
							<SelectItem value="hybrid">Hybrid Approach</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="experiment-description">Description</Label>
					<Textarea
						id="experiment-description"
						placeholder="Describe the purpose and goals of this experiment"
						rows={3}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					<Plus className="mr-2 h-4 w-4" />
					Create Experiment
				</Button>
			</CardFooter>
		</Card>
	)
}