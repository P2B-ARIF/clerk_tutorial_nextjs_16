import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { Button } from "@/components/ui/button";

const Dashboard = async () => {
    const user = await currentUser();

    return (
        <div className="min-h-screen bg-black px-4 py-10 text-zinc-100">
            <section className="mx-auto w-full max-w-6xl overflow-hidden md:p-12">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-center ">
                    <div className="max-w-2xl space-y-4 mx-auto text-center">
                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                            Welcome back <span className="text-white animate-pulse"> - {user?.firstName}</span>
                        </p>
                        <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                            Your workspace is ready. Let’s build momentum today.
                        </h1>
                        <p className="text-sm text-zinc-400 md:text-base">
                            Track activity, manage members, and ship new updates from one
                            focused dashboard. Everything you need is gathered here.
                        </p>

                        <div className="rounded-lg mx-auto max-w-60 border border-white/10 bg-black/60 p-4">
                            <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                Users
                            </p>
                            <p className="mt-2 text-3xl font-semibold text-white">24</p>
                            <p className="text-xs text-zinc-500">4 new invites pending</p>
                        </div>

                        <Button variant={"secondary"}>Logout</Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
