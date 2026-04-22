"use client"

import { PasswordStrengthMeter } from "@/components/section/auth/PasswordStrengthMeter"
import { Button } from "@/components/ui/button"
import { CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, FormEvent, SetStateAction, useState } from "react"

type AuthState = "signin" | "signup" | "reset" | "verify-phone" | "verify-email" | "success"

interface SignUpProps {
	onStateChange: Dispatch<SetStateAction<AuthState>>
	setPhoneNumber: Dispatch<SetStateAction<string>>
}

export default function SignUp({ onStateChange, setPhoneNumber }: SignUpProps) {
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")
	const [confirmPassword, setConfirmPassword] = useState<string>("")
	const [phone, setPhone] = useState<string>("")

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			alert("Passwords don't match")
			return
		}
		// Here you would typically send a request to your backend to create a new user
		console.log("Signing up with:", email, password, phone)
		setPhoneNumber(phone)
		// Move to phone verification
		onStateChange("verify-phone")
	}

	return (
		<div className="flex flex-col justify-center h-full">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
			</CardHeader>
			<CardContent className="px-6 pb-4 flex-grow">
				<form onSubmit={handleSubmit}>
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
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Create a password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
							<PasswordStrengthMeter password={password} />
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="confirm-password">Confirm Password</Label>
							<Input
								id="confirm-password"
								type="password"
								placeholder="Confirm your password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="phone">Phone Number</Label>
							<Input
								id="phone"
								type="tel"
								placeholder="Enter your phone number"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
								required
							/>
						</div>
					</div>
					<Button className="w-full mt-4" type="submit">
						Sign Up
					</Button>
				</form>
			</CardContent>
			<CardFooter>
				<Button variant="link" onClick={() => onStateChange("signin")}>
					Already have an account? Sign In
				</Button>
			</CardFooter>
		</div>
	)
}