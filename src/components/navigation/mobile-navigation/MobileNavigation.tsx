import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMobileNav } from "../../../hooks/use-mobile-nav";
import { ThemeSwitcher } from "../theme-switcher/ThemeSwitcher";

const navigation = [
  { name: "Narrative", href: "/narrative" },
  { name: "Commercial", href: "/commercial" },
  { name: "Photo", href: "/photo" },
  { name: "About", href: "/about" },
];

const Hamburger = () => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();
  const className =
    "mr-0 ml-auto block h-[2px] bg-neutral-900 transition-transform dark:bg-white";
  return (
    <button
      onClick={() => toggleMobileNav()}
      className="relative md:hidden"
      aria-label="Open Mobile Nav"
    >
      <span className="sr-only">Open Mobile Nav</span>
      <span
        className={clsx(className, "w-8", isMobileNavOpen ? "rotate-45" : "")}
      />
      <span
        className={clsx(
          "mr-0 ml-auto block h-[2px] bg-neutral-900 transition-transform dark:bg-white",
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
    <div className="flex items-center gap-2">
      <Hamburger />
      <ThemeSwitcher />
      {isMobileNavOpen ? (
        <nav
          className={clsx(
            "inset-0 top-24 flex-col gap-4 bg-white px-9 pt-12 dark:bg-neutral-900 md:hidden",
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
        </nav>
      ) : null}
    </div>
  );
};
