import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Copy } from "lucide-react"

export default function EndpointDetails() {
	const parameters = [
		{ name: "model", type: "String", required: true, description: "ID of the model to use" },
		{ name: "prompt", type: "String", required: true, description: "The prompt to generate completions for" },
		{ name: "max_tokens", type: "Integer", required: false, description: "Maximum number of tokens to generate" },
		{ name: "temperature", type: "Float", required: false, description: "Sampling temperature between 0 and 2" },
	]

	return (
		<Card>
			<CardHeader>
				<CardTitle>
					Create Completion
				</CardTitle>
			</CardHeader>

			<CardContent className="space-y-6">
				{/* Endpoint */}
				<section>
					<h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Endpoint</h3>
					<div className="flex items-center gap-2 rounded-md bg-gray-100 dark:bg-gray-800 p-2 border border-gray-200 dark:border-gray-700">
						<code className="text-sm font-mono text-gray-800 dark:text-gray-200">/v1/completions</code>
						<Button variant="ghost" size="icon" className="ml-auto h-6 w-6">
							<Copy className="h-3 w-3" />
						</Button>
					</div>
				</section>

				{/* Request Body */}
				<section>
					<h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Request Body</h3>
					<div className="relative rounded-md bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700">
						<Button variant="ghost" size="icon" className="absolute right-2 top-2 h-6 w-6">
							<Copy className="h-3 w-3" />
						</Button>
						<pre className="text-sm font-mono overflow-auto text-gray-800 dark:text-gray-100">
							{`{
  "model": "gpt-4o",
  "prompt": "Write a poem about artificial intelligence",
  "max_tokens": 256,
  "temperature": 0.7,
  "top_p": 1,
  "n": 1,
  "stream": false,
  "stop": ["\\n\\n"]
}`}
						</pre>
					</div>
				</section>

				{/* Parameters */}
				<section>
					<h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Parameters</h3>
					<div className="space-y-4">
						{parameters.map((param, index) => (
							<div key={param.name}>
								<div className="grid grid-cols-3 gap-4 items-center">
									<div className="font-medium text-gray-800 dark:text-gray-100">{param.name}</div>
									<div className="col-span-2 text-sm">
										<p className="mb-1">
											<span className="text-gray-600 dark:text-gray-400">{param.type}</span>{" "}
											{param.required ? (
												<span className="text-red-500 font-medium">required</span>
											) : (
												<span className="text-muted-foreground">optional</span>
											)}
										</p>
										<p className="text-gray-600 dark:text-gray-400">{param.description}</p>
									</div>
								</div>
								{index < parameters.length - 1 && <Separator className="my-3" />}
							</div>
						))}
					</div>
				</section>

				{/* Response */}
				<section>
					<h3 className="text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Response</h3>
					<div className="relative rounded-md bg-gray-50 dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700">
						<Button variant="ghost" size="icon" className="absolute right-2 top-2 h-6 w-6">
							<Copy className="h-3 w-3" />
						</Button>
						<pre className="text-sm font-mono overflow-auto text-gray-800 dark:text-gray-100">
							{`{
  "id": "cmpl-123abc",
  "object": "text_completion",
  "created": 1677858242,
  "model": "gpt-4o",
  "choices": [
    {
      "text": "In circuits of silicon and gold, ...",
      "index": 0,
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 6,
    "completion_tokens": 156,
    "total_tokens": 162
  }
}`}
						</pre>
					</div>
				</section>
			</CardContent>
		</Card>
	)
}
