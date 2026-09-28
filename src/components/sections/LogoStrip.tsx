import { Hexagon, Sun, Circle, Triangle, Square } from "lucide-react";
import Container from "@/components/ui/Container";

const logos = [Hexagon, Sun, Circle, Triangle, Square];

export default function LogoStrip() {
    return (
        <section className="bg-gray-100 py-10">
            <Container className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
                {logos.map((Icon, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-500">
                        <Icon size={22} />
                        <span className="text-base font-semibold">Logoipsum</span>
                    </div>
                ))}
            </Container>
        </section>
    );
}
