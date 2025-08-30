import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, BookOpen, TrendingUp, AlertTriangle, Shield, BarChart3, Settings } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const AdminDashboard = () => {
  const adminData = {
    name: "Dr. Michael Rodriguez",
    role: "System Administrator",
  };

  const systemStats = [
    { label: "Total Students", value: "2,847", change: "+12%", icon: GraduationCap, color: "text-primary" },
    { label: "Active Faculty", value: "156", change: "+3%", icon: Users, color: "text-success" },
    { label: "Departments", value: "8", change: "0%", icon: BookOpen, color: "text-warning" },
    { label: "Overall Attendance", value: "84.2%", change: "+2.1%", icon: TrendingUp, color: "text-primary" },
  ];

  const departmentStats = [
    { name: "Computer Science", students: 645, attendance: 87.2, faculty: 28 },
    { name: "Electrical Engineering", students: 423, attendance: 82.5, faculty: 22 },
    { name: "Mechanical Engineering", students: 398, attendance: 79.8, faculty: 20 },
    { name: "Civil Engineering", students: 367, attendance: 85.1, faculty: 19 },
  ];

  const recentAlerts = [
    { type: "warning", message: "Mechanical Eng. attendance below 80%", time: "2 hours ago" },
    { type: "info", message: "New faculty registration pending", time: "4 hours ago" },
    { type: "success", message: "System backup completed", time: "6 hours ago" },
  ];

  return (
    <DashboardLayout userRole="admin" userName={adminData.name}>
      <div className="space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Admin Dashboard 🔧
          </h1>
          <p className="text-muted-foreground mt-2">System overview and management console</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <Button className="gradient-primary text-primary-foreground interactive-scale">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Users
                </Button>
                <Button className="gradient-success text-success-foreground interactive-scale">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Reports
                </Button>
                <Button variant="outline" className="interactive-scale">
                  <Shield className="w-4 h-4 mr-2" />
                  Security Scan
                </Button>
                <Button variant="outline" className="interactive-scale">
                  System Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* System Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {systemStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="shadow-card interactive-scale">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Department Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Department Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentStats.map((dept, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <h3 className="font-semibold">{dept.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {dept.students} students • {dept.faculty} faculty
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Attendance</p>
                        <Badge variant={dept.attendance >= 80 ? 'default' : 'destructive'}>
                          {dept.attendance}%
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Alerts and Analytics */}
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${
                    alert.type === 'warning' ? 'bg-warning/10 border-warning/20' :
                    alert.type === 'success' ? 'bg-success/10 border-success/20' :
                    'bg-primary/10 border-primary/20'
                  }`}>
                    <div className="flex items-start justify-between">
                      <p className="text-sm">{alert.message}</p>
                      <span className="text-xs text-muted-foreground">{alert.time}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Server Performance</span>
                    <span className="text-success">Excellent</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Database Status</span>
                    <span className="text-success">Online</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Backup Status</span>
                    <span className="text-success">Up to date</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="pt-4">
                  <Badge className="gradient-success text-success-foreground">
                    <Shield className="w-3 h-3 mr-1" />
                    Blockchain Verified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;