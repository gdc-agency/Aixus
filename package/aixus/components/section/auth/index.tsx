import { Facebook, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AuthForm from "./AuthForm"

export default function LoginPage() {
	return (
		<div className="flex min-h-screen items-center justify-center p-0">
			<div className="flex w-full max-w-4xl min-h-[500px] overflow-hidden rounded-xl shadow-none">
				{/* Left side - Primary background with mountain image */}
				<div className="relative hidden w-1/2 bg-primary md:block rounded-l-xl">
					<div className="absolute inset-0 z-0">
						<Image
							src="/images/1.jpg?height=800&width=600"
							alt="Mountain landscape"
							fill
							className="object-cover opacity-50"
							priority
						/>
					</div>
					<div className="relative z-10 flex h-full flex-col justify-between p-6 lg:p-8 text-primary-foreground">
						<Link href="/">
							<img src="/images/logo-white.png" alt="Logo" className="h-8 w-auto" />
							<h2 className="mt-6 text-xl font-semibold">Welcome to Aixus</h2>
						</Link>
						<div className="space-y-4">
							<div className="flex space-x-4">
								<Link
									href="#"
									className="rounded-full bg-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/30"
								>
									<Facebook size={20} />
								</Link>
								<Link
									href="#"
									className="rounded-full bg-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/30"
								>
									<Twitter size={20} />
								</Link>
								<Link
									href="#"
									className="rounded-full bg-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/30"
								>
									<Linkedin size={20} />
								</Link>
								<Link
									href="#"
									className="rounded-full bg-primary-foreground/20 p-2 transition-colors hover:bg-primary-foreground/30"
								>
									<Github size={20} />
								</Link>
							</div>
							<div className="space-y-1 text-sm">
								<Link href="#" className="block hover:underline">
									Have an issue with 2-factor authentication?
								</Link>
								<Link href="#" className="block hover:underline">
									Privacy Policy
								</Link>
							</div>
						</div>
					</div>
				</div>

				{/* Right side - White background with login form */}
				<div className="w-full md:w-1/2 flex flex-col">
					<AuthForm />
				</div>
			</div>
		</div>
	)
}

