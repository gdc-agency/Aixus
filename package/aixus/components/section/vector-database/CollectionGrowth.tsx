import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CollectionGrowth() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Collection Growth</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="h-[200px] w-full bg-muted rounded-md flex items-center justify-center">
					<p className="text-sm text-muted-foreground">Collection growth chart would appear here</p>
				</div>
			</CardContent>
		</Card>
	)
}