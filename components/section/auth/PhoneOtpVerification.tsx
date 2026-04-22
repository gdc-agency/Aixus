"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction, useState } from "react"

type AuthState = "signin" | "signup" | "reset" | "verify-phone" | "verify-email" | "success"

interface PhoneOtpVerificationProps {
	onStateChange: Dispatch<SetStateAction<AuthState>>
	phoneNumber: string
}

export default function PhoneOtpVerification({ onStateChange, phoneNumber }: PhoneOtpVerificationProps) {
	const [otp, setOtp] = useState<string>("")
	const [otpSent, setOtpSent] = useState<boolean>(false)

	const handleSendOtp = async () => {
		// Here you would typically send a request to your backend to send an OTP to the phone number
		console.log("Sending OTP to:", phoneNumber)
		setOtpSent(true)
	}

	const handleVerifyOtp = async () => {
		// Here you would typically send a request to your backend to verify the OTP
		console.log("Verifying OTP:", otp)
		// If successful, move to the success state
		onStateChange("success")
	}

	return (
		<div className="flex flex-col justify-center h-full">
			<CardHeader className="space-y-1 pb-6">
				<CardTitle className="text-2xl font-bold">Phone Verification</CardTitle>
			</CardHeader>
			<CardContent className="px-6 pb-8 flex-grow flex flex-col justify-center">
				{!otpSent ? (
					<div className="grid w-full items-center gap-4">
						<p>We will send a verification code to: {phoneNumber}</p>
						<Button onClick={handleSendOtp}>Send OTP</Button>
					</div>
				) : (
					<div className="grid w-full items-center gap-4">
						<div className="flex flex-col space-y-1.5">
							<Label htmlFor="otp">OTP</Label>
							<Input
								id="otp"
								type="text"
								placeholder="Enter the OTP"
								value={otp}
								onChange={(e) => setOtp(e.target.value)}
								required
							/>
						</div>
						<Button onClick={handleVerifyOtp} className="mt-2">
							Verify OTP
						</Button>
					</div>
				)}
			</CardContent>
		</div>
	)
}