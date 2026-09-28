import Image from "next/image";
import Container from "@/components/ui/Container";
import CourseCard from "@/components/ui/CourseCard";
import ProgressCard from "@/components/ui/ProgressCard";
import { courses } from "@/data/courses";

const stats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
];

export default function ProfessionalGrowth() {
    return (
        <section className="py-20">
            <Container className="grid items-center gap-12 lg:grid-cols-2">
                {/* text */}
                <div>
                    <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                        Your Path to Professional
                        <br />
                        Growth Starts Here!
                    </h2>
                    <p className="mt-8 max-w-lg text-sm leading-7 text-gray-500">
                        Explore our curated selection of courses tailored to enhance your
                        capabilities and accelerate your career journey. Whether you are
                        looking to sharpen specific skills, gain industry expertise, or
                        embark on a new career path entirely, we have the resources you
                        need.
                    </p>

                    <dl className="mt-10 flex gap-10">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <dt className="text-3xl font-semibold text-brand">{s.value}</dt>
                                <dd className="text-sm text-gray-600">{s.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* visual */}
                <div className="relative mx-auto h-107.5 w-full max-w-130 md:h-120">
                    <CourseCard
                        course={courses[0]}
                        className="absolute left-10 top-0 z-0 w-62.5 md:w-72.5"
                    />

                    <Image
                        src="/images/hero-person.png"
                        alt="Student with laptop"
                        width={500}
                        height={620}
                        className="absolute bottom-0 right-[8%] z-10 w-70 md:w-96"
                    />

                    <ProgressCard className="absolute -right-10 top-55.5 z-20 w-47.5 md:w-52.5" />

                    <Image
                        src="/images/shapes/lime-spring.png"
                        alt=""
                        aria-hidden
                        width={120}
                        height={140}
                        className="pointer-events-none absolute -right-20.5 top-35 z-30 w-20 md:w-24"
                    />
                </div>
            </Container>
        </section>
    );
}
