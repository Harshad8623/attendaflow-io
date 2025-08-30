import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Camera, QrCode, Download, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const FacultyDashboard = () => {
  const facultyData = {
    name: "Dr. Sarah Wilson",
    department: "Computer Science",
    classes: [
      { id: 1, name: "Data Structures", students: 45, attendance: 89 },
      { id: 2, name: "Database Management", students: 38, attendance: 76 },
      { id: 3, name: "Web Development", students: 52, attendance: 91 },
    ],
  };

  const todayClasses = [
    { time: "09:00 AM", subject: "Data Structures", room: "CS-101", status: "upcoming" },
    { time: "11:00 AM", subject: "Database Management", room: "CS-102", status: "completed" },
    { time: "02:00 PM", subject: "Web Development", room: "CS-103", status: "upcoming" },
  ];

  const lowAttendanceStudents = [
    { name: "John Smith", rollNo: "CS2024001", attendance: 68 },
    { name: "Emma Johnson", rollNo: "CS2024015", attendance: 72 },
    { name: "Michael Brown", rollNo: "CS2024028", attendance: 65 },
  ];

  return (
    <DashboardLayout userRole="faculty" userName={facultyData.name}>
      <div className="space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Welcome, {facultyData.name.split(' ')[1]}! 👨‍🏫
          </h1>
          <p className="text-muted-foreground mt-2">Manage your classes and track student attendance</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Take Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Button className="gradient-primary text-primary-foreground interactive-scale">
                  <Camera className="w-4 h-4 mr-2" />
                  Face Recognition
                </Button>
                <Button className="gradient-success text-success-foreground interactive-scale">
                  <QrCode className="w-4 h-4 mr-2" />
                  Generate QR Code
                </Button>
                <Button variant="outline" className="interactive-scale">
                  Manual Entry
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-card interactive-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">135</div>
                <p className="text-xs text-muted-foreground">
                  Across 3 subjects
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
                <CardTitle className="text-sm font-medium">Average Attendance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">85%</div>
                <p className="text-xs text-muted-foreground">
                  +2% from last month
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
                <CardTitle className="text-sm font-medium">Classes Today</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  1 completed, 2 upcoming
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="shadow-card interactive-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Low Attendance</CardTitle>
                <AlertTriangle className="h-4 w-4 text-warning" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-warning">3</div>
                <p className="text-xs text-muted-foreground">
                  Students below 75%
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Classes and Alerts */}
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {todayClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{cls.subject}</p>
                      <p className="text-sm text-muted-foreground">{cls.time} • {cls.room}</p>
                    </div>
                    <Badge variant={cls.status === 'completed' ? 'default' : 'secondary'}>
                      {cls.status}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Low Attendance Alert</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {lowAttendanceStudents.map((student, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-warning/10 border border-warning/20">
                    <div>
                      <p className="font-medium">{student.name}</p>
                      <p className="text-sm text-muted-foreground">{student.rollNo}</p>
                    </div>
                    <Badge variant="destructive">{student.attendance}%</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Class Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Class Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {facultyData.classes.map((cls) => (
                  <Card key={cls.id} className="border interactive-scale">
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{cls.name}</h3>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-muted-foreground">
                          {cls.students} students
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Attendance:</span>
                          <Badge variant={cls.attendance >= 75 ? 'default' : 'destructive'}>
                            {cls.attendance}%
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  );
};

export default FacultyDashboard;