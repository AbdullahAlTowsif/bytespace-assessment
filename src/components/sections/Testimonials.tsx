import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-20">
            {/* soft lime glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-lime/70 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute right-160 -top-20 h-60 w-60 rounded-full bg-lime/70 blur-3xl"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#003BE2]/30 blur-3xl"
            />

            <Container className="relative">
                <div className="grid gap-6 md:grid-cols-2 md:items-start">
                    <h2 className="text-3xl font-semibold leading-tight">
                        Discover What Our
                        <br />
                        Community Is Saying
                    </h2>
                    <p className="text-xs leading-6 text-gray-600">
                        At ByteSpace, our vibrant community of learners and creators is at
                        the heart of what we do. Hear directly from those who have
                        experienced the transformative journey of learning and creating on
                        our platform. Explore testimonials that reflect the diverse
                        perspectives of enthusiastic learners and accomplished creators.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <TestimonialCard key={t.id} item={t} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
