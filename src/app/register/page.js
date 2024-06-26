"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false);
    async function handleFormSubmit(e){
        e.preventDefault();
        setUserCreated(false);
        setError(false); 
        setCreatingUser(true);
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {'Content-type': 'application/json'},
        })
        
        if(response.ok){
            setUserCreated(true);
        } else setError(true); 

        setCreatingUser(false);
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>

            {userCreated && (
                <div className="my-4 text-center">
                    User created<br/>Now you can {' '} <Link className="underline text-primary" href={'/login'}>Login &raquo; </Link>.
                </div>
            )}
            { error && (
                <div className="my-4 text-center">
                    An error has occured <br/>
                    Please try again later
                </div>
                )
            }
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}> 
                <input type="email" disabled={creatingUser} placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" disabled={creatingUser} placeholder="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <button type="submit" disabled={creatingUser}>Register</button>
                <div className="my-4 text-gray-500 text-center">or Login with provider</div>
                <button className="login flex justify-center gap-4" disabled={creatingUser}>
                    <Image src={'/Google_PNG.webp'} alt="" width={24} height={24}/>
                    Login with google</button>
                <div className="text-center my-4 text-gray-500 border-t pt-4" >
                    Existing account?{' '} <Link className="underline text-primary" href={'/login'}>Login Here &raquo;</Link>
                </div>
            </form>

        </section>
    );
}