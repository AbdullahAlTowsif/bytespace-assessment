type Props = {
    title: string;
    subtitle: string;
    amount: string;
    progress?: number;
    badge?: string;
    className?: string;
};

export default function RevenueCard({
    title,
    subtitle,
    amount,
    progress,
    badge,
    className = "",
}: Props) {
    return (
        <div className={`rounded-xl bg-brand p-4 text-white shadow-lg ${className}`}>
            <p className="text-sm font-medium">{title}</p>
            <p className="text-[10px] text-white/70">{subtitle}</p>
            <p className="mt-2 text-2xl font-semibold">{amount}</p>

            {progress !== undefined && (
                <div className="mt-2 h-1.5 w-full rounded-full bg-white/30">
                    <div
                        className="h-full rounded-full bg-lime"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            {badge && (
                <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold text-ink">
                    {badge}
                </span>
            )}
        </div>
    );
}
