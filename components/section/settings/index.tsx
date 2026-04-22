import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ApiSettings from "./ApiSettings"
import AppearanceSettings from "./AppearanceSettings"
import ModelSettings from "./ModelSettings"
import NotificationSettings from "./NotificationSettings"
import ProfileSettings from "./ProfileSettings"
import SettingsHeader from "./SettingsHeader"

export default function Settings() {
	return (
		<>
			<div className="space-y-6 p-4">
				<SettingsHeader />
				<Tabs defaultValue="general" className="animate-fade-in">
					<TabsList className="bg-muted p-1 rounded-lg">
						<TabsTrigger value="general">General</TabsTrigger>
						<TabsTrigger value="api">API Keys</TabsTrigger>
						<TabsTrigger value="models">Model Settings</TabsTrigger>
						<TabsTrigger value="notifications">Notifications</TabsTrigger>
					</TabsList>
					<TabsContent value="general" className="space-y-6">
						<ProfileSettings />
						<AppearanceSettings />
					</TabsContent>
					<TabsContent value="api" className="space-y-6">
						<ApiSettings />
					</TabsContent>
					<TabsContent value="models" className="space-y-6">
						<ModelSettings />
					</TabsContent>
					<TabsContent value="notifications" className="space-y-6">
						<NotificationSettings />
					</TabsContent>
				</Tabs>
			</div>
		</>
	)
}