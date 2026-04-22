"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

type AuthState = "signin" | "signup" | "reset" | "verify-phone" | "verify-email" | "success"

interface ResetPasswordProps {
	onStateChange: Dispatch<SetStateAction<AuthState>>
}

export default function ResetPassword({ onStateChange }: ResetPasswordProps) {
	const [email, setEmail] = useState<string>("")

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		// Here you would typically send a request to your backend to initiate the password reset process
		console.log("Resetting password for:", email)
		// If successful, show a success message and return to sign in
		alert("Password reset link sent to your email")
		onStateChange("signin")
	}

	return (
		<div className="flex flex-col justify-center h-full">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
			</CardHeader>
			<CardContent className="px-6 pb-4 flex-grow">
				<form onSubmit={handleSubmit} className="flex flex-col h-full justify-center">
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
					</div>
					<Button className="w-full mt-6" type="submit">
						Reset Password
					</Button>
				</form>
			</CardContent>
			<CardFooter className="px-6 py-4 border-t mt-auto">
				<Button variant="link" className="h-auto p-0" onClick={() => onStateChange("signin")}>
					Remember your password? Sign In
				</Button>
			</CardFooter>
		</div>
	)
}