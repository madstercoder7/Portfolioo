export default function TechCard({ name }) {
    return (
        <div className="bg-[#112240] p-4 rounded-lg text-center shadow-sm hover:shadow-lg transition border border-slate-200 text-sm font-medium">
            {name}
        </div>
    )
}