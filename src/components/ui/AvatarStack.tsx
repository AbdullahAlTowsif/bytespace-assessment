import Image from "next/image";

type Props = {
    count?: number;      // how many avatar images to show
    label?: string;      // lime pill text, e.g. "2K+"
    size?: "sm" | "md";
};

const sizes = {
    sm: { img: "h-5 w-5", px: 20, pill: "h-6 min-w-6 px-1 text-[9px]" },
    md: { img: "h-8 w-8", px: 32, pill: "h-9 w-9 text-xs" },
};

export default function AvatarStack({ count = 6, label = "2K+", size = "md" }: Props) {
    const s = sizes[size];
    return (
        <div className="flex items-center">
            {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
                <Image
                    key={n}
                    src={`/images/avatars/${n}.png`}
                    alt=""
                    width={s.px}
                    height={s.px}
                    className={`${s.img} -ml-2 rounded-full border-2 border-white object-cover first:ml-0`}
                />
            ))}
            <span
                className={`-ml-2 grid place-items-center rounded-full bg-lime font-semibold ${s.pill}`}
            >
                {label}
            </span>
        </div>
    );
}
