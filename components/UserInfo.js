export default function UserInfo({ label, value, icon }) {
    return (
        <div>
            <span className="block">{label}</span>
            <div className="flex items-center">
                <div className="font-3xl">
                    {icon}
                </div>
                {value}
            </div>
        </div>
    )
}