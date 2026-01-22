"use client";

import { useSignUp } from "@clerk/nextjs";
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

export default function SignUpPage() {
    const { signUp, isLoaded } = useSignUp();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        password: "",
    });

    if (!isLoaded) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        // Add your sign-up logic here
        console.log("Sign-up data:", formData);

        try {
            await signUp.create({
                firstName: formData.name,
                emailAddress: formData.email,
                password: formData.password,
                username: formData.username,
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });

            router.push("/verify-email");

        } catch (err: any) {
            alert(err.errors?.[0]?.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FieldGroup className="max-w-md mx-auto p-6 md:p-8 rounded-2xl border border-white/10 bg-zinc-950/80 ring-1 ring-white/5 backdrop-blur">
                {/* Name Field */}
                <Field>
                    <FieldLabel
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
                    >
                        Name
                    </FieldLabel>
                    <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
                    />
                    <FieldDescription className="text-xs text-zinc-500">
                        Use the name you want displayed on your profile.
                    </FieldDescription>
                </Field>
                <Field>
                    <FieldLabel
                        htmlFor="username"
                        className="text-xs font-semibold uppercase tracking-wide text-zinc-400"
                    >
                        UserName
                    </FieldLabel>
                    <Input
                        id="username"
                        type="text"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Your username"
                        required
                        className="h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
                    />
                    <FieldDescription className="text-xs text-zinc-500">
                        Use the username you want displayed on your profile.
                    </FieldDescription>
                </Field>

                {/* Email Field */}
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                        className="h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
                    />
                    <FieldDescription className="text-xs text-zinc-500">
                        We will send a verification link to this address.
                    </FieldDescription>
                </Field>

                {/* Password Field */}
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
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="At least 6 characters"
                        required
                        className="h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
                    />
                    <FieldDescription className="text-xs text-zinc-500">
                        Mix letters and numbers for a stronger password.
                    </FieldDescription>
                </Field>

                {/* Submit Button */}
                <Field className="flex justify-end gap-2 pt-4">
                    <Button
                        type="submit"
                        className="h-11 w-full bg-white text-black hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                    >
                        Create Account
                    </Button>
                </Field>

                {/* Login Link */}
                <Field className="text-center pt-4">
                    <p className="text-sm text-zinc-500">
                        Already have an account?{" "}
                        <a
                            href="/sign-in"
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            Sign In
                        </a>
                    </p>
                </Field>
            </FieldGroup>
        </form>
    );
}
