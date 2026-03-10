"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Shield, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLogin } from "@/hooks/useAuth";
import { useStaffLogin } from "@/hooks/useAuthStaff";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type LoginMode = "admin" | "staff";

export default function LoginPage() {
  const [mode, setMode] = useState<LoginMode>("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const adminLogin = useLogin();
  const staffLogin = useStaffLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "admin") {
      adminLogin.mutate({ email, password });
    } else {
      staffLogin.mutate({ email, password });
    }
  };

  const isLoading = adminLogin.isPending || staffLogin.isPending;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:px-6 lg:px-8 overflow-hidden relative selection:bg-foreground selection:text-background">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="w-full max-w-sm space-y-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-10 w-10 bg-foreground rounded-lg flex items-center justify-center mb-4 shadow-sm">
            {/* Placeholder Logo Icon */}
            <div className="h-4 w-4 bg-background rounded-sm" />
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            Welcome back
          </h2>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to access the account
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-card border border-border rounded-lg shadow-sm p-6 sm:p-8 space-y-6">
          {/* Segmented Control */}
          <div className="grid grid-cols-2 p-1 bg-muted/50 rounded-lg border border-border/50 relative">
            <button
              onClick={() => {
                setMode("admin");
                setEmail("");
                setPassword("");
              }}
              className={cn(
                "relative z-10 flex items-center justify-center gap-2 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                mode === "admin"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Admin</span>
            </button>
            <button
              onClick={() => {
                setMode("staff");
                setEmail("");
                setPassword("");
              }}
              className={cn(
                "relative z-10 flex items-center justify-center gap-2 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                mode === "staff"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Staff</span>
            </button>

            {/* Sliding Indicator */}
            <motion.div
              className="absolute inset-y-1 rounded-md bg-background border border-border shadow-sm z-0"
              layoutId="active-tab"
              initial={false}
              animate={{
                x: mode === "admin" ? 4 : "100%",
                width: "calc(50% - 8px)",
                left: mode === "admin" ? 0 : 4,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className="h-10 bg-background/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label
                  htmlFor="password"
                  className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                >
                  Password
                </Label>
                <Link
                  href={`/forgot-password?mode=${mode}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="h-10 pr-10 bg-background/50"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-10 font-medium transition-all"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-3 w-3 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                  Authenticating...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  Sign In <ArrowRight className="w-4 h-4" />
                </span>
              )}
            </Button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="#"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="#"
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
