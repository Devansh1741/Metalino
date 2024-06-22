import Link from "next/link";

export default function Header() {
  return (
    <>
        <header className="flex items-center justify-between">
            <nav className="flex gap-12 text-gray-500 font-semibold items-center">
            <Link className="text-primary font-semibold text-4xl" href="/">Metalino</Link>
            <Link href={'/'}>Home</Link>
            <Link href={''}>Menu</Link>
            <Link href={''}>About</Link>
            <Link href={''}>Contact</Link>
            </nav>
            <nav className="flex gap-6 text-gray-500 font-semibold items-center">
            <Link href={'/login'}>Login</Link>
            <Link href={'/register'} className="bg-primary text-white px-8 py-2 rounded-full">Register</Link>
            </nav>
        </header>
    </>
  )
}
