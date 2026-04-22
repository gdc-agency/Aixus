"use client"

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Clock, Mail } from "lucide-react"
import { useRouter } from "next/navigation"
import { Dispatch, SetStateAction, useEffect, useState } from "react"

type AuthState = "signin" | "signup" | "reset" | "verify-phone" | "verify-email" | "success"

interface EmailVerificationProps {
	onStateChange: Dispatch<SetStateAction<AuthState>>
	email: string
}

export default function EmailVerification({ onStateChange, email }: EmailVerificationProps) {
	const [verified, setVerified] = useState<boolean>(false)
	const [progress, setProgress] = useState<number>(0)
	const router = useRouter()

	useEffect(() => {
		const duration = 3000
		const interval = 50
		const steps = duration / interval
		let currentStep = 0

		const timer = setInterval(() => {
			currentStep += 1
			setProgress(Math.min((currentStep / steps) * 100, 100))

			if (currentStep >= steps) {
				clearInterval(timer)
				setVerified(true)
			}
		}, interval)

		return () => clearInterval(timer)
	}, [])

	useEffect(() => {
		if (verified) {
			const timer = setTimeout(() => {
				router.push("/")
			}, 1500)

			return () => clearTimeout(timer)
		}
	}, [verified, router])

	return (
		<div className="flex flex-col justify-center h-full">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="text-2xl font-bold">Email Verification</CardTitle>
			</CardHeader>
			<CardContent className="px-6 pb-8 flex-grow flex flex-col items-center justify-center space-y-6">
				{!verified ? (
					<>
						<div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950/30">
							<Mail className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
							<div className="absolute inset-0 rounded-full border-4 border-indigo-200 dark:border-indigo-800/50"></div>
							<div
								className="absolute inset-0 rounded-full border-4 border-indigo-600 dark:border-indigo-400 transition-all duration-300"
								style={{
									clipPath: `path('M 50 0 A 50 50 0 ${progress >= 50 ? 1 : 0} 1 ${50 + 50 * Math.sin(progress * 0.0628)} ${50 - 50 * Math.cos(progress * 0.0628)} L 50 50 Z')`,
								}}
							></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
							</div>
						</div>

						<div className="text-center space-y-2">
							<h3 className="text-lg font-medium">Verifying your email</h3>
							<p className="text-sm text-muted-foreground">
								We're confirming <span className="font-medium text-foreground">{email}</span>
							</p>
							<p className="text-xs text-muted-foreground">This will only take a moment...</p>
						</div>

						<div className="w-full max-w-xs bg-muted rounded-full h-2 overflow-hidden">
							<div
								className="bg-indigo-600 h-full transition-all duration-300 ease-out"
								style={{ width: `${progress}%` }}
							></div>
						</div>
					</>
				) : (
					<div className="text-center space-y-6">
						<div className="w-24 h-24 mx-auto rounded-full bg-green-50 dark:bg-green-950/30 flex items-center justify-center">
							<CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
						</div>

						<div className="space-y-2">
							<h3 className="text-xl font-medium">Email Verified!</h3>
							<p className="text-muted-foreground">Your email has been successfully verified</p>
							<p className="text-sm text-muted-foreground animate-pulse">Redirecting to dashboard...</p>
						</div>
					</div>
				)}
			</CardContent>
		</div>
	)
}