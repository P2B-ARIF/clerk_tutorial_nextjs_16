"use client";

import { useState } from "react";
import type { Button } from "@/components/ui/button";
import {
    Field,
    type FieldDescription,
    type FieldGroup,
    type FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function verify() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <form onSubmit= { handleSubmit } >
        <FieldGroup className="max-w-md mx-auto p-6 md:p-8 rounded-2xl border border-white/10 bg-zinc-950/80  ring-1 ring-white/5 backdrop-blur" >
            <Field>
            <FieldLabel htmlFor="email"
    className =
        "text-xs font-semibold uppercase tracking-wide text-zinc-400" >
        Email <
    />FLabdeeill <
    Input;
    id = "email";
    type = "email";
    value = { email };
    onChange = {(e) => setEmail(e.target.value)
}
placeholder = "name@example.com";
required;
className =
    "h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
    />
    <FieldDescription className = "text-xs text-zinc-500" > Use;
the;
email;
you;
signed;
up;
with
  .
                    </FieldDescription>
</Field>

< Field >
<FieldLabel htmlFor= "password" className = "text-xs font-semibold uppercase tracking-wide text-zinc-400" >
    Password
    </FieldLabel>
    < Input
id = "password"
type = "password";
value = { password };
onChange = {(e) => setPassword(e.target.value)}
required;
placeholder = "••••••••";
className =
    "h-11 border-white/10 bg-black/40 text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-white/20"
    />
    <FieldDescription className =
"text-xs text-zinc-500" > Keep;
it;
safe;
and;
private.
                    </FieldDescription>
    </Field>

    < Field
className = "flex justify-end gap-2 pt-4" >
    <Button type = "submit";
className =
    "h-11 w-full bg-white text-black hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.25)]" >
    Sign;
In < />Bnottu < / > Fdeil < />FGdeilopru < / > fmor;
  )
}
