"use client"

import EmailVerification from "@/components/section/auth/EmailVerification"
import PhoneOtpVerification from "@/components/section/auth/PhoneOtpVerification"
import ResetPassword from "@/components/section/auth/ResetPassword"
import SignIn from "@/components/section/auth/SignIn"
import SignUp from "@/components/section/auth/SignUp"
import Success from "@/components/section/auth/Success"
import { Card } from "@/components/ui/card"
import { useState } from "react"

type AuthState = "signin" | "signup" | "reset" | "verify-phone" | "verify-email" | "success"

interface AuthFormProps {
	currentState?: AuthState
}

export default function AuthForm({ currentState }: AuthFormProps) {
	const [authState, setAuthState] = useState<AuthState>(currentState ?? "signin")
	const [phoneNumber, setPhoneNumber] = useState<string>("")
	const [email, setEmail] = useState<string>("")

	const renderAuthComponent = () => {
		switch (authState) {
			case "signin":
				return <SignIn onStateChange={setAuthState} setEmail={setEmail} />
			case "signup":
				return <SignUp onStateChange={setAuthState} setPhoneNumber={setPhoneNumber} />
			case "reset":
				return <ResetPassword onStateChange={setAuthState} />
			case "verify-phone":
				return <PhoneOtpVerification onStateChange={setAuthState} phoneNumber={phoneNumber} />
			case "verify-email":
				return <EmailVerification onStateChange={setAuthState} email={email} />
			case "success":
				return (
					<Success
						onStateChange={setAuthState}
						message="Your account has been successfully created and verified."
						nextState="signin"
					/>
				)
			default:
				return null
		}
	}

	return (
		<div className="flex items-center justify-center h-full w-full">
			<Card className="w-full h-full border-0 md:border shadow-none md:shadow-none flex flex-col rounded-xl md:rounded-none md:rounded-r-xl">
				{renderAuthComponent()}
			</Card>
		</div>
	)
}