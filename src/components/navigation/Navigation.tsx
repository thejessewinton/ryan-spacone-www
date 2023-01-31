"use client";

import { asLink } from "@prismicio/helpers";
import { clsx } from "clsx";
import Link from "next/link";
import type { NavigationProps } from "types/prismic";
import { useSelectedLayoutSegment } from "next/navigation";

import type { NavigationItemSliceDefaultItem } from "../../../.slicemachine/prismicio";

const Dropdown = ({ items }: { items: NavigationItemSliceDefaultItem[] }) => {
  return (
    <div className="invisible absolute right-0 z-10 flex flex-col gap-4 rounded-sm border border-neutral-100 bg-white py-4 px-8 opacity-0 shadow-sm transition-opacity group-hover:visible group-hover:opacity-100">
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
  const activeSegment = useSelectedLayoutSegment();
  return (
    <nav className="hidden items-center space-x-12 md:flex">
      {navigation.map((item) => {
        const isActive =
          activeSegment === asLink(item.primary.link)?.replace("/", "");
        return (
          <div className="group relative cursor-pointer" key={item.id}>
            {item.items.length ? (
              <>
                <span
                  key={item.primary.label}
                  className="relative text-sm font-light uppercase"
                >
                  {item.primary.label}
                </span>
                <Dropdown items={item.items} />
              </>
            ) : (
              <Link
                href={
                  item.items.length ? "" : (asLink(item.primary.link) as string)
                }
                key={item.primary.label}
                className={clsx(
                  "relative text-sm font-light uppercase",
                  isActive && "text-neutral-600"
                )}
              >
                {item.primary.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
