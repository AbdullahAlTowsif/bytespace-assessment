"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag, X } from "lucide-react";
import Container from "../ui/Container";


const links = [
    { label: "Home", href: "#" },
    { label: "Courses", href: "#courses" },
    { label: "Creators", href: "#creators" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="relative z-30 text-white">
            <Container className="flex h-16 items-center justify-between">
                <Link href="/">
                    <Image src="/images/logo.png" alt="ByteSpace" width={172} height={40} priority />
                </Link>

                {/* desktop links */}
                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((l, i) => (
                        <li key={l.label}>
                            <Link
                                href={l.href}
                                className={i === 0 ? "font-medium" : "text-white/80 hover:text-white"}
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-6 md:flex">
                    <Link href="/login" className="text-white/80 hover:text-white">Sign In</Link>
                    <Link href="/signup" className="text-white/80 hover:text-white">Join Us</Link>
                    <button aria-label="Cart"><ShoppingBag size={20} /></button>
                </div>

                {/* mobile toggle */}
                <button
                    className="md:hidden"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X /> : <Menu />}
                </button>
            </Container>

            {/* mobile menu */}
            {open && (
                <div className="absolute inset-x-0 top-20 mx-5 rounded-2xl bg-white p-5 text-ink shadow-xl md:hidden">
                    <ul className="flex flex-col gap-4">
                        {links.map((l) => (
                            <li key={l.label}><Link href={l.href}>{l.label}</Link></li>
                        ))}
                        <li><Link href="/login">Sign In</Link></li>
                        <li><Link href="/signup">Join Us</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
