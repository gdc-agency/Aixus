import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Play, Sparkles } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

interface PromptInputProps {
	prompt: string
	setPrompt: Dispatch<SetStateAction<string>>
	isComparing: boolean
	handleCompare: () => void
}

export default function PromptInput({ prompt, setPrompt, isComparing, handleCompare }: PromptInputProps) {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle>Prompt</CardTitle>
			</CardHeader>
			<CardContent>
				<Textarea
					placeholder="Explain how AI models work..."
					className="min-h-[100px]"
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
				/>
			</CardContent>
			<CardFooter className="flex justify-between">
				<div className="text-xs text-muted-foreground">{prompt.length} characters</div>
				<Button onClick={handleCompare} disabled={isComparing || !prompt.trim()}>
					{isComparing ? (
						<>
							<Sparkles className="mr-2 h-4 w-4 animate-spin" />
							Comparing Models...
						</>
					) : (
						<>
							<Play className="mr-2 h-4 w-4" />
							Compare Models
						</>
					)}
				</Button>
			</CardFooter>
		</Card>
	)
}