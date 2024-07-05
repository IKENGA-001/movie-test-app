'use client'

import { login } from "@/actions/login";
import FormButton from "@/components/formButton";
import { useFormState } from 'react-dom'

export default function Page() {
    const [res, action] = useFormState(login, {})
    return (
        <form className="flex flex-col gap-4" action={action}>
            <h2 className="font-bold text-3xl">Login</h2>
            {
                res.err &&
                <p className="p-2 bg-red-200">{res.err}</p>
            }
           
            <input
                type="email"
                className="rounded border p-3"
                name="email"
                placeholder="enter email" />
            {
                res.error && res.error.email &&
                <p className="p-2 bg-red-200">{res.error.email[0]}</p>
            }
            <input
                type="password"
                className="rounded border p-3"
                name="password"
                placeholder="enter password" />
            {
                res.error && res.error.password &&
                <p className="p-2 bg-red-200">{res.error.password[0]}</p>
            }
            <FormButton>
                Login
            </FormButton>
        </form>
    );
}