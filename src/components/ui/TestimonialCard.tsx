import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ item }: { item: Testimonial }) {
    return (
        <figure className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center gap-3">
                <Image
                    src={item.avatar}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                />
                <figcaption>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-brand">{item.role}</p>
                </figcaption>
            </div>
            <blockquote className="mt-4 text-xs leading-6 text-gray-500">
                &ldquo;{item.quote}&rdquo;
            </blockquote>
        </figure>
    );
}
