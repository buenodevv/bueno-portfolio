import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { CiMenuFries } from "react-icons/ci"

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

function MobileNav() {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="cursor-pointer flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-rb" />
            </SheetTrigger>
            <SheetContent className="p-4 flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Bueno <span className="text-rb">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col gap-8 justify-center items-center">
                    {links.map((link) => (
                        <Link className={`${pathname === link.path ? "text-rb" : "text-gray-500"} text-xl capitalize hover:text-rb-hover transition-all`} key={link.path} href={link.path}>
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav