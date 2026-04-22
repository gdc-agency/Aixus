import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy } from "lucide-react"

export default function CodeExamples() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Code Examples</CardTitle>
			</CardHeader>
			<CardContent>
				<Tabs defaultValue="javascript">
					<TabsList className="w-full justify-start">
						<TabsTrigger value="javascript">JavaScript</TabsTrigger>
						<TabsTrigger value="python">Python</TabsTrigger>
						<TabsTrigger value="curl">cURL</TabsTrigger>
					</TabsList>
					<TabsContent value="javascript" className="mt-4">
						<div className="rounded-md bg-muted p-4 relative">
							<Button variant="ghost" size="icon" className="absolute right-2 top-2 h-6 w-6">
								<Copy className="h-3 w-3" />
							</Button>
							<pre className="text-sm overflow-auto">
								{`import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

async function main() {
  const { text } = await generateText({
    model: openai("gpt-4o"),
    prompt: "Write a poem about artificial intelligence",
    maxTokens: 256,
    temperature: 0.7,
  });
  
  console.log(text);
}

main();`}
							</pre>
						</div>
					</TabsContent>
					<TabsContent value="python" className="mt-4">
						<div className="rounded-md bg-muted p-4 relative">
							<Button variant="ghost" size="icon" className="absolute right-2 top-2 h-6 w-6">
								<Copy className="h-3 w-3" />
							</Button>
							<pre className="text-sm overflow-auto">
								{`import requests
import json

api_key = "YOUR_API_KEY"
url = "https://api.example.com/v1/completions"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

data = {
    "model": "gpt-4o",
    "prompt": "Write a poem about artificial intelligence",
    "max_tokens": 256,
    "temperature": 0.7
}

response = requests.post(url, headers=headers, data=json.dumps(data))
result = response.json()

print(result["choices"][0]["text"])`}
							</pre>
						</div>
					</TabsContent>
					<TabsContent value="curl" className="mt-4">
						<div className="rounded-md bg-muted p-4 relative">
							<Button variant="ghost" size="icon" className="absolute right-2 top-2 h-6 w-6">
								<Copy className="h-3 w-3" />
							</Button>
							<pre className="text-sm overflow-auto">
								{`curl https://api.example.com/v1/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "model": "gpt-4o",
    "prompt": "Write a poem about artificial intelligence",
    "max_tokens": 256,
    "temperature": 0.7
  }'`}
							</pre>
						</div>
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	)
}