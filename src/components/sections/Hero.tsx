import Image from "next/image";
import { Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import ProgressCard from "@/components/ui/ProgressCard";
import StudentsCard from "@/components/ui/StudentsCard";

/* decorative 3D shapes: [file, position/size classes] */
const shapes = [
    ["lime-spring.png", "-left-6 top-24 w-36 lg:w-80"],
    ["white-spring.png", "left-[15%] top-[300px] w-22 lg:w-48"],
    ["white-ring.png", "-left-4 bottom-0 w-32 lg:w-72"],
    ["lime-cylinder.png", "-right-6 top-[130px] w-32 lg:w-80"],
    ["white-triangle.png", "right-[12%] top-[320px] w-22 lg:w-48"],
    ["white-spring.png", "-right-4 bottom-4 w-32 lg:w-72"],
];

export default function Hero() {
    return (
        <section className="relative overflow-hidden pb-0 text-center">
            {/* decorative shapes */}
            {shapes.map(([file, pos], i) => (
                <Image
                    key={i}
                    src={`/images/shapes/${file}`}
                    alt=""
                    aria-hidden
                    width={300}
                    height={300}
                    className={`pointer-events-none absolute ${pos}`}
                />
            ))}

            <Container className="relative z-10">
                <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.15] text-white md:text-6xl lg:text-7xl">
                    Get Access to Hundreds Courses Available
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-sm text-white/90 md:text-base">
                    Unlock your creativity, gain valuable knowledge, and grow your
                    business with our wide range of courses.
                </p>

                {/* search */}
                <form className="mx-auto mt-12 flex max-w-150 items-center gap-3">
                    <label className="flex h-13 flex-1 items-center gap-3 rounded-full bg-white px-5">
                        <Search size={20} className="text-gray-500" />
                        <input
                            type="text"
                            placeholder="Course, topic, creator"
                            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                        />
                    </label>
                    <Button type="submit" className="h-11.5">Search</Button>
                </form>

                {/* person + lime half circle + floating cards */}
                <div className="relative mx-auto mt-14 h-85 max-w-225 md:h-115">
                    <div className="absolute bottom-0 left-1/2 h-75 w-140 -translate-x-1/2 rounded-t-full bg-lime md:h-110 md:w-225" />

                    <Image
                        src="/images/hero-person.png"
                        alt="Student learning online"
                        width={500}
                        height={620}
                        priority
                        className="absolute bottom-0 left-1/2 w-60 -translate-x-1/2 md:w-95"
                    />

                    <div className="absolute left-[4%] top-[6%] hidden rounded-xl bg-white px-4 py-3 text-left shadow-lg md:block">
                        <p className="font-medium">UI/UX Design</p>
                        <p className="text-xs text-gray-500">200 Courses • 1000+ Students</p>
                    </div>

                    <ProgressCard className="absolute right-[4%] top-[14%] hidden w-57.5 text-left md:block" />
                    <StudentsCard className="absolute bottom-[8%] left-0 hidden text-left md:block" />
                </div>
            </Container>
        </section>
    );
}
