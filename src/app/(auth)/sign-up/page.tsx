'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        if (formData.password.length < 6) {
            alert("Password must be at least 6 characters!");
            return;
        }

        // Add your sign-up logic here
        console.log("Sign-up data:", formData);

        // API call example:
        // try {
        //     const response = await fetch("/api/signup", {
        //         method: "POST",
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(formData)
        //     });
        //     const data = await response.json();
        //     // Redirect on successful sign-up
        // } catch (error) {
        //     console.error("Sign-up error:", error);
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FieldGroup className="max-w-md mx-auto p-5 py-10 border border-slate-700 rounded-lg">
                {/* Name Field */}
                <Field>
                    <FieldLabel htmlFor="name">Name</FieldLabel>
                    <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                    />
                </Field>

                {/* Email Field */}
                <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        required
                    />
                </Field>

                {/* Password Field */}
                <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="At least 6 characters"
                        required
                    />
                </Field>

                {/* Confirm Password Field */}
                <Field>
                    <FieldLabel htmlFor="confirmPassword">Confirm Password</FieldLabel>
                    <Input
                        id="confirmPassword"
                        type="password"
                        value={formData.confPassword}
                        onChange={handleChange}
                        placeholder="Re-enter your password"
                        required
                    />
                </Field>

                {/* Submit Button */}
                <Field className="flex justify-end gap-2 pt-4">
                    <Button type="submit" className="w-full">
                        Create Account
                    </Button>
                </Field>

                {/* Login Link */}
                <Field className="text-center pt-4">
                    <p className="text-sm text-slate-500">
                        Already have an account?{" "}
                        <a href="/signin" className="text-blue-500 hover:underline">
                            Sign In
                        </a>
                    </p>
                </Field>
            </FieldGroup>
        </form>
    );
}