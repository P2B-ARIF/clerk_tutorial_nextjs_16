"use client";

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
    const { signIn, isLoaded } = useSignIn();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    if (!isLoaded) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const result = await signIn.create({
                identifier: email,
                password,
            });

            if (result.status === "complete") {
                router.push("/dashboard");
            }
        } catch (err: any) {
            alert(err.errors?.[0]?.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FieldGroup className="max-w-md mx-auto p-6 md:p-8 rounded-2xl border border-white/10 bg-zinc-950/80  ring-1 ring-white/5 backdrop-blur">
                <Field>
                    <FieldLabel
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
                    >
                        Email
                    </FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                        className="h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
                    />
                    <FieldDescription className="text-xs text-zinc-500">
                        Use the email you signed up with.
                    </FieldDescription>
                </Field>

                <Field>
                    <FieldLabel
                        htmlFor="password"
                        className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
                    >
                        Password
                    </FieldLabel>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
                    />
                    <FieldDescription className="text-xs text-zinc-500">
                        Keep it safe and private.
                    </FieldDescription>
                </Field>

                <Field className="flex justify-end gap-2 pt-4">
                    <Button
                        type="submit"
                        className="h-11 w-full bg-white text-black hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                    >
                        Sign In
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}
