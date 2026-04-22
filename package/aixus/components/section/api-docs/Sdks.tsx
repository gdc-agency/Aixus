import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Copy, ExternalLink, FileText, Terminal } from "lucide-react"

const sdks = [
	{
		name: "JavaScript SDK",
		description: "Official JavaScript SDK for Node.js and browser applications",
		language: "JavaScript",
		installation: "npm install ai-sdk",
		version: "v2.1.3",
		icon: <Code className="h-8 w-8 text-yellow-500" />,
	},
	{
		name: "Python SDK",
		description: "Official Python SDK for backend and data science applications",
		language: "Python",
		installation: "pip install ai-sdk",
		version: "v1.8.2",
		icon: <Code className="h-8 w-8 text-blue-500" />,
	},
	{
		name: "Go SDK",
		description: "Official Go SDK for high-performance applications",
		language: "Go",
		installation: "go get github.com/example/ai-sdk",
		version: "v1.2.0",
		icon: <Code className="h-8 w-8 text-cyan-500" />,
	},
	{
		name: "Ruby SDK",
		description: "Official Ruby SDK for Rails and Ruby applications",
		language: "Ruby",
		installation: "gem install ai-sdk",
		version: "v0.9.5",
		icon: <Code className="h-8 w-8 text-red-500" />,
	},
	{
		name: "Java SDK",
		description: "Official Java SDK for enterprise applications",
		language: "Java",
		installation: "maven: com.example:ai-sdk:1.0.1",
		version: "v1.0.1",
		icon: <Code className="h-8 w-8 text-orange-500" />,
	},
	{
		name: ".NET SDK",
		description: "Official .NET SDK for C# and .NET applications",
		language: ".NET",
		installation: "dotnet add package AI.SDK",
		version: "v1.1.0",
		icon: <Code className="h-8 w-8 text-purple-500" />,
	},
]

export default function Sdks() {
	return (
		<div className="grid gap-6 md:grid-cols-3">
			{sdks.map((sdk, index) => (
				<Card key={index} className="flex flex-col">
					<CardHeader>
						<div className="flex items-center gap-4">
							{sdk.icon}
							<div>
								<CardTitle>{sdk.name}</CardTitle>
							</div>
						</div>
					</CardHeader>
					<CardContent className="flex-1 space-y-4">
						<div>
							<div className="text-sm text-muted-foreground">Installation</div>
							<div className="flex items-center gap-2 rounded-md bg-muted p-2 mt-1">
								<code className="text-xs">{sdk.installation}</code>
								<Button variant="ghost" size="icon" className="h-6 w-6 ml-auto">
									<Copy className="h-3 w-3" />
								</Button>
							</div>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Terminal className="h-4 w-4 text-muted-foreground" />
								<span className="text-sm text-muted-foreground">Latest: {sdk.version}</span>
							</div>
							<Badge variant="outline">{sdk.language}</Badge>
						</div>
					</CardContent>
					<CardFooter className="flex gap-2">
						<Button variant="outline" className="flex-1">
							<FileText className="mr-2 h-4 w-4" />
							Docs
						</Button>
						<Button variant="outline" className="flex-1">
							<ExternalLink className="mr-2 h-4 w-4" />
							GitHub
						</Button>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}