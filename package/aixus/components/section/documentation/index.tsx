"use client"

import { Logo } from "@/components/elements/logo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle2, ChevronRight, Copy, Heart, Palette, Terminal, Type } from "lucide-react"
import { useState } from "react"

export default function Documentation() {
	const [activeSection, setActiveSection] = useState("introduction")
	const [copiedCode, setCopiedCode] = useState(null)

	const copyToClipboard = (text, id) => {
		navigator.clipboard.writeText(text)
		setCopiedCode(id)
		setTimeout(() => setCopiedCode(null), 2000)
	}

	const menuItems = [
		{ id: "introduction", label: "Introduction", icon: BookOpen },
		{ id: "installation", label: "Installation", icon: Terminal },
		{ id: "configuration", label: "Configuration", icon: CheckCircle2 },
		{ id: "logo-change", label: "Logo Change", icon: Palette },
		{ id: "font-change", label: "Font Change", icon: Type },
		{ id: "support", label: "Support and Credits", icon: Heart },
	]

	const envExampleText = `NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_NAME=AIXUS
DATABASE_URL=your_database_url
API_KEY=your_api_key`

	return (
		<div className="flex-1 flex gap-8 p-10 pt-8 min-h-screen bg-gradient-to-br from-background to-background/80 dark:from-background dark:to-background/80">
			{/* Sidebar Menu - Theme-aware styling */}
			<aside className="w-72 flex-shrink-0">
				<div className="sticky top-8 bg-black rounded-2xl shadow-lg border border-border/50 dark:border-border/30 overflow-hidden">
					<div className="p-6 border-b border-border/50 dark:border-border/30">
						<Logo size="lg" />
					</div>
					<nav className="p-4 space-y-2">
						{menuItems.map((item) => {
							const Icon = item.icon
							const isActive = activeSection === item.id
							return (
								<button
									key={item.id}
									onClick={() => setActiveSection(item.id)}
									className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-300 group ${isActive
										? "bg-gradient-to-r from-primary to-primary/70 text-primary-foreground shadow-inner dark:from-primary dark:to-primary/60"
										: "hover:bg-muted/70 text-muted-foreground hover:text-foreground dark:hover:bg-muted/50 dark:text-muted-foreground dark:hover:text-foreground"
										}`}
									aria-current={isActive ? "page" : undefined}
									aria-label={`Navigate to ${item.label}`}
								>
									<Icon className={`h-5 w-5 flex-shrink-0 transition-colors ${isActive ? 'text-primary-foreground' : 'group-hover:text-primary dark:group-hover:text-primary'}`} />
									<span className="text-base font-semibold flex-1">{item.label}</span>
									<ChevronRight className={`h-5 w-5 ml-auto transition-transform duration-300 ${isActive ? 'translate-x-1 opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
								</button>
							)
						})}
					</nav>
				</div>
			</aside>

			{/* Main Content - Theme-aware card design */}
			<div className="flex-1 space-y-8 overflow-y-auto max-w-4xl">
				{/* Introduction Section */}
				{activeSection === "introduction" && (
					<Card className="shadow-lg border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden">
						<CardHeader className="bg-muted/30 dark:bg-muted/20 p-6">
							<CardTitle className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground dark:text-foreground">
								<BookOpen className="h-7 w-7 text-primary dark:text-primary" />
								Welcome to AIXUS
							</CardTitle>
							<CardDescription className="text-lg text-muted-foreground/80 dark:text-muted-foreground/70">Your complete AI agent management platform</CardDescription>
						</CardHeader>
						<CardContent className="p-6 space-y-6">
							<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
								AIXUS is a powerful platform designed to help you build, deploy, and manage AI agents with ease.
								Whether you're creating customer support bots, data analysis agents, or custom AI solutions, AIXUS
								provides all the tools you need.
							</p>

							<div className="space-y-4">
								<h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground dark:text-foreground">
									<CheckCircle2 className="h-6 w-6 text-primary dark:text-primary" />
									Key Features
								</h3>
								<ul className="space-y-3">
									{[
										"Visual agent builder with drag-and-drop interface",
										"Real-time analytics and performance monitoring",
										"Multiple AI model support (GPT-4, Claude, Gemini, and more)",
										"Conversation management and history tracking",
										"One-click deployment to production",
										"Comprehensive API for integration"
									].map((feature, index) => (
										<li key={index} className="flex items-start gap-3 p-3 bg-muted/30 dark:bg-muted/20 rounded-xl hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors">
											<CheckCircle2 className="h-5 w-5 text-primary dark:text-primary mt-1 flex-shrink-0" />
											<span className="text-base text-foreground dark:text-foreground">{feature}</span>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-4 pt-6 border-t border-border/50 dark:border-border/30">
								<h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground dark:text-foreground">
									<CheckCircle2 className="h-6 w-6 text-primary dark:text-primary" />
									Getting Started
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									Follow the installation guide to set up AIXUS on your local machine or server. Once installed, you
									can start building your first AI agent in minutes.
								</p>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Installation Section */}
				{activeSection === "installation" && (
					<>
						<Card className="shadow-lg border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden">
							<CardHeader className="bg-muted/30 dark:bg-muted/20 p-6">
								<CardTitle className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground dark:text-foreground">
									<Terminal className="h-7 w-7 text-primary dark:text-primary" />
									Installation Guide
								</CardTitle>
								<CardDescription className="text-lg text-muted-foreground/80 dark:text-muted-foreground/70">Follow these steps to install and set up AIXUS on your system</CardDescription>
							</CardHeader>
							<CardContent className="p-6 space-y-8">
								{/* Prerequisites */}
								<div className="space-y-4">
									<h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground dark:text-foreground">
										<CheckCircle2 className="h-6 w-6 text-primary dark:text-primary" />
										Prerequisites
									</h3>
									<div className="grid gap-3 sm:grid-cols-2">
										{[
											{ name: "Node.js", version: "v18.0.0 or higher" },
											{ name: "npm", version: "v9.0.0 or higher" },
											{ name: "Git", version: "Latest version" }
										].map((prereq, index) => (
											<div key={index} className="flex items-center gap-3 p-3 bg-muted/30 dark:bg-muted/20 rounded-xl hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors">
												<Badge variant="outline" className="flex-shrink-0 text-base font-semibold text-foreground dark:text-foreground border-border dark:border-border/70">{prereq.name}</Badge>
												<span className="text-base text-muted-foreground dark:text-muted-foreground/80">{prereq.version}</span>
											</div>
										))}
									</div>
								</div>

								{/* Steps */}
								{[
									{ step: 1, title: "Clone the Repository", code: "git clone https://github.com/yourusername/aixus.git", id: "clone" },
									{ step: 2, title: "Navigate to Project Directory", code: "cd aixus", id: "cd" },
									{ step: 3, title: "Install Dependencies", code: "npm install", id: "install", description: "This will install all required dependencies including Next.js, React, and UI components." },
									{ step: 4, title: "Configure Environment Variables", code: envExampleText, id: "env", description: "Create a .env.local file in the root directory:" },
									{ step: 5, title: "Start Development Server", code: "npm run dev", id: "dev", description: "Open http://localhost:3000 in your browser to see the application." }
								].map(({ step, title, code, id, description }) => (
									<div key={step} className="space-y-4">
										<h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground dark:text-foreground">
											<span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-base font-bold">{step}</span>
											{title}
										</h3>
										{description && <p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">{description}</p>}
										<div className="relative bg-muted/50 dark:bg-muted/40 rounded-xl p-5 font-mono text-base border border-border/50 dark:border-border/30 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
											<code className="block whitespace-pre text-foreground dark:text-foreground">{code}</code>
											<Button
												size="sm"
												variant="outline"
												className="absolute top-3 right-3 border-border dark:border-border/70 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
												onClick={() => copyToClipboard(code, id)}
											>
												{copiedCode === id ? (
													<CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
												) : (
													<Copy className="h-5 w-5 text-foreground dark:text-foreground" />
												)}
											</Button>
										</div>
									</div>
								))}

								{/* Build for Production */}
								<div className="border-t pt-6 space-y-4 border-border/50 dark:border-border/30">
									<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Build for Production</h3>
									<div className="grid gap-3 sm:grid-cols-2">
										{[
											{ code: "npm run build", id: "build" },
											{ code: "npm start", id: "start" }
										].map(({ code, id }, index) => (
											<div key={index} className="relative bg-muted/50 dark:bg-muted/40 rounded-xl p-5 font-mono text-base border border-border/50 dark:border-border/30 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
												<code className="text-foreground dark:text-foreground">{code}</code>
												<Button
													size="sm"
													variant="outline"
													className="absolute top-3 right-3 border-border dark:border-border/70 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
													onClick={() => copyToClipboard(code, id)}
												>
													{copiedCode === id ? (
														<CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
													) : (
														<Copy className="h-5 w-5 text-foreground dark:text-foreground" />
													)}
												</Button>
											</div>
										))}
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Troubleshooting */}
						<Card className="shadow-lg border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden">
							<CardHeader className="bg-muted/30 dark:bg-muted/20 p-6">
								<CardTitle className="text-3xl font-bold tracking-tight text-foreground dark:text-foreground">Troubleshooting</CardTitle>
								<CardDescription className="text-lg text-muted-foreground/80 dark:text-muted-foreground/70">Common issues and solutions</CardDescription>
							</CardHeader>
							<CardContent className="p-6 space-y-6">
								{[
									{
										title: "Port already in use",
										description: "If port 3000 is already in use, you can specify a different port:",
										code: "PORT=3001 npm run dev"
									},
									{
										title: "Module not found errors",
										description: "Try clearing the cache and reinstalling dependencies:",
										code: ["rm -rf node_modules package-lock.json", "npm install"]
									}
								].map(({ title, description, code }, index) => (
									<div key={index} className="space-y-4">
										<h4 className="text-xl font-semibold text-foreground dark:text-foreground">{title}</h4>
										<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">{description}</p>
										<div className="bg-muted/50 dark:bg-muted/40 rounded-xl p-5 font-mono text-base border border-border/50 dark:border-border/30 space-y-2 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
											{Array.isArray(code) ? code.map((line, i) => <code key={i} className="block text-foreground dark:text-foreground">{line}</code>) : <code className="text-foreground dark:text-foreground">{code}</code>}
										</div>
									</div>
								))}
							</CardContent>
						</Card>
					</>
				)}

				{/* Configuration Section */}
				{activeSection === "configuration" && (
					<Card className="shadow-lg border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden">
						<CardHeader className="bg-muted/30 dark:bg-muted/20 p-6">
							<CardTitle className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground dark:text-foreground">
								<CheckCircle2 className="h-7 w-7 text-primary dark:text-primary" />
								Configuration
							</CardTitle>
							<CardDescription className="text-lg text-muted-foreground/80 dark:text-muted-foreground/70">Configure AIXUS to match your requirements</CardDescription>
						</CardHeader>
						<CardContent className="p-6 space-y-8">
							<div className="space-y-4">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Environment Variables</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									AIXUS uses environment variables for configuration. Here are the available options:
								</p>
								<div className="space-y-3">
									{[
										{ name: "NEXT_PUBLIC_API_URL", desc: "The base URL for your API endpoints" },
										{ name: "NEXT_PUBLIC_APP_NAME", desc: "The name of your application (default: AIXUS)" },
										{ name: "DATABASE_URL", desc: "Connection string for your database" },
										{ name: "API_KEY", desc: "Your API key for authentication" }
									].map((env, index) => (
										<div key={index} className="border rounded-xl p-5 bg-muted/30 dark:bg-muted/20 hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors">
											<code className="text-base font-semibold text-primary dark:text-primary">{env.name}</code>
											<p className="text-lg text-muted-foreground mt-2 dark:text-muted-foreground/80">{env.desc}</p>
										</div>
									))}
								</div>
							</div>

							<div className="space-y-4 pt-6 border-t border-border/50 dark:border-border/30">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Application Settings</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									You can customize various application settings in the{" "}
									<code className="bg-muted px-2 py-1 rounded font-mono text-foreground dark:text-foreground">config</code> directory:
								</p>
								<ul className="space-y-3">
									{[
										"Theme settings: Customize colors, fonts, and UI components",
										"API configuration: Set timeouts, retry logic, and endpoints",
										"Feature flags: Enable or disable specific features"
									].map((setting, index) => (
										<li key={index} className="flex items-start gap-3 p-3 bg-muted/30 dark:bg-muted/20 rounded-xl hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors">
											<CheckCircle2 className="h-5 w-5 text-primary dark:text-primary mt-1 flex-shrink-0" />
											<span className="text-lg text-foreground dark:text-foreground">
												<strong className="text-foreground dark:text-foreground">{setting.split(":")[0]}:</strong>{setting.split(":")[1]}
											</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Logo Change Section */}
				{activeSection === "logo-change" && (
					<Card className="shadow-lg border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden">
						<CardHeader className="bg-muted/30 dark:bg-muted/20 p-6">
							<CardTitle className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground dark:text-foreground">
								<Palette className="h-7 w-7 text-primary dark:text-primary" />
								Change Logo
							</CardTitle>
							<CardDescription className="text-lg text-muted-foreground/80 dark:text-muted-foreground/70">Customize the application logo to match your brand</CardDescription>
						</CardHeader>
						<CardContent className="p-6 space-y-8">
							<div className="space-y-4">
								<h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground dark:text-foreground">
									<CheckCircle2 className="h-6 w-6 text-primary dark:text-primary" />
									Step 1: Prepare Your Logo
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									Prepare your logo files in the following formats and sizes:
								</p>
								<ul className="space-y-3">
									{[
										"Main logo: SVG or PNG format, recommended size 200x50px",
										"Favicon: ICO or PNG format, 32x32px or 64x64px",
										"Mobile icon: PNG format, 180x180px for iOS"
									].map((item, index) => (
										<li key={index} className="flex items-start gap-3 p-3 bg-muted/30 dark:bg-muted/20 rounded-xl hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors">
											<CheckCircle2 className="h-5 w-5 text-primary dark:text-primary mt-1 flex-shrink-0" />
											<span className="text-lg text-foreground dark:text-foreground">
												<strong className="text-foreground dark:text-foreground">{item.split(":")[0]}:</strong>{item.split(":")[1]}
											</span>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-4">
								<h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground dark:text-foreground">
									<CheckCircle2 className="h-6 w-6 text-primary dark:text-primary" />
									Step 2: Replace Logo Files
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									Replace the logo files in the <code className="bg-muted px-2 py-1 rounded font-mono text-foreground dark:text-foreground">public</code> directory:
								</p>
								<div className="bg-muted/50 dark:bg-muted/40 rounded-xl p-5 font-mono text-base border border-border/50 dark:border-border/30 space-y-2 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
									<div><code className="text-foreground dark:text-foreground">public/logo.svg</code> - Main logo</div>
									<div><code className="text-foreground dark:text-foreground">public/favicon.ico</code> - Browser favicon</div>
									<div><code className="text-foreground dark:text-foreground">public/apple-touch-icon.png</code> - iOS icon</div>
								</div>
							</div>

							<div className="space-y-4 pt-6 border-t border-border/50 dark:border-border/30">
								<h3 className="text-2xl font-semibold flex items-center gap-3 text-foreground dark:text-foreground">
									<CheckCircle2 className="h-6 w-6 text-primary dark:text-primary" />
									Step 3: Update Logo Component
								</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									If you need to adjust the logo size or styling, edit the logo component:
								</p>
								<div className="relative bg-muted/50 dark:bg-muted/40 rounded-xl p-5 border border-border/50 dark:border-border/30 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
									<pre className="font-mono text-base whitespace-pre-wrap text-foreground dark:text-foreground">{`// components/layout/logo.jsx
import Image from "next/image"

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="AIXUS Logo"
      width={120}
      height={30}
      priority
    />
  )
}`}</pre>
									<Button
										size="sm"
										variant="outline"
										className="absolute top-3 right-3 border-border dark:border-border/70 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
										onClick={() =>
											copyToClipboard(
												'// components/layout/logo.jsx\nimport Image from "next/image"\n\nexport default function Logo() {\n  return (\n    <Image\n      src="/logo.svg"\n      alt="AIXUS Logo"\n      width={120}\n      height={30}\n      priority\n    />\n  )\n}',
												"logo-code"
											)
										}
									>
										{copiedCode === "logo-code" ? (
											<CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
										) : (
											<Copy className="h-5 w-5 text-foreground dark:text-foreground" />
										)}
									</Button>
								</div>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Font Change Section */}
				{activeSection === "font-change" && (
					<Card className="shadow-lg border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden">
						<CardHeader className="bg-muted/30 dark:bg-muted/20 p-6">
							<CardTitle className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground dark:text-foreground">
								<Type className="h-7 w-7 text-primary dark:text-primary" />
								Change Fonts
							</CardTitle>
							<CardDescription className="text-lg text-muted-foreground/80 dark:text-muted-foreground/70">Customize typography to match your brand identity</CardDescription>
						</CardHeader>
						<CardContent className="p-6 space-y-8">
							<div className="space-y-4">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Using Google Fonts</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									AIXUS uses Next.js font optimization. To change fonts, update the{" "}
									<code className="bg-muted px-2 py-1 rounded font-mono text-foreground dark:text-foreground">app/layout.jsx</code> file:
								</p>
								<div className="relative bg-muted/50 dark:bg-muted/40 rounded-xl p-5 border border-border/50 dark:border-border/30 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
									<pre className="font-mono text-base whitespace-pre-wrap text-foreground dark:text-foreground">{`import { Inter, Roboto_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${inter.variable} \${robotoMono.variable}\`}>
      <body>{children}</body>
    </html>
  )
}`}</pre>
									<Button
										size="sm"
										variant="outline"
										className="absolute top-3 right-3 border-border dark:border-border/70 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
										onClick={() =>
											copyToClipboard(
												"import { Inter, Roboto_Mono } from 'next/font/google'\n\nconst inter = Inter({\n  subsets: ['latin'],\n  variable: '--font-inter',\n})\n\nconst robotoMono = Roboto_Mono({\n  subsets: ['latin'],\n  variable: '--font-roboto-mono',\n})\n\nexport default function RootLayout({ children }) {\n  return (\n    <html lang=\"en\" className={`${inter.variable} ${robotoMono.variable}`}>\n      <body>{children}</body>\n    </html>\n  )\n}",
												"font-code"
											)
										}
									>
										{copiedCode === "font-code" ? (
											<CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
										) : (
											<Copy className="h-5 w-5 text-foreground dark:text-foreground" />
										)}
									</Button>
								</div>
							</div>

							<div className="space-y-4 pt-6 border-t border-border/50 dark:border-border/30">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Update Tailwind Configuration</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									Update your <code className="bg-muted px-2 py-1 rounded font-mono text-foreground dark:text-foreground">tailwind.config.js</code> to use the new fonts:
								</p>
								<div className="relative bg-muted/50 dark:bg-muted/40 rounded-xl p-5 border border-border/50 dark:border-border/30 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
									<pre className="font-mono text-base whitespace-pre-wrap text-foreground dark:text-foreground">{`module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
}`}</pre>
									<Button
										size="sm"
										variant="outline"
										className="absolute top-3 right-3 border-border dark:border-border/70 hover:bg-primary hover:text-primary-foreground dark:hover:bg-primary dark:hover:text-primary-foreground transition-colors"
										onClick={() =>
											copyToClipboard(
												"module.exports = {\n  theme: {\n    extend: {\n      fontFamily: {\n        sans: ['var(--font-inter)'],\n        mono: ['var(--font-roboto-mono)'],\n      },\n    },\n  },\n}",
												"tailwind-font"
											)
										}
									>
										{copiedCode === "tailwind-font" ? (
											<CheckCircle2 className="h-5 w-5 text-green-500 dark:text-green-400" />
										) : (
											<Copy className="h-5 w-5 text-foreground dark:text-foreground" />
										)}
									</Button>
								</div>
							</div>

							<div className="space-y-4">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Using Custom Fonts</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									To use custom fonts, place your font files in the{" "}
									<code className="bg-muted px-2 py-1 rounded font-mono text-foreground dark:text-foreground">public/fonts</code> directory and import them in your CSS:
								</p>
								<div className="bg-muted/50 dark:bg-muted/40 rounded-xl p-5 font-mono text-base border border-border/50 dark:border-border/30 hover:bg-muted/70 dark:hover:bg-muted/50 transition-colors">
									<pre className="text-foreground dark:text-foreground">{`@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom-font.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}`}</pre>
								</div>
							</div>
						</CardContent>
					</Card>
				)}

				{/* Support and Credits Section */}
				{activeSection === "support" && (
					<Card className="shadow-lg border border-border/50 dark:border-border/30 rounded-2xl overflow-hidden">
						<CardHeader className="bg-muted/30 dark:bg-muted/20 p-6">
							<CardTitle className="flex items-center gap-3 text-3xl font-bold tracking-tight text-foreground dark:text-foreground">
								<Heart className="h-7 w-7 text-primary dark:text-primary" />
								Support and Credits
							</CardTitle>
							<CardDescription className="text-lg text-muted-foreground/80 dark:text-muted-foreground/70">Get help and learn about the technologies behind AIXUS</CardDescription>
						</CardHeader>
						<CardContent className="p-6 space-y-8">
							<div className="space-y-4">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Getting Support</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									If you need help with AIXUS, here are the available support channels:
								</p>
								<ul className="space-y-3">
									{[
										"Documentation: Check this documentation for guides and tutorials",
										"GitHub Issues: Report bugs or request features on our GitHub repository",
										"Community Forum: Join discussions with other AIXUS users",
										"Email Support: Contact us at support@aixus.com"
									].map((item, index) => (
										<li key={index} className="flex items-start gap-3 p-3 bg-muted/30 dark:bg-muted/20 rounded-xl hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors">
											<CheckCircle2 className="h-5 w-5 text-primary dark:text-primary mt-1 flex-shrink-0" />
											<span className="text-lg text-foreground dark:text-foreground">
												<strong className="text-foreground dark:text-foreground">{item.split(":")[0]}:</strong>{item.split(":")[1]}
											</span>
										</li>
									))}
								</ul>
							</div>

							<div className="space-y-4 pt-6 border-t border-border/50 dark:border-border/30">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Built With</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									AIXUS is built with modern technologies and open-source libraries:
								</p>
								<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
									{[
										{ title: "Next.js", desc: "React framework for production" },
										{ title: "React", desc: "UI component library" },
										{ title: "Tailwind CSS", desc: "Utility-first CSS framework" },
										{ title: "shadcn/ui", desc: "Re-usable component library" },
										{ title: "Lucide Icons", desc: "Beautiful icon set" },
										{ title: "Recharts", desc: "Charting library for analytics" }
									].map((tech, index) => (
										<div key={index} className="border rounded-xl p-5 bg-muted/30 dark:bg-muted/20 hover:bg-muted/50 dark:hover:bg-muted/30 hover:shadow-md transition-all">
											<h4 className="font-semibold text-lg mb-2 text-foreground dark:text-foreground">{tech.title}</h4>
											<p className="text-base text-muted-foreground dark:text-muted-foreground/80">{tech.desc}</p>
										</div>
									))}
								</div>
							</div>

							<div className="space-y-4 pt-6 border-t border-border/50 dark:border-border/30">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">License</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									AIXUS is released under the MIT License. You are free to use, modify, and distribute this software
									in accordance with the license terms.
								</p>
							</div>

							<div className="space-y-4 pt-6 border-t border-border/50 dark:border-border/30">
								<h3 className="text-2xl font-semibold text-foreground dark:text-foreground">Contributing</h3>
								<p className="text-lg text-muted-foreground leading-relaxed dark:text-muted-foreground/80">
									We welcome contributions from the community! If you'd like to contribute:
								</p>
								<ul className="space-y-3">
									{[
										"Fork the repository on GitHub",
										"Create a feature branch for your changes",
										"Submit a pull request with a clear description"
									].map((item, index) => (
										<li key={index} className="flex items-start gap-3 p-3 bg-muted/30 dark:bg-muted/20 rounded-xl hover:bg-muted/50 dark:hover:bg-muted/30 transition-colors">
											<CheckCircle2 className="h-5 w-5 text-primary dark:text-primary mt-1 flex-shrink-0" />
											<span className="text-lg text-foreground dark:text-foreground">{item}</span>
										</li>
									))}
								</ul>
							</div>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	)
}