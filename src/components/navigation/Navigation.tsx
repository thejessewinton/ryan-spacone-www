import { clsx } from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeSwitcher } from "./theme-switcher/ThemeSwitcher";

const navigation = [
  { name: "Narrative", href: "#" },
  { name: "Commercial", href: "/commercial" },
  { name: "Photo", href: "/photo" },
  { name: "About", href: "/about" },
];

export const Navigation = () => {
  const { pathname } = useRouter();
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            href={item.href}
            key={item.name}
            className={clsx(
              "group relative text-sm uppercase",
              isActive && "text-neutral-400"
            )}
          >
            {item.name}
          </Link>
        );
      })}
      <ThemeSwitcher />
    </nav>
  );
};
