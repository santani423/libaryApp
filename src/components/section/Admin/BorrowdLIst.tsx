"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

type User = {
    id: number;
    name: string;
    phone: string;
    email: string;
    createdAt: string;
};

const users: User[] = Array.from({ length: 60 }, (_, index) => ({
    id: index + 1,
    name: "John Doe",
    phone: "081234567890",
    email: "johdoe@email.com",
    createdAt: "28 Aug 2025, 14:00",
}));

const ITEMS_PER_PAGE = 10;

export default function BorrowedList() {
    const [query, setQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredUsers = useMemo(() => {
        const keyword = query.trim().toLowerCase();

        if (!keyword) {
            return users;
        }

        return users.filter((user) => {
            return (
                user.name.toLowerCase().includes(keyword) ||
                user.phone.toLowerCase().includes(keyword) ||
                user.email.toLowerCase().includes(keyword)
            );
        });
    }, [query]);

    const totalPages = Math.max(1, Math.ceil(filteredUsers.length / ITEMS_PER_PAGE));
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const startIndex = (safeCurrentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUsers = filteredUsers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const showingFrom = filteredUsers.length === 0 ? 0 : startIndex + 1;
    const showingTo = Math.min(startIndex + ITEMS_PER_PAGE, filteredUsers.length);

    const visiblePages = useMemo(() => {
        if (totalPages <= 3) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        if (safeCurrentPage <= 2) {
            return [1, 2, 3];
        }

        if (safeCurrentPage >= totalPages - 1) {
            return [totalPages - 2, totalPages - 1, totalPages];
        }

        return [safeCurrentPage - 1, safeCurrentPage, safeCurrentPage + 1];
    }, [safeCurrentPage, totalPages]);

    const onSearchChange = (value: string) => {
        setQuery(value);
        setCurrentPage(1);
    };

    return (
        <section className="rounded-lg border border-border bg-white p-4 md:p-6">
            <h1 className="text-2xl font-semibold text-foreground">User</h1>

            <div className="relative mt-4 w-full max-w-md">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                    value={query}
                    onChange={(event) => onSearchChange(event.target.value)}
                    placeholder="Search user"
                    className="pl-9"
                />
            </div>

            <div className="mt-4 overflow-hidden rounded-md border border-border">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-muted/20 hover:bg-muted/20">
                            <TableHead className="w-16 px-4">No</TableHead>
                            <TableHead className="px-4">Name</TableHead>
                            <TableHead className="px-4">Nomor Handphone</TableHead>
                            <TableHead className="px-4">Email</TableHead>
                            <TableHead className="px-4">Created at</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedUsers.length > 0 ? (
                            paginatedUsers.map((user, index) => (
                                <TableRow key={user.id}>
                                    <TableCell className="px-4">{startIndex + index + 1}</TableCell>
                                    <TableCell className="px-4">{user.name}</TableCell>
                                    <TableCell className="px-4">{user.phone}</TableCell>
                                    <TableCell className="px-4">{user.email}</TableCell>
                                    <TableCell className="px-4">{user.createdAt}</TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                                    User tidak ditemukan.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>

                <div className="flex flex-col gap-3 border-t border-border px-4 py-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
                    <p>
                        Showing {showingFrom} to {showingTo} of {filteredUsers.length} entries
                    </p>

                    <Pagination className="mx-0 w-auto justify-start md:justify-end">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    href="#"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        if (safeCurrentPage > 1) {
                                            setCurrentPage(safeCurrentPage - 1);
                                        }
                                    }}
                                    className={safeCurrentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>

                            {visiblePages.map((page) => (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href="#"
                                        isActive={page === safeCurrentPage}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCurrentPage(page);
                                        }}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            ))}

                            {totalPages > 3 && visiblePages[visiblePages.length - 1] < totalPages && (
                                <>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink
                                            href="#"
                                            isActive={totalPages === safeCurrentPage}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                setCurrentPage(totalPages);
                                            }}
                                        >
                                            {totalPages}
                                        </PaginationLink>
                                    </PaginationItem>
                                </>
                            )}

                            <PaginationItem>
                                <PaginationNext
                                    href="#"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        if (safeCurrentPage < totalPages) {
                                            setCurrentPage(safeCurrentPage + 1);
                                        }
                                    }}
                                    className={safeCurrentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </div>
        </section>
    );
}