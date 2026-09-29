import Image from "next/image";
import Container from "@/components/ui/Container";

const logos = [
    { src: "/images/logos/1.svg", alt: "Logoipsum" },
    { src: "/images/logos/2.svg", alt: "Logoipsum" },
    { src: "/images/logos/3.svg", alt: "Logoipsum" },
    { src: "/images/logos/4.svg", alt: "Logoipsum" },
    { src: "/images/logos/5.svg", alt: "Logoipsum" },
];

export default function LogoStrip() {
    return (
        <section className="bg-gray-100 py-10">
            <Container className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
                {logos.map((logo, i) => (
                    <Image
                        key={i}
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={27}
                        className="h-auto w-30 opacity-70"
                    />
                ))}
            </Container>
        </section>
    );
}
