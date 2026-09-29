import {
    Palette,
    Code2,
    Monitor,
    Briefcase,
    Megaphone,
    Camera,
} from "lucide-react";
import Container from "@/components/ui/Container";

const paths = [
    { label: "Design", icon: Palette },
    { label: "Development", icon: Code2 },
    { label: "IT & Software", icon: Monitor },
    { label: "Business", icon: Briefcase },
    { label: "Marketing", icon: Megaphone },
    { label: "Photography", icon: Camera },
];

export default function LearningPaths() {
    return (
        <section className="pb-20">
            <Container className="text-center">
                <h2 className="text-2xl font-semibold md:text-3xl">
                    Explore Diverse Learning Paths at ByteSpace
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-500">
                    At ByteSpace, we believe in empowering individuals through learning.
                    Our diverse range of courses spans various fields, ensuring there is
                    something for everyone. Unleash your potential and embark on your
                    journey with our carefully curated categories.
                </p>

                <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    {paths.map(({ label, icon: Icon }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white px-3 py-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime">
                                <Icon size={20} />
                            </span>
                            <span className="text-xs">{label}</span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
