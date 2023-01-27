import { asLink } from "@prismicio/helpers";
import Link from "next/link";
import type { NavigationProps } from "types/prismic";
import type { NavigationItemSliceDefaultItem } from "../../../.slicemachine/prismicio";

const Dropdown = ({ items }: { items: NavigationItemSliceDefaultItem[] }) => {
  return (
    <div className="invisible absolute right-0 z-10 flex flex-col gap-4 rounded-sm border border-neutral-100 bg-white p-4 opacity-0 shadow-sm transition-opacity group-hover:visible group-hover:opacity-100">
      {items.map((item) => {
        return (
          <Link
            href={asLink(item.link) as string}
            key={item.label}
            className="text-sm uppercase"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export const Navigation = ({ navigation }: { navigation: NavigationProps }) => {
  return (
    <nav className="hidden items-center space-x-8 md:flex">
      {navigation.map((item) => {
        return (
          <div className="group relative" key={item.id}>
            <Link
              href={asLink(item.primary.link) as string}
              key={item.primary.label}
              className="relative text-sm uppercase"
            >
              {item.primary.label}
            </Link>
            {item.items.length && <Dropdown items={item.items} />}
          </div>
        );
      })}
    </nav>
  );
};
