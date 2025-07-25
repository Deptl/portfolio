import Link from "next/link"
import { Button } from "./ui/button"

//Components
import { Nav } from "./Nav"
import MobileNav from "./MobileNav"

export const Header = () => {
  return (
    <header className="py-8 cl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Deep P<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop navbar and hire me btn */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button> Hire Me </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  )
}
