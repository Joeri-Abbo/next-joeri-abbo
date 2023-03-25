import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center space-x-1 text-blue-500">
            <Image src="/hero.jpeg" className="mr-4 h-12 w-12 rounded-full object-cover object-left"
                   alt="Me"
                   width="50" height="50"/>
            <span className="my-2 ml-8 whitespace-nowrap font-sans text-3xl font-bold tracking-tight">
                Joeri Abbo
            </span>

        </Link>
    )
}

export default Logo;