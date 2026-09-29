import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const shapes = [
    // top-left lime spring (large, sticking out)
    ["lime-spring.png", "-left-10 -top-20 w-36 md:w-56"],

    // white spring next to it (slightly lower & inward)
    ["white-spring.png", "left-[6%] top-10 w-20 md:w-32"],

    // white cone / triangle mid-left
    ["white-triangle.png", "-left-12 top-[50%] w-24 md:w-36"],

    // lime ring bottom-left
    ["lime-ring.png", "-left-8 bottom-[-10px] w-40 md:w-56"],

    // lime triangle top-right
    ["lime-triangle.png", "right-[18%] top-4 w-16 md:w-28"],

    // white cylinder far right
    ["white-cylinder.png", "-right-10 -top-4 w-28 md:w-48"],

    // lime spring bottom-right
    ["lime-spring.png", "-right-6 bottom-[-80px] w-36 md:w-52"],
];

export default function CreatorCTA() {
    return (
        <section className="bg-grid relative overflow-hidden py-20 text-center text-white md:py-24">
            {shapes.map(([file, pos], i) => (
                <Image
                    key={i}
                    src={`/images/shapes/${file}`}
                    alt=""
                    aria-hidden
                    width={250}
                    height={250}
                    className={`pointer-events-none absolute ${pos}`}
                />
            ))}

            <Container className="relative z-10">
                <h2 className="mx-auto max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
                    Unlock Your Potential as a Creator with ByteSpace
                </h2>
                <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/90">
                    Experience the collaboration of numerous creators and an expanding
                    audience of learners. Register now and become a part of a community
                    comprising over 10,000 local and international creators. Utilize our
                    Course Editor and showcase your expertise by publishing your first
                    course on the ByteSpace Course Library.
                </p>
                <Button className="mt-8">Join as Creator</Button>
            </Container>
        </section>
    );
}
