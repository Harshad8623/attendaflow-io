import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Shield, 
  Bell, 
  Database, 
  Clock,
  Mail,
  Key,
  Save,
  AlertTriangle
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Settings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [autoBackup, setAutoBackup] = useState(true);

  return (
    <DashboardLayout userRole="admin" userName="Dr. Michael Rodriguez">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            System Settings ⚙️
          </h1>
          <p className="text-muted-foreground mt-2">Configure system preferences and security settings</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* General Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5" />
                  General Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="systemName">System Name</Label>
                  <Input id="systemName" defaultValue="AttendaFlow Portal" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="adminEmail">Admin Email</Label>
                  <Input id="adminEmail" type="email" defaultValue="admin@university.edu" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Default Timezone</Label>
                  <Select defaultValue="UTC-5">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC-5">UTC-5 (Eastern)</SelectItem>
                      <SelectItem value="UTC-6">UTC-6 (Central)</SelectItem>
                      <SelectItem value="UTC-7">UTC-7 (Mountain)</SelectItem>
                      <SelectItem value="UTC-8">UTC-8 (Pacific)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input id="sessionTimeout" type="number" defaultValue="30" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">
                      Require 2FA for admin accounts
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Password Complexity</Label>
                    <p className="text-sm text-muted-foreground">
                      Enforce strong password requirements
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxLoginAttempts">Max Login Attempts</Label>
                  <Input id="maxLoginAttempts" type="number" defaultValue="5" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lockoutDuration">Account Lockout Duration (minutes)</Label>
                  <Input id="lockoutDuration" type="number" defaultValue="15" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notification Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notification Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Send system alerts via email
                    </p>
                  </div>
                  <Switch 
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">
                      Browser push notifications
                    </p>
                  </div>
                  <Switch 
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notificationEmail">Notification Email</Label>
                  <Input id="notificationEmail" type="email" defaultValue="notifications@university.edu" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="alertThreshold">Low Attendance Alert (%)</Label>
                  <Input id="alertThreshold" type="number" defaultValue="75" />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* System Maintenance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  System Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Maintenance Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Put system in maintenance mode
                    </p>
                  </div>
                  <Switch 
                    checked={maintenanceMode}
                    onCheckedChange={setMaintenanceMode}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Backup</Label>
                    <p className="text-sm text-muted-foreground">
                      Daily database backups
                    </p>
                  </div>
                  <Switch 
                    checked={autoBackup}
                    onCheckedChange={setAutoBackup}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="backupTime">Backup Time</Label>
                  <Select defaultValue="02:00">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01:00">1:00 AM</SelectItem>
                      <SelectItem value="02:00">2:00 AM</SelectItem>
                      <SelectItem value="03:00">3:00 AM</SelectItem>
                      <SelectItem value="04:00">4:00 AM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Button variant="outline" className="w-full">
                    <Database className="w-4 h-4 mr-2" />
                    Run Manual Backup
                  </Button>
                  
                  <Button variant="outline" className="w-full">
                    <Key className="w-4 h-4 mr-2" />
                    Reset System Keys
                  </Button>
                  
                  <Button variant="destructive" className="w-full">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Clear All Data
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-end"
        >
          <Button size="lg" className="gradient-primary text-primary-foreground interactive-scale">
            <Save className="w-4 h-4 mr-2" />
            Save All Settings
          </Button>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;