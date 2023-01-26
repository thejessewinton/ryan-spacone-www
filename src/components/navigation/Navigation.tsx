import { asLink } from "@prismicio/helpers";
import { clsx } from "clsx";
import Link from "next/link";
import type { NavigationProps } from "types/prismic";

export const Navigation = ({ navigation }: { navigation: NavigationProps }) => {
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {navigation.map((item) => {
        return (
          <Link
            href={asLink(item.link) as string}
            key={item.label}
            className={clsx("group relative text-sm uppercase")}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
};
