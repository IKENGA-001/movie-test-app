import Link from "next/link";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between h-24 shadow px-20">
            <Link href="/" className="font-bold" >LOGO</Link>
            <nav className="flex gap-4" >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/login">Login</Link>
                <Link href="/signup">Register</Link>
                <Link href="/movies">Movies</Link>
            </nav>
        </header>
    );
}