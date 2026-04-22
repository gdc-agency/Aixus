"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

type AuthState = "signin" | "signup" | "reset" | "verify-phone" | "verify-email" | "success"

interface SignInProps {
	onStateChange: Dispatch<SetStateAction<AuthState>>
	setEmail: Dispatch<SetStateAction<string>>
}

export default function SignIn({ onStateChange, setEmail }: SignInProps) {
	const [emailInput, setEmailInput] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		// Here you would typically send a request to your backend to authenticate the user
		console.log("Signing in with:", emailInput, password)
		// If successful, set the email and move to email verification
		setEmail(emailInput)
		onStateChange("verify-email")
	}

	return (
		<div className="flex flex-col justify-center h-full">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="text-2xl font-bold">Sign In</CardTitle>
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
								value={emailInput}
								onChange={(e) => setEmailInput(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
					</div>
					<Button className="w-full mt-6" type="submit">
						Sign In
					</Button>
				</form>
			</CardContent>
			<CardFooter className="flex flex-col sm:flex-row justify-between gap-2 px-6 py-4 border-t mt-auto">
				<Button variant="link" className="h-auto p-0" onClick={() => onStateChange("signup")}>
					Don't have an account? Sign Up
				</Button>
				<Button variant="link" className="h-auto p-0" onClick={() => onStateChange("reset")}>
					Forgot password?
				</Button>
			</CardFooter>
		</div>
	)
}