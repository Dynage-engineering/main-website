"use client"

import * as React from "react"
import { ThemeProvider } from "@dynage/ui/components/theme-provider"
import { Header, type HeaderProps } from "@dynage/ui/components/header"
import { Sheet, SheetContent, SheetTitle } from "@dynage/ui/components/sheet"
import { cn } from "@dynage/ui/lib/utils"
import { Moon, Rss, Search, Sun } from "lucide-react"
import { useTheme } from "next-themes"

function ThemedHeaderInner(props: HeaderProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const subpath = (props.pathname || "").match(/[^/]+/g)
  const firstPath = subpath?.[0] ? `/${subpath[0]}` : ""

  const isActive = (href: string) => {
    return props.pathname === href || firstPath === href
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <Header
        {...props}
        isDrawerOpen={isOpen}
        onDrawerToggle={() => setIsOpen(!isOpen)}
      />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="right" className="flex p-4 flex-col pt-20 bg-white/95 dark:bg-black/95 backdrop-blur-md border-l border-black/10 dark:border-white/10">
          <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
          <nav className="flex flex-col gap-2 flex-1">
            {props.links.map((link) => (
              <a
                key={link.HREF}
                href={link.HREF}
                className={cn(
                  "flex items-center h-12 px-4 rounded-lg text-lg font-medium transition-colors",
                  isActive(link.HREF)
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.TEXT}
              </a>
            ))}
          </nav>

          <div className="mt-auto pb-8 flex flex-col gap-4">
            <hr className="border-black/5 dark:border-white/5" />
            <div className="flex items-center justify-around">
              <a
                href="/search"
                aria-label="Search"
                className="size-12 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <Search className="size-6" />
              </a>

              <a
                href="/rss.xml"
                target="_blank"
                aria-label="RSS Feed"
                className="size-12 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <Rss className="size-6" />
              </a>

              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="size-12 rounded-full flex items-center justify-center bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-400 transition-colors hover:text-black dark:hover:text-white"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <Moon className="size-6" />
                ) : (
                  <Sun className="size-6" />
                )}
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export function ThemedHeader(props: HeaderProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemedHeaderInner {...props} />
    </ThemeProvider>
  )
}
