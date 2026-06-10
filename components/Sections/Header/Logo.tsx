import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="group flex items-center gap-3">
            <Image src="/hero.jpeg"
                   className="h-10 w-10 rounded-full object-cover object-left ring-2 ring-blue-500/40 transition-transform group-hover:scale-105"
                   alt="Joeri Abbo"
                   width="50" height="50"/>
            <span className="text-gradient whitespace-nowrap text-xl font-bold tracking-tight sm:text-2xl">
                Joeri Abbo
            </span>
        </Link>
    )
}

export default Logo;