"use client";

import { useState, useEffect } from "react";
import {
  User,
  KeyRound,
  FileText,
  Loader2,
  Eye,
  EyeOff,
  PlusCircle,
  ExternalLink,
  Search,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useCurrentStaff } from "@/hooks/useAuthStaff";
import {
  useUpdateStaffProfile,
  useAddStaffDocument,
  useChangeStaffPassword,
} from "@/hooks/useStaff";
import { useStaffStore } from "@/store/staff.store";
import type { Staff } from "@/types/staff.types";

const navItems = [
  { key: "profile", label: "Profile", icon: User },
  { key: "security", label: "Security", icon: KeyRound },
  { key: "documents", label: "Documents", icon: FileText },
];

export default function StaffSettingsPage() {
  const [activeSection, setActiveSection] = useState("profile");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: staffData, isLoading } = useCurrentStaff();
  const { staff } = useStaffStore();
  const current = staffData ?? staff;

  const filteredNav = navItems.filter((item) =>
    item.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
      {/* Sidebar */}
      <aside className="lg:w-56 shrink-0">
        <div className="sticky top-20 space-y-4">
          <h1 className="text-2xl font-semibold">Settings</h1>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted/30 border-muted"
            />
          </div>

          <nav className="flex flex-col gap-0.5">
            {filteredNav.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActiveSection(item.key)}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors w-full text-left",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 max-w-2xl">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <>
            {activeSection === "profile" && (
              <ProfileSection current={current} />
            )}
            {activeSection === "security" && <SecuritySection />}
            {activeSection === "documents" && (
              <DocumentsSection documents={current?.documents ?? []} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

/* ─── Profile Section ───────────────────────────────────────────────────────── */

function ProfileSection({ current }: { current: Staff | null | undefined }) {
  const [firstName, setFirstName] = useState(current?.firstName ?? "");
  const [lastName, setLastName] = useState(current?.lastName ?? "");
  const [phone, setPhone] = useState(current?.phone ?? "");

  const updateProfile = useUpdateStaffProfile();

  useEffect(() => {
    if (current) {
      setFirstName(current.firstName);
      setLastName(current.lastName);
      setPhone(current.phone ?? "");
    }
  }, [current]);

  const getInitials = () =>
    `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile.mutate({ firstName, lastName, phone: phone || undefined });
  };

  return (
    <div className="space-y-6">
      {/* Info card */}
      <div className="rounded-lg border bg-card p-6 flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback className="text-xl">{getInitials()}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-lg">
            {firstName} {lastName}
          </p>
          <p className="text-sm text-muted-foreground">{current?.email}</p>
          <Badge variant="outline" className="mt-1 text-xs capitalize">
            {current?.position}
          </Badge>
        </div>
      </div>

      {/* Edit form */}
      <div className="rounded-lg border bg-card">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Personal Information</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Update your first name, last name, and phone number.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 555 000 0000"
            />
          </div>

          {/* Read-only fields */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <Label className="text-muted-foreground">Email</Label>
              <Input
                value={current?.email ?? ""}
                disabled
                className="bg-muted/40"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Position</Label>
              <Input
                value={current?.position ?? ""}
                disabled
                className="bg-muted/40"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Department</Label>
              <Input
                value={current?.department ?? "—"}
                disabled
                className="bg-muted/40"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-muted-foreground">Employment Type</Label>
              <Input
                value={current?.employmentType ?? ""}
                disabled
                className="bg-muted/40 capitalize"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button type="submit" disabled={updateProfile.isPending}>
              {updateProfile.isPending && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─── Security Section ──────────────────────────────────────────────────────── */

function SecuritySection() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [mismatch, setMismatch] = useState(false);

  const changePassword = useChangeStaffPassword();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMismatch(true);
      return;
    }
    setMismatch(false);
    changePassword.mutate(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          setCurrentPassword("");
          setNewPassword("");
          setConfirmPassword("");
        },
      },
    );
  };

  return (
    <div className="rounded-lg border bg-card">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Change Password</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Update your password. Minimum 8 characters.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <PasswordInput
          id="currentPassword"
          label="Current Password"
          value={currentPassword}
          onChange={setCurrentPassword}
          show={showCurrent}
          onToggle={() => setShowCurrent((v) => !v)}
          placeholder="Enter current password"
        />
        <PasswordInput
          id="newPassword"
          label="New Password"
          value={newPassword}
          onChange={(v) => {
            setNewPassword(v);
            setMismatch(false);
          }}
          show={showNew}
          onToggle={() => setShowNew((v) => !v)}
          placeholder="Min. 8 characters"
          minLength={8}
        />
        <PasswordInput
          id="confirmPassword"
          label="Confirm New Password"
          value={confirmPassword}
          onChange={(v) => {
            setConfirmPassword(v);
            setMismatch(false);
          }}
          show={showConfirm}
          onToggle={() => setShowConfirm((v) => !v)}
          placeholder="Repeat new password"
          minLength={8}
        />
        {mismatch && (
          <p className="text-sm text-destructive">
            New passwords do not match.
          </p>
        )}
        <div className="flex justify-end pt-2">
          <Button type="submit" disabled={changePassword.isPending}>
            {changePassword.isPending && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
}

/* ─── Password Input helper ─────────────────────────────────────────────────── */

function PasswordInput({
  id,
  label,
  value,
  onChange,
  show,
  onToggle,
  placeholder,
  minLength,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  show: boolean;
  onToggle: () => void;
  placeholder?: string;
  minLength?: number;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          minLength={minLength}
          required
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          onClick={onToggle}
        >
          {show ? (
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          ) : (
            <Eye className="h-4 w-4 text-muted-foreground" />
          )}
        </Button>
      </div>
    </div>
  );
}

/* ─── Documents Section ─────────────────────────────────────────────────────── */

interface StaffDocumentItem {
  name: string;
  url: string;
  type: string;
  uploadedAt: string;
}

function DocumentsSection({ documents }: { documents: StaffDocumentItem[] }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("");

  const addDocument = useAddStaffDocument();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDocument.mutate(
      { name, url, type },
      {
        onSuccess: () => {
          setName("");
          setUrl("");
          setType("");
        },
      },
    );
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="space-y-6">
      {/* Add document form */}
      <div className="rounded-lg border bg-card">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Add Document</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Attach a document using an external URL (e.g. Google Drive,
            Dropbox).
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="docName">Document Name</Label>
              <Input
                id="docName"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Gov't ID"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="docType">Document Type</Label>
              <Input
                id="docType"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="e.g. ID, Contract, Certificate"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="docUrl">Document URL</Label>
            <Input
              id="docUrl"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://drive.google.com/..."
              required
            />
          </div>
          <div className="flex justify-end pt-2">
            <Button type="submit" disabled={addDocument.isPending}>
              {addDocument.isPending ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <PlusCircle className="mr-2 h-4 w-4" />
              )}
              Add Document
            </Button>
          </div>
        </form>
      </div>

      {/* Documents list */}
      <div className="rounded-lg border bg-card">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">My Documents</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {documents.length} document{documents.length !== 1 ? "s" : ""} on
            file.
          </p>
        </div>
        {documents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center text-muted-foreground">
            <FileText className="h-12 w-12 mb-4 opacity-40" />
            <p className="text-sm">No documents added yet.</p>
          </div>
        ) : (
          <ul className="divide-y">
            {documents.map((doc, i) => (
              <li
                key={i}
                className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{doc.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Badge variant="secondary" className="text-xs">
                        {doc.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(doc.uploadedAt)}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 ml-4"
                >
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
