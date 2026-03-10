"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Eye,
  EyeOff,
  Shield,
  Users,
  ArrowRight,
  ArrowLeft,
  Mail,
  KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  useAdminForgotPassword,
  useAdminResetPassword,
} from "@/hooks/auth/useAdminForgotPassword";
import {
  useStaffForgotPassword,
  useStaffResetPassword,
} from "@/hooks/auth/useStaffForgotPassword";

type Mode = "admin" | "staff";
type Step = "request" | "reset";

function ForgotPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialMode = (searchParams.get("mode") as Mode) ?? "admin";

  const [mode, setMode] = useState<Mode>(initialMode);
  const [step, setStep] = useState<Step>("request");

  // Step 1 state
  const [email, setEmail] = useState("");

  // Step 2 state
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const adminForgot = useAdminForgotPassword();
  const adminReset = useAdminResetPassword();
  const staffForgot = useStaffForgotPassword();
  const staffReset = useStaffResetPassword();

  const isForgotPending = adminForgot.isPending || staffForgot.isPending;
  const isResetPending = adminReset.isPending || staffReset.isPending;

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setEmail("");
    setCode("");
    setNewPassword("");
    setConfirmPassword("");
    setPasswordError("");
    setStep("request");
  };

  const handleRequestCode = (e: React.FormEvent) => {
    e.preventDefault();
    const opts = {
      onSuccess: () => setStep("reset"),
    };
    if (mode === "admin") {
      adminForgot.mutate({ email }, opts);
    } else {
      staffForgot.mutate({ email }, opts);
    }
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    const payload = { email, code, newPassword };
    if (mode === "admin") {
      adminReset.mutate(payload, { onSuccess: () => router.push("/login") });
    } else {
      staffReset.mutate(payload, { onSuccess: () => router.push("/login") });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:px-6 lg:px-8 overflow-hidden relative selection:bg-foreground selection:text-background">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="w-full max-w-sm space-y-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="h-10 w-10 bg-foreground rounded-lg flex items-center justify-center mb-4 shadow-sm">
            <div className="h-4 w-4 bg-background rounded-sm" />
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="space-y-1"
            >
              {step === "request" ? (
                <>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    Forgot password?
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Enter your email and we'll send you a reset code.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    Check your email
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Enter the 6-digit code sent to{" "}
                    <span className="text-foreground font-medium">{email}</span>
                  </p>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-lg shadow-sm p-6 sm:p-8 space-y-6">
          {/* Segmented Control — only shown on step 1 */}
          <AnimatePresence initial={false}>
            {step === "request" && (
              <motion.div
                key="segmented"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 p-1 bg-muted/50 rounded-lg border border-border/50 relative">
                  <button
                    type="button"
                    onClick={() => handleModeChange("admin")}
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
                    type="button"
                    onClick={() => handleModeChange("staff")}
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
                  <motion.div
                    className="absolute inset-y-1 rounded-md bg-background border border-border shadow-sm z-0"
                    layoutId="forgot-active-tab"
                    initial={false}
                    animate={{
                      x: mode === "admin" ? 4 : "100%",
                      width: "calc(50% - 8px)",
                      left: mode === "admin" ? 0 : 4,
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Forms */}
          <AnimatePresence mode="wait">
            {step === "request" ? (
              <motion.form
                key="request-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleRequestCode}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  >
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      className="h-10 pl-9 bg-background/50"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isForgotPending}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-10 font-medium"
                  disabled={isForgotPending}
                >
                  {isForgotPending ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-3 w-3 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Reset Code <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </motion.form>
            ) : (
              <motion.form
                key="reset-form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                onSubmit={handleResetPassword}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label
                    htmlFor="code"
                    className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                  >
                    Reset Code
                  </Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <Input
                      id="code"
                      type="text"
                      inputMode="numeric"
                      placeholder="000000"
                      maxLength={6}
                      className="h-10 pl-9 bg-background/50 tracking-[0.4em] font-mono text-center"
                      value={code}
                      onChange={(e) =>
                        setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
                      }
                      required
                      disabled={isResetPending}
                      autoFocus
                    />
                  </div>
                </div>

                {/* Password fields — revealed once all 6 digits are entered */}
                <AnimatePresence initial={false}>
                  {code.length === 6 && (
                    <motion.div
                      key="password-fields"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden space-y-4"
                    >
                      <div className="space-y-2">
                        <Label
                          htmlFor="newPassword"
                          className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          New Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="newPassword"
                            type={showNewPassword ? "text" : "password"}
                            placeholder="Min. 8 characters"
                            className="h-10 pr-10 bg-background/50"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            minLength={8}
                            disabled={isResetPending}
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                            tabIndex={-1}
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="confirmPassword"
                          className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
                        >
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Re-enter new password"
                            className={cn(
                              "h-10 pr-10 bg-background/50",
                              passwordError &&
                                "border-destructive focus-visible:ring-destructive",
                            )}
                            value={confirmPassword}
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                              setPasswordError("");
                            }}
                            required
                            minLength={8}
                            disabled={isResetPending}
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
                            tabIndex={-1}
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="h-4 w-4" />
                            ) : (
                              <Eye className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        {passwordError && (
                          <p className="text-xs text-destructive">
                            {passwordError}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-2 pt-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="h-10 px-3"
                    onClick={() => {
                      setStep("request");
                      setCode("");
                      setNewPassword("");
                      setConfirmPassword("");
                    }}
                    disabled={isResetPending}
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 h-10 font-medium"
                    disabled={isResetPending || code.length < 6}
                  >
                    {isResetPending ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="h-3 w-3 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                        Resetting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Reset Password <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    mode === "admin"
                      ? adminForgot.mutate({ email })
                      : staffForgot.mutate({ email })
                  }
                  className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors text-center"
                  disabled={isForgotPending}
                >
                  {isForgotPending
                    ? "Resending..."
                    : "Didn't receive a code? Resend"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Back to login */}
        <p className="text-center text-sm text-muted-foreground">
          Remember your password?{" "}
          <Link
            href={`/login`}
            className="text-foreground font-medium underline underline-offset-4 hover:text-foreground/80 transition-colors"
          >
            Back to login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <Suspense>
      <ForgotPasswordContent />
    </Suspense>
  );
}
