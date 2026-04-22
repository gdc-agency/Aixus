"use client"

import { useState } from "react"
import { Breadcrumb } from "./breadcrumb"
import { SiteFooter } from "./footer"
import { DashboardHeader } from "./header"
import { DashboardSidebar } from "./sidebar"

// Define props interface
interface LayoutProps {
  children: React.ReactNode
  breadcrumbTitle?: string
}

export default function Layout({ children, breadcrumbTitle }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  return (
    <div className="relative min-h-screen bg-primary/5">
      <DashboardSidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <DashboardHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="pt-[88px] pb-20 lg:pl-[280px] transition-all duration-300">
        <main className="min-h-[calc(100vh-88px-64px)] mx-auto px-6">
          {breadcrumbTitle && (
            <Breadcrumb
              title={breadcrumbTitle}
              items={[
                { title: "Home", href: "/" },
                { title: breadcrumbTitle, href: "#" },
              ]}
            />
          )}
          <div className="animate-in fade-in-50 duration-500">{children}</div>
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}