import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import RevenueCard from "@/components/ui/RevenueCard";
import StudentsCard from "@/components/ui/StudentsCard";

const benefits = [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
];

export default function CreateCourses() {
    return (
        <section id="creators" className="pb-24">
            <Container className="grid items-center gap-12 lg:grid-cols-2">
                {/* visual */}
                <div className="relative mx-auto h-115 w-full max-w-130 md:h-130">
                    <RevenueCard
                        title="Total Revenue"
                        subtitle="July 1-28"
                        amount="$120.29"
                        progress={40}
                        className="absolute left-20 top-10 z-20 w-55"
                    />
                    <RevenueCard
                        title="Year to Date"
                        subtitle="2023"
                        amount="$1,200.38"
                        badge="+12$"
                        className="absolute left-15 top-43.5 z-20 w-37.5"
                    />

                    <Image
                        src="/images/creator-person.png"
                        alt="Creator with tablet"
                        width={500}
                        height={640}
                        className="absolute bottom-0 left-[12%] z-20 w-75 md:w-10/12"
                    />

                    <Image
                        src="/images/shapes/lime-spring.png"
                        alt=""
                        aria-hidden
                        width={120}
                        height={140}
                        className="pointer-events-none absolute right-[15%] top-42.5 z-20 w-20 md:w-24"
                    />

                    <StudentsCard className="absolute bottom-23 -right-5 z-30" />
                </div>

                {/* text */}
                <div>
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                        Create &amp; Manage
                        <br />
                        Courses Easily.
                    </h2>
                    <p className="mt-8 max-w-md text-sm leading-7 text-gray-500">
                        <span className="font-semibold text-ink">ByteSpace</span> supports
                        individuals or entities in the creation, publication, and
                        administration of educational courses.
                    </p>

                    <ul className="mt-8 space-y-4">
                        {benefits.map((b) => (
                            <li key={b} className="flex items-center gap-3 text-sm">
                                <CheckCircle2 size={22} className="fill-brand text-white" />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    );
}
