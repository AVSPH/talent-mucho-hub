"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    MoreHorizontal,
    CheckCircle2,
    XCircle,
    Trash2,
    User,
    MessageSquare,
    Loader2
} from "lucide-react";
import { format } from "date-fns";
import type { CommentWithLead } from "@/types/comment.types";
import { cn } from "@/lib/utils";

interface CommentsTableProps {
    comments: CommentWithLead[];
    isLoading: boolean;
    onApproveToggle: (comment: CommentWithLead) => void;
    onDelete: (commentId: string) => void;
    isActionLoading?: boolean;
}

export function CommentsTable({
    comments,
    isLoading,
    onApproveToggle,
    onDelete,
    isActionLoading,
}: CommentsTableProps) {
    if (isLoading) {
        return (
            <div className="flex h-[400px] items-center justify-center rounded-md border">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        );
    }

    if (comments.length === 0) {
        return (
            <div className="flex h-[400px] flex-col items-center justify-center rounded-md border bg-muted/10 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <MessageSquare className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="mt-4 space-y-1">
                    <h3 className="font-medium text-muted-foreground">No comments yet</h3>
                    <p className="text-sm text-muted-foreground/60">
                        Comments will appear here once users start engaging.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-md border bg-card">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[250px]">Author</TableHead>
                        <TableHead>Comment</TableHead>
                        <TableHead className="w-[150px]">Date</TableHead>
                        <TableHead className="w-[100px]">Status</TableHead>
                        <TableHead className="w-[80px] text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {comments.map((comment) => (
                        <TableRow key={comment._id} className="group">
                            <TableCell className="align-top">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                                        <User className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium">
                                            {comment.lead?.name || "Anonymous"}
                                        </span>
                                        <span className="text-xs text-muted-foreground">
                                            {comment.lead?.email}
                                        </span>
                                    </div>
                                </div>
                            </TableCell>

                            <TableCell className="align-top min-w-[300px]">
                                <p className="text-sm leading-relaxed whitespace-pre-wrap line-clamp-3 group-hover:line-clamp-none transition-all">
                                    {comment.comment}
                                </p>
                            </TableCell>

                            <TableCell className="align-top whitespace-nowrap text-sm text-muted-foreground">
                                {format(new Date(comment.createdAt), "MMM d, yyyy")}
                                <br />
                                <span className="text-xs opacity-70">
                                    {format(new Date(comment.createdAt), "HH:mm")}
                                </span>
                            </TableCell>

                            <TableCell className="align-top">
                                <Badge
                                    variant={comment.isApproved ? "default" : "secondary"}
                                    className={cn(
                                        "font-normal",
                                        comment.isApproved
                                            ? "bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/25 border-emerald-500/20"
                                            : "bg-yellow-500/15 text-yellow-600 hover:bg-yellow-500/25 border-yellow-500/20"
                                    )}
                                >
                                    {comment.isApproved ? "Approved" : "Pending"}
                                </Badge>
                            </TableCell>

                            <TableCell className="align-top text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8">
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">Open menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                        <DropdownMenuItem
                                            onClick={() => onApproveToggle(comment)}
                                            disabled={isActionLoading}
                                        >
                                            {comment.isApproved ? (
                                                <>
                                                    <XCircle className="mr-2 h-4 w-4" />
                                                    Reject
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle2 className="mr-2 h-4 w-4" />
                                                    Approve
                                                </>
                                            )}
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="text-destructive focus:text-destructive"
                                            onClick={() => onDelete(comment._id)}
                                            disabled={isActionLoading}
                                        >
                                            <Trash2 className="mr-2 h-4 w-4" />
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
