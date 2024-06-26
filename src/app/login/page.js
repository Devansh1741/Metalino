"use client";

import Image from "next/image";
import { useState } from "react";
import {signIn} from 'next-auth/react'
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);
    async function handleFormSubmit(e) {
        e.preventDefault();
        setLoginInProgress(true);

        await signIn('credentials',  {email, password});
        
        setLoginInProgress(false);
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Login</h1>

            <form  className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" disabled={loginInProgress} placeholder="email" name="email" 
                    value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" disabled={loginInProgress} placeholder="password" name="password"
                     value={password} onChange={e => setPassword(e.target.value)}/>

                <button type="submit" disabled={loginInProgress}>Login</button>
                
                <div className="my-4 text-gray-500 text-center">or Login with provider</div>
                
                <button disabled={loginInProgress} className="login flex justify-center gap-4">
                    <Image src={'/Google_PNG.webp'} alt="" width={24} height={24}/>
                    Login with google
                </button>
            </form>
        </section>
    )
}