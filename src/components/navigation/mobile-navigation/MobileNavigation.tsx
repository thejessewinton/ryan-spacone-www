import { clsx } from "clsx";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMobileNav } from "../../../hooks/use-mobile-nav";

const navigation = [
  { name: "Narrative", href: "/narrative" },
  { name: "Commercial", href: "/commercial" },
  { name: "Photo", href: "/photo" },
  { name: "About", href: "/about" },
];

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <button className="h-4 w-4" />;

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-4 w-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  );
};

const Hamburger = () => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();
  return (
    <button onClick={() => toggleMobileNav()} className="relative md:hidden">
      <span
        className={clsx(
          "mr-0 ml-auto block h-[2px] w-8 bg-white transition-transform",
          isMobileNavOpen ? "rotate-45" : ""
        )}
      />
      <span
        className={clsx(
          "mr-0 ml-auto block h-[2px] bg-white transition-transform",
          isMobileNavOpen ? "-mt-[2px] w-8 -rotate-45" : "mt-1 w-6"
        )}
      />
    </button>
  );
};

export const MobileNavigation = () => {
  const { pathname } = useRouter();
  const { isMobileNavOpen } = useMobileNav();

  return (
    <>
      <Hamburger />
      {isMobileNavOpen ? (
        <nav
          className={clsx(
            "inset-0 top-24 flex-col gap-4 bg-white px-9 dark:bg-neutral-900 md:hidden",
            isMobileNavOpen ? "fixed flex" : ""
          )}
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.name}
                className={clsx(
                  "relative text-sm uppercase",
                  isActive && "text-neutral-400"
                )}
              >
                {item.name}
              </Link>
            );
          })}

          <ThemeChanger />
        </nav>
      ) : null}
    </>
  );
};
