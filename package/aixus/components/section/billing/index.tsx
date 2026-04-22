import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BillingHeader from "./BillingHeader"
import BillingHistory from "./BillingHistory"
import BillingInfo from "./BillingInfo"
import CurrentPlan from "./CurrentPlan"
import Invoices from "./Invoices"
import PaymentMethods from "./PaymentMethods"
import PlanComparison from "./PlanComparison"
import UsageSummary from "./UsageSummary"

export default function Billing() {
	return (
		<>
			<div className="space-y-6 p-4">
				<BillingHeader />
				<Tabs defaultValue="overview" className="animate-fade-in">
					<TabsList>
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="payment-methods">Payment Methods</TabsTrigger>
						<TabsTrigger value="invoices">Invoices</TabsTrigger>
						<TabsTrigger value="usage">Usage</TabsTrigger>
					</TabsList>
					<TabsContent value="overview" className="space-y-6">
						<div className="grid gap-6 md:grid-cols-2">
							<CurrentPlan />
							<UsageSummary />
						</div>
						<PlanComparison />
					</TabsContent>
					<TabsContent value="payment-methods" className="space-y-6">
						<PaymentMethods />
						<BillingInfo />
					</TabsContent>
					<TabsContent value="invoices" className="space-y-6">
						<Invoices />
						<BillingHistory />
					</TabsContent>
					<TabsContent value="usage" className="space-y-6">
						<UsageSummary />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}