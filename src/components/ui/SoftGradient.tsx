import { ReactNode } from "react";

export default function SoftGradient({ children }: { children: ReactNode }) {
    return (
        <div className="relative overflow-hidden bg-gray-50">
            {/* blurred color blobs */}
            <div aria-hidden className="pointer-events-none absolute left-60 top-0 h-60 w-110 rounded-full bg-lime/70 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -left-24 top-[38%] h-82 w-82 rounded-full bg-brand/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -left-16 bottom-0 h-76 w-80 rounded-full bg-lime/70 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />

            <div className="relative">{children}</div>
        </div>
    );
}
