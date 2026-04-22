import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { BarChart, Gauge, RefreshCw, Settings, X } from "lucide-react"

export default function RunEvaluation() {
	const evaluations = [
		{
			name: "Customer Support QA Evaluation",
			model: "GPT-4o",
			dataset: "Customer Support QA",
			status: "Completed",
			started: "Yesterday",
			duration: "45 minutes",
		},
		{
			name: "Sentiment Analysis Benchmark",
			model: "Claude 3",
			dataset: "Sentiment Analysis",
			status: "Completed",
			started: "3 days ago",
			duration: "32 minutes",
		},
		{
			name: "Code Generation Test",
			model: "Custom Fine-tuned",
			dataset: "Code Generation",
			status: "In Progress",
			started: "2 hours ago",
			duration: "Running",
		},
		{
			name: "Product Classification Evaluation",
			model: "Llama 3",
			dataset: "Product Classification",
			status: "Failed",
			started: "1 week ago",
			duration: "15 minutes",
		},
	]

	return (
		<>
			<Card>
				<CardHeader>
					<CardTitle>Run Evaluation</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="grid gap-6 md:grid-cols-2">
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="eval-model">Select Model</Label>
								<Select>
									<SelectTrigger id="eval-model">
										<SelectValue placeholder="Select model" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="gpt-4o">GPT-4o</SelectItem>
										<SelectItem value="claude-3">Claude 3</SelectItem>
										<SelectItem value="llama-3">Llama 3</SelectItem>
										<SelectItem value="mistral">Mistral Large</SelectItem>
										<SelectItem value="custom">Custom Fine-tuned Model</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="eval-dataset">Select Dataset</Label>
								<Select>
									<SelectTrigger id="eval-dataset">
										<SelectValue placeholder="Select dataset" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="customer-support">Customer Support QA</SelectItem>
										<SelectItem value="product-classification">Product Classification</SelectItem>
										<SelectItem value="sentiment">Sentiment Analysis</SelectItem>
										<SelectItem value="code">Code Generation</SelectItem>
										<SelectItem value="summarization">Summarization</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="space-y-2">
								<Label htmlFor="eval-metrics">Evaluation Metrics</Label>
								<div className="grid grid-cols-2 gap-2">
									<div className="flex items-center space-x-2">
										<Checkbox id="accuracy" defaultChecked />
										<Label htmlFor="accuracy">Accuracy</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="precision" defaultChecked />
										<Label htmlFor="precision">Precision</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="recall" defaultChecked />
										<Label htmlFor="recall">Recall</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="f1" defaultChecked />
										<Label htmlFor="f1">F1 Score</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="latency" defaultChecked />
										<Label htmlFor="latency">Latency</Label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="ragas" defaultChecked />
										<Label htmlFor="ragas">RAGAS Score</Label>
									</div>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="eval-name">Evaluation Name</Label>
								<Input id="eval-name" placeholder="E.g., Customer Support QA Evaluation" />
							</div>
							<div className="space-y-2">
								<Label htmlFor="eval-description">Description</Label>
								<Textarea id="eval-description" placeholder="Describe the purpose of this evaluation" rows={3} />
							</div>
							<div className="space-y-2">
								<Label htmlFor="eval-samples">Number of Samples</Label>
								<Select defaultValue="all">
									<SelectTrigger id="eval-samples">
										<SelectValue placeholder="Select sample size" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="100">100 samples</SelectItem>
										<SelectItem value="500">500 samples</SelectItem>
										<SelectItem value="1000">1000 samples</SelectItem>
										<SelectItem value="all">All samples</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</div>
					<div className="rounded-lg border p-4">
						<h3 className="text-sm font-medium mb-2">Advanced Settings</h3>
						<div className="grid gap-4 md:grid-cols-2">
							<div className="space-y-2">
								<Label htmlFor="temperature">Temperature</Label>
								<div className="flex items-center gap-4">
									<Slider id="temperature" defaultValue={[0.7]} max={1} step={0.1} className="flex-1" />
									<span className="w-12 text-center">0.7</span>
								</div>
							</div>
							<div className="space-y-2">
								<Label htmlFor="max-tokens">Max Tokens</Label>
								<Input id="max-tokens" type="number" defaultValue={1024} />
							</div>
							<div className="space-y-2">
								<Label htmlFor="parallel-runs">Parallel Runs</Label>
								<Input id="parallel-runs" type="number" defaultValue={4} />
							</div>
							<div className="space-y-2">
								<Label htmlFor="timeout">Timeout (seconds)</Label>
								<Input id="timeout" type="number" defaultValue={30} />
							</div>
						</div>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline">
						<Settings className="mr-2 h-4 w-4" />
						Save as Template
					</Button>
					<Button>
						<Gauge className="mr-2 h-4 w-4" />
						Run Evaluation
					</Button>
				</CardFooter>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Recent Evaluations</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Name</TableHead>
								<TableHead>Model</TableHead>
								<TableHead>Dataset</TableHead>
								<TableHead>Status</TableHead>
								<TableHead>Started</TableHead>
								<TableHead>Duration</TableHead>
								<TableHead>Actions</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{evaluations.map((evaluation, index) => (
								<TableRow key={index}>
									<TableCell className="font-medium">{evaluation.name}</TableCell>
									<TableCell>{evaluation.model}</TableCell>
									<TableCell>{evaluation.dataset}</TableCell>
									<TableCell>
										<Badge
											variant={
												evaluation.status === "Completed"
													? "default"
													: evaluation.status === "In Progress"
														? "secondary"
														: "destructive"
											}
											className={
												evaluation.status === "Completed"
													? "bg-green-500 hover:bg-green-600"
													: evaluation.status === "In Progress"
														? "flex items-center gap-1"
														: ""
											}
										>
											{evaluation.status === "In Progress" && <RefreshCw className="h-3 w-3 animate-spin" />}
											{evaluation.status}
										</Badge>
									</TableCell>
									<TableCell>{evaluation.started}</TableCell>
									<TableCell>{evaluation.duration}</TableCell>
									<TableCell>
										<div className="flex items-center gap-2">
											<Button variant="outline" size="sm">
												<BarChart className="mr-2 h-3 w-3" />
												Results
											</Button>
											{evaluation.status === "In Progress" && (
												<Button variant="outline" size="sm" className="text-red-500">
													<X className="mr-2 h-3 w-3" />
													Cancel
												</Button>
											)}
										</div>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</>
	)
}