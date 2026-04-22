export const getStageBadge = (stage:any) => {
	switch (stage) {
		case "Production":
			return "bg-green-500/20 text-green-600"
		case "Staging":
			return "bg-yellow-500/20 text-yellow-600"
		case "Development":
			return "bg-gray-500/20 text-gray-600"
		default:
			return "bg-muted text-muted-foreground"
	}
}