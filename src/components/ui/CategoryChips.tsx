"use client";

import { useState } from "react";

export default function CategoryChips({ items }: { items: string[] }) {
    const [active, setActive] = useState(items[0]);

    return (
        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
            {items.map((item) => (
                <button
                    key={item}
                    onClick={() => setActive(item)}
                    className={`rounded-full px-4 py-1.5 text-xs transition ${active === item
                            ? "bg-lime font-medium text-ink"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                >
                    {item}
                </button>
            ))}
            <button className="px-2 text-xs font-medium text-brand">+ More</button>
        </div>
    );
}
