"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Copy, Play, Sparkles } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import ModelSettings from "./ModelSettings"

interface CompletionTabProps {
  prompt: string
  setPrompt: Dispatch<SetStateAction<string>>
  response: string
  isGenerating: boolean
  handleGenerate: () => void
}

export default function CompletionTab({ prompt, setPrompt, response, isGenerating, handleGenerate }: CompletionTabProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Explain how AI models work..."
              className="min-h-[200px]"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-xs text-muted-foreground">{prompt.length} characters</div>
            <Button onClick={handleGenerate} disabled={isGenerating || !prompt.trim()}>
              {isGenerating ? (
                <>
                  <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-4 w-4" />
                  Generate
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle>Response</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative min-h-[300px] rounded-md border bg-muted p-4">
              <pre className="text-sm whitespace-pre-wrap font-sans">{response}</pre>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-xs text-muted-foreground">{response.length} characters</div>
            <Button variant="outline" disabled={!response}>
              <Copy className="mr-2 h-4 w-4" />
              Copy
            </Button>
          </CardFooter>
        </Card>
      </div>

      <ModelSettings />
    </div>
  )
}