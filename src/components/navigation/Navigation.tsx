"use client";

import { asLink } from "@prismicio/helpers";
import Link from "next/link";
import type { NavigationProps } from "types/prismic";
import { useSelectedLayoutSegment } from "next/navigation";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";

import type { NavigationItemSliceDefaultItem } from "../../../.slicemachine/prismicio";
import { HoverLine } from "components/hover-line/HoverLine";

const Dropdown = ({ items }: { items: NavigationItemSliceDefaultItem[] }) => {
  return (
    <div className="absolute right-0 z-10 flex flex-col gap-4 rounded-sm bg-white py-4 px-8 drop-shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
      {items.map((item) => {
        return (
          <Link
            href={asLink(item.link) as string}
            key={item.label}
            className="group text-sm uppercase"
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
    <NavigationMenuPrimitive.NavigationMenu>
      <NavigationMenuPrimitive.List className="flex items-center gap-x-8">
        {navigation.map((item) => {
          const isActive = activeSegment?.includes(
            asLink(item.primary.link)?.replace("/", "") as string
          );
          return (
            <NavigationMenuPrimitive.Item
              key={item.primary.label}
              className="relative"
            >
              {item.items.length ? (
                <>
                  <NavigationMenuPrimitive.Trigger className="group relative flex items-center justify-center uppercase">
                    {item.primary.label}
                    <HoverLine open={isActive} />
                  </NavigationMenuPrimitive.Trigger>
                  <NavigationMenuPrimitive.Content className="data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=to-start]:slide-out-to-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=from-end]:slide-in-from-right-52 absolute right-0 w-full md:absolute md:w-auto">
                    <Dropdown items={item.items} />
                  </NavigationMenuPrimitive.Content>
                </>
              ) : (
                <Link
                  href={
                    item.items.length
                      ? ""
                      : (asLink(item.primary.link) as string)
                  }
                  key={item.primary.label}
                  className="group relative flex items-center justify-center uppercase"
                >
                  {item.primary.label}
                  <HoverLine open={isActive} />
                </Link>
              )}
            </NavigationMenuPrimitive.Item>
          );
        })}
      </NavigationMenuPrimitive.List>
    </NavigationMenuPrimitive.NavigationMenu>
  );
};
