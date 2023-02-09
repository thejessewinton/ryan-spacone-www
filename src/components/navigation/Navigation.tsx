"use client";

import { asLink } from "@prismicio/helpers";
import Link from "next/link";
import type { NavigationProps } from "types/prismic";
import { HoverLine } from "components/hover-line/HoverLine";

// const Dropdown = ({ items }: { items: NavigationItemSliceDefaultItem[] }) => {
//   return (
//     <div className="absolute right-0 z-10 flex flex-col gap-4 rounded-sm bg-white py-4 px-8 drop-shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
//       {items.map((item) => {
//         return (
//           <Link
//             href={asLink(item.link) as string}
//             key={item.label}
//             className="group text-sm uppercase"
//           >
//             {item.label}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

export const Navigation = ({ navigation }: { navigation: NavigationProps }) => {
  return (
    <nav className="hidden items-center gap-x-8 md:flex">
      {navigation.map((item) => {
        return (
          <Link
            href={
              item.items.length ? "" : (asLink(item.primary.link) as string)
            }
            key={item.primary.label}
            className="tracking-loose group relative flex items-center justify-center text-sm font-normal uppercase text-neutral-600"
          >
            {item.primary.label}
            <HoverLine />
          </Link>
        );
      })}
    </nav>
  );
};
