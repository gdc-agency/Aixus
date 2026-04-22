import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Database, FileText, Plus, Upload } from "lucide-react"

export default function CreateDataset() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Create Evaluation Dataset</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="dataset-name">Dataset Name</Label>
					<Input id="dataset-name" placeholder="E.g., Customer Support QA" />
				</div>
				<div className="space-y-2">
					<Label htmlFor="dataset-type">Dataset Type</Label>
					<Select>
						<SelectTrigger id="dataset-type">
							<SelectValue placeholder="Select type" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="qa">Question Answering</SelectItem>
							<SelectItem value="classification">Classification</SelectItem>
							<SelectItem value="sentiment">Sentiment Analysis</SelectItem>
							<SelectItem value="code">Code Generation</SelectItem>
							<SelectItem value="summarization">Summarization</SelectItem>
							<SelectItem value="custom">Custom</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="dataset-description">Description</Label>
					<Textarea
						id="dataset-description"
						placeholder="Describe the purpose and content of this dataset"
						rows={3}
					/>
				</div>
				<div className="space-y-2">
					<Label>Data Source</Label>
					<div className="grid gap-2">
						<Button variant="outline" className="justify-start">
							<Upload className="mr-2 h-4 w-4" />
							Upload CSV or JSON File
						</Button>
						<Button variant="outline" className="justify-start">
							<Database className="mr-2 h-4 w-4" />
							Connect to Database
						</Button>
						<Button variant="outline" className="justify-start">
							<FileText className="mr-2 h-4 w-4" />
							Manual Entry
						</Button>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					<Plus className="mr-2 h-4 w-4" />
					Create Dataset
				</Button>
			</CardFooter>
		</Card>
	)
}