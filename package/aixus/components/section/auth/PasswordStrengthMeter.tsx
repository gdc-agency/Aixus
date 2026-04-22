"use client"

import { useEffect, useState } from "react"

interface PasswordStrengthMeterProps {
	password: string
}

export function PasswordStrengthMeter({ password }: PasswordStrengthMeterProps) {
	const [strength, setStrength] = useState<string>("")

	const calculateStrength = (password: string) => {
		if (password.length === 0) {
			setStrength("")
			return
		}
		if (password.length < 6) {
			setStrength("Too weak")
		} else if (password.length < 10) {
			setStrength("Weak")
		} else if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[^a-zA-Z0-9\s]/.test(password)) {
			setStrength("Strong")
		} else {
			setStrength("Medium")
		}
	}

	useEffect(() => {
		calculateStrength(password)
	}, [password])

	let color: string
	if (strength === "Medium") {
		color = "yellow"
	} else if (strength === "Strong") {
		color = "green"
	} else {
		color = "red"
	}

	return (
		<div className="relative pt-1">
			<div className="flex mb-2 items-center justify-between">
				<div>
					<span
						className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${strength === "Medium"
								? "text-yellow-600 bg-yellow-200"
								: strength === "Strong"
									? "text-green-600 bg-green-200"
									: "text-red-600 bg-red-200"
							}`}
					>
						{strength || "No password"}
					</span>
				</div>
				<div className="text-right">
					<span
						className={`text-xs font-semibold inline-block ${strength === "Medium"
								? "text-yellow-600"
								: strength === "Strong"
									? "text-green-600"
									: "text-red-600"
							}`}
					>
						{password.length}/20
					</span>
				</div>
			</div>
			<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-red-200">
				<div
					style={{
						width:
							strength === "Too weak"
								? "10%"
								: strength === "Weak"
									? "25%"
									: strength === "Medium"
										? "66%"
										: strength === "Strong"
											? "100%"
											: "0%",
						backgroundColor: color,
					}}
					className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
				></div>
			</div>
		</div>
	)
}