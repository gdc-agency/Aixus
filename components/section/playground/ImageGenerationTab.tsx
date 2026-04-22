"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Download, ImageIcon, RefreshCw, Sparkles } from "lucide-react"
import { ChangeEvent, useState } from "react"

export default function ImageGenerationTab() {
	const [prompt, setPrompt] = useState<string>("")
	const [isGenerating, setIsGenerating] = useState<boolean>(false)
	const [generatedImages, setGeneratedImages] = useState<string[]>([])

	const handleGenerate = () => {
		if (!prompt.trim()) return

		setIsGenerating(true)

		// Simulate image generation
		setTimeout(() => {
			const newImages = [
				`/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt)}`,
				`/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt + " variation 1")}`,
				`/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt + " variation 2")}`,
				`/placeholder.svg?height=512&width=512&query=${encodeURIComponent(prompt + " variation 3")}`,
			]
			setGeneratedImages(newImages)
			setIsGenerating(false)
		}, 3000)
	}

	return (
		<div className="grid gap-6 md:grid-cols-3">
			<div className="md:col-span-2 space-y-4">
				<Card>
					<CardHeader className="pb-3">
						<CardTitle>Image Prompt</CardTitle>
					</CardHeader>
					<CardContent>
						<Textarea
							placeholder="A futuristic cityscape with flying cars and neon lights, cyberpunk style..."
							className="min-h-[100px]"
							value={prompt}
							onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
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
									<ImageIcon className="mr-2 h-4 w-4" />
									Generate
								</>
							)}
						</Button>
					</CardFooter>
				</Card>

				<Card>
					<CardHeader className="pb-3">
						<CardTitle>Generated Images</CardTitle>
					</CardHeader>
					<CardContent>
						{isGenerating ? (
							<div className="grid grid-cols-2 gap-4">
								{[1, 2, 3, 4].map((_, index) => (
									<Card key={index} className="overflow-hidden">
										<AspectRatio ratio={1 / 1}>
											<div className="flex h-full w-full items-center justify-center bg-muted animate-pulse">
												<RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
											</div>
										</AspectRatio>
									</Card>
								))}
							</div>
						) : generatedImages.length > 0 ? (
							<div className="grid grid-cols-2 gap-4">
								{generatedImages.map((src, index) => (
									<Card key={index} className="overflow-hidden group relative">
										<AspectRatio ratio={1 / 1}>
											<img
												src={src || "/placeholder.svg"}
												alt={`Generated image ${index + 1}`}
												className="object-cover w-full h-full"
											/>
										</AspectRatio>
										<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
											<Button variant="secondary" size="sm">
												<Download className="h-4 w-4 mr-2" />
												Download
											</Button>
										</div>
									</Card>
								))}
							</div>
						) : (
							<div className="relative min-h-[250px] rounded-md border bg-muted p-4">
								<div className="flex flex-col items-center justify-center py-12 text-center">
									<ImageIcon className="h-12 w-12 text-muted-foreground mb-4" />
									<h3 className="text-lg font-medium">No images generated yet</h3>
									<p className="text-sm text-muted-foreground mt-1 max-w-md">
										Enter a prompt and click generate to create AI-generated images based on your description.
									</p>
								</div>
							</div>
						)}
					</CardContent>
				</Card>
			</div>

			<div>
				<Card>
					<CardHeader>
						<CardTitle>Image Settings</CardTitle>
					</CardHeader>
					<CardContent className="space-y-6">
						<Tabs defaultValue="basic">
							<TabsList className="grid w-full grid-cols-2">
								<TabsTrigger value="basic">Basic</TabsTrigger>
								<TabsTrigger value="advanced">Advanced</TabsTrigger>
							</TabsList>

							<TabsContent value="basic" className="space-y-6 pt-4">
								<div className="space-y-2">
									<Label htmlFor="model">Model</Label>
									<Select defaultValue="dalle-3">
										<SelectTrigger id="model">
											<SelectValue placeholder="Select model" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="dalle-3">DALL-E 3</SelectItem>
											<SelectItem value="midjourney">Midjourney</SelectItem>
											<SelectItem value="stable-diffusion">Stable Diffusion XL</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="size">Image Size</Label>
									<Select defaultValue="1024x1024">
										<SelectTrigger id="size">
											<SelectValue placeholder="Select size" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="1024x1024">1024 × 1024 (Square)</SelectItem>
											<SelectItem value="1024x1792">1024 × 1792 (Portrait)</SelectItem>
											<SelectItem value="1792x1024">1792 × 1024 (Landscape)</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="quality">Quality</Label>
									<Select defaultValue="standard">
										<SelectTrigger id="quality">
											<SelectValue placeholder="Select quality" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="standard">Standard</SelectItem>
											<SelectItem value="hd">HD</SelectItem>
										</SelectContent>
									</Select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="style">Style</Label>
									<Select defaultValue="vivid">
										<SelectTrigger id="style">
											<SelectValue placeholder="Select style" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="vivid">Vivid</SelectItem>
											<SelectItem value="natural">Natural</SelectItem>
											<SelectItem value="cinematic">Cinematic</SelectItem>
											<SelectItem value="anime">Anime</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</TabsContent>

							<TabsContent value="advanced" className="space-y-6 pt-4">
								<div className="space-y-2">
									<div className="flex items-center justify-between">
										<Label htmlFor="cfg-scale">CFG Scale: 7.0</Label>
									</div>
									<Slider id="cfg-scale" defaultValue={[7]} min={1} max={14} step={0.5} className="w-full" />
									<p className="text-xs text-muted-foreground">How closely the image follows your prompt.</p>
								</div>

								<div className="space-y-2">
									<Label htmlFor="seed">Seed (optional)</Label>
									<div className="flex gap-2">
										<input
											id="seed"
											type="number"
											placeholder="Random"
											className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
											onChange={(e: ChangeEvent<HTMLInputElement>) => { }}
										/>
										<Button variant="outline" size="icon">
											<RefreshCw className="h-4 w-4" />
										</Button>
									</div>
									<p className="text-xs text-muted-foreground">Set a specific seed for reproducible results.</p>
								</div>

								<div className="space-y-2">
									<Label htmlFor="negative-prompt">Negative Prompt</Label>
									<Textarea
										id="negative-prompt"
										placeholder="Elements to exclude from the image..."
										className="min-h-[80px]"
										onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { }}
									/>
									<p className="text-xs text-muted-foreground">Specify what you don't want in the image.</p>
								</div>
							</TabsContent>
						</Tabs>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}