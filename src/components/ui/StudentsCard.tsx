import Image from "next/image";

export default function StudentsCard({ className = "" }: { className?: string }) {
    return (
        <div className={`rounded-xl bg-white p-4 shadow-lg ${className}`}>
            <p className="text-base">Happy Students</p>
            <p className="text-xs">
                <span className="font-medium">4.5</span>{" "}
                <span className="text-gray-400">(240)</span> <span className="text-lime">★</span>
            </p>
            <div className="mt-2 flex items-center">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                    <Image
                        key={n}
                        src={`/images/avatars/${n}.png`}
                        alt=""
                        width={32}
                        height={32}
                        className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0"
                    />
                ))}
                <span className="-ml-2 grid h-9 w-9 place-items-center rounded-full bg-lime text-xs font-semibold">
                    2K+
                </span>
            </div>
        </div>
    );
}
