"use client";

import { SubmitEvent, useState } from "react";
import Button from "@/components/ui/Button";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    function handleSubmit(e: SubmitEvent) {
        e.preventDefault();
        if (!email.trim()) return;
        setSent(true);
        setEmail("");
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex max-w-sm flex-col gap-2 sm:flex-row sm:items-center"
            >
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="h-10 w-full min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 text-sm outline-none focus:border-brand"
                />
                <Button type="submit" className="h-10 w-full py-0! sm:w-auto">
                    Search
                </Button>
            </form>
            {sent && (
                <p className="mt-2 text-xs text-brand">Thanks for subscribing!</p>
            )}
        </div>
    );
}
