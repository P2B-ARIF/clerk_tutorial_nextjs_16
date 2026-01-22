

const UserPage = () => {
    const users = [
        {
            id: "USR-1042",
            name: "Araf Rahman",
            email: "araf.rahman@email.com",
            role: "Admin",
            status: "Active",
            joined: "Jan 08, 2026",
        },
        {
            id: "USR-1043",
            name: "Nusrat Jahan",
            email: "nusrat.j@email.com",
            role: "Editor",
            status: "Active",
            joined: "Dec 19, 2025",
        },
        {
            id: "USR-1044",
            name: "Farhan Hasan",
            email: "farhan.hasan@email.com",
            role: "Viewer",
            status: "Invited",
            joined: "Jan 18, 2026",
        },
        {
            id: "USR-1045",
            name: "Sadia Ahmed",
            email: "sadia.ahmed@email.com",
            role: "Editor",
            status: "Disabled",
            joined: "Nov 02, 2025",
        },
    ]

    return (
        <div className="min-h-screen bg-black px-4 py-10 text-zinc-100">
            <div className="mx-auto w-full max-w-5xl space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
                            Team Directory
                        </p>
                        <h1 className="text-2xl font-semibold text-white">Users</h1>
                        <p className="text-sm text-zinc-500">
                            Manage members, roles, and access in one place.
                        </p>
                    </div>
                    <button type="button" className="h-10 rounded-full border border-white/10 bg-white/10 px-5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/20">
                        Invite User
                    </button>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80 shadow-[0_0_45px_-25px_rgba(255,255,255,0.2)]">
                    <div className="border-b border-white/10 px-6 py-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-sm text-zinc-400">Active workspace members</p>
                            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400">
                                {users.length} total
                            </span>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[700px] text-left text-sm">
                            <thead className="bg-black/40 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">User</th>
                                    <th className="px-6 py-4 font-semibold">Role</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold">Joined</th>
                                    <th className="px-6 py-4 text-right font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/10">
                                {users.map((user) => (
                                    <tr key={user.id} className="transition hover:bg-white/5">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold uppercase text-zinc-300">
                                                    {user.name
                                                        .split(" ")
                                                        .slice(0, 2)
                                                        .map((part) => part[0])
                                                        .join("")}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-white">{user.name}</p>
                                                    <p className="text-xs text-zinc-500">{user.email}</p>
                                                    <p className="text-[11px] text-zinc-600">{user.id}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-300">{user.role}</td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={
                                                    "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold " +
                                                    (user.status === "Active"
                                                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                                                        : user.status === "Invited"
                                                            ? "border-blue-400/30 bg-blue-400/10 text-blue-300"
                                                            : "border-amber-400/30 bg-amber-400/10 text-amber-300")
                                                }
                                            >
                                                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-zinc-400">{user.joined}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/30 hover:text-white">
                                                Manage
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPage
