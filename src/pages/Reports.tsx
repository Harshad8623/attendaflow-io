import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, FileText, Calendar, Filter, TrendingUp, Users, BookOpen } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Reports = () => {
  const reportData = {
    totalClasses: 248,
    averageAttendance: 84.2,
    studentsBelow75: 23,
    perfectAttendees: 145,
  };

  const monthlyData = [
    { month: "January", attendance: 82.5, classes: 62 },
    { month: "February", attendance: 85.1, classes: 58 },
    { month: "March", attendance: 83.8, classes: 64 },
    { month: "April", attendance: 86.2, classes: 64 },
  ];

  const classReports = [
    { subject: "Data Structures", code: "CS301", students: 45, avgAttendance: 87.2, trend: "up" },
    { subject: "Database Management", code: "CS302", students: 42, avgAttendance: 84.1, trend: "up" },
    { subject: "Web Development", code: "CS303", students: 48, avgAttendance: 91.3, trend: "up" },
    { subject: "Machine Learning", code: "CS401", students: 35, avgAttendance: 78.9, trend: "down" },
  ];

  return (
    <DashboardLayout userRole="admin" userName="Admin">
      <div className="space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
              Attendance Reports 📊
            </h1>
            <p className="text-muted-foreground mt-2">Comprehensive analytics and downloadable reports</p>
          </div>
          
          <div className="flex gap-2">
            <Select defaultValue="semester">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semester">This Semester</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>
            
            <Button className="gradient-primary text-primary-foreground interactive-scale">
              <Download className="w-4 h-4 mr-2" />
              Export All
            </Button>
          </div>
        </motion.div>

        {/* Summary Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="shadow-card interactive-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Classes</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{reportData.totalClasses}</div>
                <p className="text-xs text-muted-foreground">
                  This semester
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-card interactive-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                <TrendingUp className="h-4 w-4 text-success" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">{reportData.averageAttendance}%</div>
                <p className="text-xs text-muted-foreground">
                  +2.1% from last month
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="shadow-card interactive-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Below 75%</CardTitle>
                <Users className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">{reportData.studentsBelow75}</div>
                <p className="text-xs text-muted-foreground">
                  Students at risk
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="shadow-card interactive-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Perfect Attendance</CardTitle>
                <BookOpen className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{reportData.perfectAttendees}</div>
                <p className="text-xs text-muted-foreground">
                  100% attendance
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Monthly Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Monthly Attendance Trends</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Chart
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((month, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                    <div>
                      <h3 className="font-semibold">{month.month}</h3>
                      <p className="text-sm text-muted-foreground">{month.classes} classes conducted</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full" 
                          style={{ width: `${month.attendance}%` }}
                        ></div>
                      </div>
                      <Badge className="gradient-primary text-primary-foreground">
                        {month.attendance}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Class-wise Reports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Class-wise Attendance Reports</CardTitle>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classReports.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg border interactive-scale">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{cls.subject}</h3>
                        <Badge variant="outline">{cls.code}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{cls.students} enrolled students</p>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Avg. Attendance</p>
                        <div className="flex items-center gap-2">
                          <Badge variant={cls.avgAttendance >= 80 ? 'default' : 'destructive'}>
                            {cls.avgAttendance}%
                          </Badge>
                          <TrendingUp className={`w-4 h-4 ${cls.trend === 'up' ? 'text-success' : 'text-destructive'}`} />
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Export Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Export Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button className="gradient-success text-success-foreground interactive-scale">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button className="gradient-primary text-primary-foreground interactive-scale">
                  <Download className="w-4 h-4 mr-2" />
                  Export Excel
                </Button>
                <Button variant="outline" className="interactive-scale">
                  <Download className="w-4 h-4 mr-2" />
                  CSV Format
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;