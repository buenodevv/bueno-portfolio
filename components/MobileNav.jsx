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
                
        </SheetContent>
        </Sheet>
    )
}

export default MobileNav