import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Users, 
  ShieldCheck, 
  Camera, 
  QrCode, 
  BarChart3, 
  Brain, 
  Shield, 
  Clock, 
  Target, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from "lucide-react";
import { useTheme } from "next-themes";
import heroImage from "@/assets/hero-image.jpg";
import faceRecognitionIcon from "@/assets/face-recognition-icon.png";
import qrScannerIcon from "@/assets/qr-scanner-icon.png";

const Index = () => {
  const { setTheme } = useTheme();

  const features = [
    {
      icon: Camera,
      title: "AI Face Recognition",
      description: "Advanced facial recognition technology for seamless, contactless attendance marking",
      image: faceRecognitionIcon,
      color: "text-primary bg-primary/10"
    },
    {
      icon: QrCode,
      title: "QR Code Scanning",
      description: "Quick and easy attendance with mobile QR code scanning functionality",
      image: qrScannerIcon,
      color: "text-success bg-success/10"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Comprehensive dashboards with detailed attendance insights and trends",
      color: "text-warning bg-warning/10"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms predict attendance patterns and identify at-risk students",
      color: "text-purple-600 bg-purple-100 dark:bg-purple-900/20"
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Tamper-proof attendance records secured with blockchain technology",
      color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/20"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Early warning system for academic performance based on attendance patterns",
      color: "text-rose-600 bg-rose-100 dark:bg-rose-900/20"
    }
  ];

  const roles = [
    {
      title: "Student Portal",
      description: "Track your attendance, view analytics, and stay on top of your academic journey",
      icon: GraduationCap,
      href: "/login?role=student",
      color: "gradient-primary",
      features: ["Real-time attendance tracking", "Performance analytics", "Gamification & rewards", "QR code scanning"]
    },
    {
      title: "Faculty Dashboard",
      description: "Manage classes, take attendance, and monitor student performance effortlessly",
      icon: Users,
      href: "/login?role=faculty",
      color: "gradient-success",
      features: ["Multiple attendance methods", "Class analytics", "Export reports", "Student alerts"]
    },
    {
      title: "Admin Console",
      description: "Comprehensive system management with advanced analytics and user control",
      icon: ShieldCheck,
      href: "/login?role=admin",
      color: "gradient-hero",
      features: ["System-wide analytics", "User management", "Security monitoring", "Blockchain verification"]
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Tracked" },
    { number: "1,200+", label: "Faculty Members" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "85%", label: "Time Saved" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-card"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              AttendaFlow
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Features
            </Link>
            <Link to="#roles" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              Solutions
            </Link>
            <Link to="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
              About
            </Link>
            <Button asChild variant="outline" className="interactive-scale">
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center lg:text-left"
            >
              <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20">
                🚀 Next-Generation Attendance System
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Smart AI-Powered 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-success-glow">
                  Attendance & Analytics
                </span>
              </h1>
              
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-lg">
                Transform your educational institution with cutting-edge face recognition, 
                real-time analytics, and blockchain-secured attendance tracking.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 interactive-scale">
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Watch Demo
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-glow">
                <img 
                  src={heroImage} 
                  alt="AI-Powered Attendance System" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-success-glow/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">✨ Powerful Features</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Everything you need for
              <span className="gradient-primary bg-clip-text text-transparent"> modern attendance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines cutting-edge technology with intuitive design 
              to revolutionize how educational institutions manage attendance.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-card border-0 interactive-scale h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-based Access Section */}
      <section id="roles" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">🎯 Tailored Solutions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Choose your
              <span className="gradient-primary bg-clip-text text-transparent"> access level</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three distinct portals designed specifically for students, faculty, and administrators, 
              each with role-appropriate features and insights.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-card border-0 interactive-scale h-full relative overflow-hidden">
                  <div className={`absolute inset-x-0 top-0 h-1 ${role.color}`}></div>
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <role.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-2xl">{role.title}</CardTitle>
                    <p className="text-muted-foreground">{role.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      {role.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className={`w-full ${role.color} text-primary-foreground interactive-scale`}>
                      <Link to={role.href}>
                        Access {role.title}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Ready to transform your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-glow to-success-glow">
                attendance management?
              </span>
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Join thousands of educational institutions already using AttendaFlow to 
              streamline their attendance processes and improve student outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 interactive-scale">
                Start Free Trial
                <Star className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                AttendaFlow
              </span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-foreground transition-smooth">Privacy Policy</Link>
              <Link to="#" className="hover:text-foreground transition-smooth">Terms of Service</Link>
              <Link to="#" className="hover:text-foreground transition-smooth">Contact</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 AttendaFlow. All rights reserved. Built with ❤️ for education.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;