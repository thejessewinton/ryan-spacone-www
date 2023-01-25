import { clsx } from "clsx";
import Link from "next/link";
import { Link as PrismicLink } from "prismic-reactjs";
import type { NavigationProps } from "types/prismic";

export const Navigation = ({ navigation }: { navigation: NavigationProps }) => {
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {navigation.map((item) => {
        return (
          <Link
            href={PrismicLink.url(item.link)}
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
