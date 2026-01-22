"use client";

import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function VerifyEmailPage() {
    const { signUp, isLoaded, setActive } = useSignUp();
    const [code, setCode] = useState("");
    const router = useRouter();

    if (!isLoaded) return null;

    const verify = async () => {
        if (!code) return alert("enter code.")
        try {
            const result = await signUp.attemptEmailAddressVerification({
                code,
            });

            if (result.status === "complete") {
                // 🔥 THIS LINE IS REQUIRED
                await setActive({
                    session: result.createdSessionId,
                    navigate: async ({ session }) => {
                        if (session?.currentTask) {
                            console.log(session?.currentTask);
                            return;
                        }
                    },
                });

                router.push("/dashboard");
            }
        } catch (err: any) {
            alert(err.errors?.[0]?.message || "Invalid code");
        }
    };

    return (
        <div className="max-w-md space-y-3">

            <Input
                placeholder="Enter OTP code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={verify}>Verify</Button>
        </div>
    );
}
