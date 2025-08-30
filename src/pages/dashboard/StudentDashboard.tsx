import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, QrCode, Bell, Trophy, Target, TrendingUp, Users, BookOpen } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const StudentDashboard = () => {
  const [attendancePercentage] = useState(78);
  const studentData = {
    name: "Alex Johnson",
    rollNumber: "CS2024001",
    semester: "6th Semester",
    department: "Computer Science",
    avatar: "",
  };

  const recentClasses = [
    { subject: "Data Structures", date: "Today", status: "present" },
    { subject: "Database Management", date: "Yesterday", status: "present" },
    { subject: "Web Development", date: "2 days ago", status: "absent" },
    { subject: "Machine Learning", date: "3 days ago", status: "present" },
  ];

  const achievements = [
    { name: "Perfect Week", description: "100% attendance for 7 days", earned: true },
    { name: "Early Bird", description: "Always on time", earned: true },
    { name: "Consistent Learner", description: "30 days streak", earned: false },
  ];

  return (
    <DashboardLayout userRole="student" userName={studentData.name}>
      <div className="space-y-8">
        {/* Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
            Welcome back, {studentData.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-muted-foreground mt-2">Track your attendance and stay on top of your academic journey</p>
        </motion.div>

        {/* Student Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="shadow-card interactive-scale">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20 ring-4 ring-primary/20">
                  <AvatarImage src={studentData.avatar} />
                  <AvatarFallback className="text-lg bg-gradient-primary text-primary-foreground">
                    {studentData.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{studentData.name}</h2>
                  <p className="text-muted-foreground">{studentData.rollNumber}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="outline">{studentData.semester}</Badge>
                    <Badge variant="outline">{studentData.department}</Badge>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{attendancePercentage}%</div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="shadow-card interactive-scale">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Overall Attendance</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{attendancePercentage}%</div>
                <Progress value={attendancePercentage} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  {attendancePercentage >= 75 ? "✅ Above minimum" : "⚠️ Below 75%"}
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
                <CardTitle className="text-sm font-medium">Classes This Week</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12/15</div>
                <p className="text-xs text-muted-foreground">
                  80% attendance this week
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
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-success">5 Days</div>
                <p className="text-xs text-muted-foreground">
                  Keep it up! 🔥
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
                <CardTitle className="text-sm font-medium">QR Scan Today</CardTitle>
                <QrCode className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <Button className="w-full gradient-success text-success-foreground interactive-scale">
                  <QrCode className="w-4 h-4 mr-2" />
                  Scan QR Code
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Classes & Achievements */}
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Recent Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div>
                      <p className="font-medium">{cls.subject}</p>
                      <p className="text-sm text-muted-foreground">{cls.date}</p>
                    </div>
                    <Badge variant={cls.status === 'present' ? 'default' : 'destructive'}>
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
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-lg border ${achievement.earned ? 'bg-success/10 border-success/20' : 'bg-muted/50 border-border'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{achievement.name}</p>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && <Trophy className="w-5 h-5 text-success" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;