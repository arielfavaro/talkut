export default function UserInfo({ label, value, icon }) {
    return (
        <div>
            <span className="block">{label}</span>
            <div className="flex items-center flex gap-x-1">
                <div>
                    {icon}
                </div>
                <span className="font-bold">{value}</span>
            </div>
        </div>
    )
}