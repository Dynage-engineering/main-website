"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Container } from "@dynage/ui/components/container"
import { Logo } from "@dynage/ui/components/logo"
import { cn } from "@dynage/ui/lib/utils"
import { Menu, Moon, Rss, Search, Sun, X } from "lucide-react"

interface Link {
  TEXT: string
  HREF: string
  BADGE?: string
}

interface Logo {
  DARK: string
  alt: string
}

interface Site {
  TITLE: string
}

export interface HeaderProps {
  site: Site
  links: Link[]
  logo: Logo
  text?: string
  pathname?: string
  onDrawerToggle?: () => void
  isDrawerOpen?: boolean
  className?: string
}

export const Header: React.FC<HeaderProps> = ({
  site,
  links,
  text,
  pathname = "",
  onDrawerToggle,
  isDrawerOpen = false,
  className,
}) => {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const subpath = pathname.match(/[^/]+/g)
  const firstPath = subpath?.[0] ? `/${subpath[0]}` : ""

  const isActive = (href: string) => {
    return pathname === href || firstPath === href
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <header id="header" className={cn("fixed top-0 w-full h-16 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm", className)}>
      <Container size="md">
        <div className="relative h-full w-full">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold">
            <a
              href="/"
              className="flex gap-1 text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
            >
              <Logo text={text} className="h-9 w-auto" />
            </a>
          </div>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <nav className="hidden md:flex items-center justify-center text-sm gap-1">
              {links.map((link) => (
                <a
                  key={link.HREF}
                  href={link.HREF}
                  className={cn(
                    "h-8 rounded-full px-3 text-current flex items-center justify-center transition-colors duration-300 ease-in-out relative group/link",
                    isActive(link.HREF)
                      ? "bg-black dark:bg-white text-white dark:text-black"
                      : "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"
                  )}
                >
                  <span className="relative">
                    {link.TEXT}
                    {link.BADGE && (
                      <span className="absolute -top-3 -right-3 text-[8px] font-black uppercase text-blue-500 tracking-tighter">
                        {link.BADGE}
                      </span>
                    )}
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="buttons absolute right-0 top-1/2 -translate-y-1/2 flex gap-1">
            <a
              href="/search"
              aria-label={`Search blog posts and projects on ${site.TITLE}`}
              className={cn(
                "hidden md:flex size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out",
                isActive("/search") ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""
              )}
            >
              <Search />
            </a>

            <a
              href="/rss.xml"
              target="_blank"
              aria-label={`Rss feed for ${site.TITLE}`}
              className="hidden md:flex size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out"
            >
              <Rss />
            </a>

            <button
              onClick={toggleTheme}
              aria-label="Toggle light and dark theme"
              className="hidden md:flex size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Moon />
              ) : (
                <Sun />
              )}
            </button>

            <button
              onClick={onDrawerToggle}
              aria-label="Toggle drawer open and closed"
              className={cn(
                "flex md:hidden size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out",
                isDrawerOpen ? "open" : ""
              )}
            >
              {isDrawerOpen ? (
                <X />
              ) : (
                <Menu />
              )}
            </button>
          </div>
        </div>
      </Container>
    </header>
  )
}
