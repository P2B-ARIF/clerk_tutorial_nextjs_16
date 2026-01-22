'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); // পাসওয়ার্ড ফিল্ড যোগ করা উচিত


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <FieldGroup className="max-w-md mx-auto p-5 py-10 border border-slate-700 rounded-lg">
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        required
                    />
                </Field>

                {/* পাসওয়ার্ড ফিল্ড অবশ্যই লাগবে */}
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Field>

                <Field className="flex justify-end gap-2 pt-4">
                    <Button type="submit" className="w-full">
                        Sign In
                    </Button>
                </Field>
            </FieldGroup>
        </form>
    );
}
