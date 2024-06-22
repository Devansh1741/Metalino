"use client";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleFormSubmit(e){
        e.preventDefault();
        fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-type': 'application/json'},
        })
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}> 
                <input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit">Register</button>
                <div className="my-4 text-gray-500 text-center">or Login with provider</div>
                <button className="login flex justify-center gap-4">
                    <Image src={'/Google_PNG.webp'} alt="" width={24} height={24}/>
                    Login with google</button>
            </form>
        </section>
    );
}