"use client";

import { asLink } from "@prismicio/helpers";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { useMobileNav } from "hooks/use-mobile-nav";
import Link from "next/link";
import type { NavigationProps } from "types/prismic";

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

export const MobileNavigation = ({
  navigation,
}: {
  navigation: NavigationProps;
}) => {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();

  return (
    <div className="flex items-center gap-2">
      <Hamburger />
      {isMobileNavOpen ? (
        <motion.nav
          className={clsx(
            "inset-0 top-24 flex-col gap-4 bg-white px-9 pt-12 dark:bg-neutral-900 md:hidden",
            isMobileNavOpen ? "fixed flex" : ""
          )}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { bounce: false } }}
          exit={{ opacity: 0, y: 50 }}
        >
          {navigation.map((item) => {
            return (
              <Link
                href={asLink(item.link) as string}
                key={item.label}
                className={clsx("group relative text-sm uppercase")}
                onClick={toggleMobileNav}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.nav>
      ) : null}
    </div>
  );
};
