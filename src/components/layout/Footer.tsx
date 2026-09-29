import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/ui/NewsletterForm";

const columns = [
    ["Featured Course", "Featured Categories", "Business", "IT", "Design"],
    ["Development", "Marketing", "Photography", "Finance", "Sport"],
    ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legal = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export default function Footer() {
    return (
        <footer className="bg-white pt-12 md:pt-16">
            <Container>
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* brand + newsletter */}
                    <div>
                        <Image src="/images/logo-dark.svg" alt="ByteSpace" width={150} height={36} />
                        <p className="mt-4 max-w-sm text-xs text-gray-600">
                            Stay up to date with our latest features and get exclusive offers
                            by joining our newsletter.
                        </p>
                        <div className="mt-5">
                            <NewsletterForm />
                        </div>
                        <p className="mt-3 max-w-xs text-[10px] leading-4 text-gray-500">
                            By subscribing, you agree to our Privacy Policy and consent to
                            receive updates from our company.
                        </p>
                    </div>

                    {/* link columns */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                        {columns.map((col, i) => (
                            <ul key={i} className="space-y-3 text-xs text-gray-600">
                                {col.map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="hover:text-brand">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* bottom bar */}
                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-200 py-6 text-center text-xs text-gray-600 sm:flex-row sm:text-left">
                    <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                        {legal.map((item) => (
                            <li key={item}>
                                <Link href="#" className="hover:text-brand">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
}
