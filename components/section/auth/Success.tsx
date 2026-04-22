"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Dispatch, SetStateAction } from "react"

type AuthState = "signin" | "signup" | "reset" | "verify-phone" | "verify-email" | "success"

interface SuccessProps {
	onStateChange: Dispatch<SetStateAction<AuthState>>
	message: string
	nextState: AuthState
}

export default function Success({ onStateChange, message, nextState }: SuccessProps) {
	return (
		<div className="flex flex-col justify-center h-full">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="text-2xl font-bold">Success</CardTitle>
			</CardHeader>
			<CardContent className="px-6 pb-4 flex-grow flex flex-col items-center justify-center space-y-4 text-center">
				<CheckCircle className="h-16 w-16 text-green-500" />
				<p>{message}</p>
			</CardContent>
			<CardFooter className="px-6 py-4 border-t mt-auto flex justify-center">
				<Button onClick={() => onStateChange(nextState)}>Continue</Button>
			</CardFooter>
		</div>
	)
}