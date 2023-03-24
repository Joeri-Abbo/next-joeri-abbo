import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className=" flex items-center space-x-1 text-blue-500">
            <Image src="/hero.jpeg" className="rounded-full object-cover h-12 w-12 object-left mr-4"
                   alt="Me"
                   width="50" height="50"/>
            <span className="font-bold text-3xl font-sans tracking-tight whitespace-nowrap my-2 ml-8">
                Joeri Abbo
            </span>

        </Link>
    )
}

export default Logo;