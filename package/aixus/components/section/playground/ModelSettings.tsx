import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export default function ModelSettings() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Model Settings</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="model">Model</Label>
					<Select defaultValue="gpt-4o">
						<SelectTrigger id="model">
							<SelectValue placeholder="Select model" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="gpt-4o">GPT-4o</SelectItem>
							<SelectItem value="claude-3">Claude 3 Opus</SelectItem>
							<SelectItem value="llama-3">Llama 3 70B</SelectItem>
							<SelectItem value="mistral">Mistral Large</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="temperature">Temperature: 0.7</Label>
					</div>
					<Slider id="temperature" defaultValue={[0.7]} max={2} step={0.1} className="w-full" />
					<p className="text-xs text-muted-foreground">
						Controls randomness: Lower values are more deterministic, higher values are more creative.
					</p>
				</div>

				<div className="space-y-2">
					<Label htmlFor="max-tokens">Max Tokens</Label>
					<Input id="max-tokens" type="number" defaultValue={2048} />
					<p className="text-xs text-muted-foreground">Maximum number of tokens to generate in the response.</p>
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="top-p">Top P: 0.9</Label>
					</div>
					<Slider id="top-p" defaultValue={[0.9]} max={1} step={0.01} className="w-full" />
					<p className="text-xs text-muted-foreground">Controls diversity via nucleus sampling.</p>
				</div>

				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<Label htmlFor="frequency-penalty">Frequency Penalty: 0.0</Label>
					</div>
					<Slider id="frequency-penalty" defaultValue={[0]} min={-2} max={2} step={0.1} className="w-full" />
					<p className="text-xs text-muted-foreground">Reduces repetition of token sequences.</p>
				</div>

				<Separator />

				<div className="flex items-center space-x-2">
					<Switch id="stream" defaultChecked />
					<Label htmlFor="stream">Stream response</Label>
				</div>
			</CardContent>
		</Card>
	)
}