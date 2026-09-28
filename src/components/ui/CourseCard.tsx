import Image from "next/image";
import { BarChart3 } from "lucide-react";
import AvatarStack from "@/components/ui/AvatarStack";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
    return (
        <article className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            {/* thumbnail + badges */}
            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
                <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                />
                <div className="absolute bottom-2 left-2 flex gap-2 text-[11px] text-white">
                    <span className="rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                        {course.lessons} Lessons
                    </span>
                    <span className="rounded-full bg-black/40 px-2.5 py-1 backdrop-blur-sm">
                        {course.duration}
                    </span>
                </div>
            </div>

            {/* title + rating */}
            <div className="mt-4 flex items-start justify-between gap-2 px-1">
                <div className="min-w-0">
                    <h3 className="truncate text-base font-semibold">{course.title}</h3>
                    <p className="mt-1 text-xs text-gray-500">
                        by <span className="text-brand">{course.creator}</span>
                    </p>
                </div>
                <p className="shrink-0 text-xs">
                    <span className="font-medium">{course.rating}</span>{" "}
                    <span className="text-lime">★</span>
                </p>
            </div>

            {/* level + students */}
            <div className="mt-4 flex items-center justify-between px-1">
                <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
                    <BarChart3 size={14} />
                    {course.level}
                </span>
                <AvatarStack count={4} label="2K+" size="sm" />
            </div>

            {/* price */}
            <p className="mt-4 px-1 pb-1 text-lg font-semibold text-brand">
                ${course.price}
                <span className="text-xs font-normal text-gray-500">/lifetime</span>
            </p>
        </article>
    );
}
