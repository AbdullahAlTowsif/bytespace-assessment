type Props = { value?: number; className?: string };

export default function ProgressCard({ value = 55, className = "" }: Props) {
    return (
        <div className={`rounded-xl bg-white p-4 shadow-lg ${className}`}>
            <p className="text-sm">Learning Progress</p>
            <p className="mt-2 text-5xl font-semibold">{value}%</p>
            <div className="mt-3 h-2 w-full rounded-full bg-gray-100">
                <div
                    className="h-full rounded-full bg-lime"
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}
