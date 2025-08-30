import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  LayoutDashboard, 
  Users, 
  FileBarChart, 
  Settings, 
  LogOut, 
  Moon, 
  Sun,
  GraduationCap,
  ShieldCheck
} from "lucide-react";
import { useTheme } from "next-themes";

interface DashboardLayoutProps {
  children: ReactNode;
  userRole: "student" | "faculty" | "admin";
  userName: string;
}

export const DashboardLayout = ({ children, userRole, userName }: DashboardLayoutProps) => {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const getRoleIcon = () => {
    switch (userRole) {
      case "student": return GraduationCap;
      case "faculty": return Users;
      case "admin": return ShieldCheck;
    }
  };

  const getRoleBadgeColor = () => {
    switch (userRole) {
      case "student": return "text-primary bg-primary/10";
      case "faculty": return "text-success bg-success/10";
      case "admin": return "text-warning bg-warning/10";
    }
  };

  const navigation = {
    student: [
      { name: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
      { name: "Reports", href: "/reports", icon: FileBarChart },
    ],
    faculty: [
      { name: "Dashboard", href: "/dashboard/faculty", icon: LayoutDashboard },
      { name: "Reports", href: "/reports", icon: FileBarChart },
    ],
    admin: [
      { name: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
      { name: "Users", href: "/admin/users", icon: Users },
      { name: "Reports", href: "/reports", icon: FileBarChart },
      { name: "Settings", href: "/admin/settings", icon: Settings },
    ],
  };

  const RoleIcon = getRoleIcon();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Top Navigation Bar */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-card"
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
              AttendaFlow
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation[userRole].map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="w-9 px-0"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 ring-2 ring-primary/20">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                      {userName.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userName}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <RoleIcon className="w-3 h-3" />
                      <span className={`text-xs px-2 py-1 rounded-full ${getRoleBadgeColor()}`}>
                        {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  );
};