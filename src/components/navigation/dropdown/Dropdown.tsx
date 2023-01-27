import { asLink } from "@prismicio/helpers";
import Link from "next/link";
import type { NavigationItemSliceDefaultItem } from "../../../../.slicemachine/prismicio";

export const Dropdown = ({
  items,
}: {
  items: NavigationItemSliceDefaultItem[];
}) => {
  return (
    <div className="invisible absolute z-10 flex flex-col gap-4 rounded-sm border border-neutral-100 bg-white p-4 opacity-0 shadow-sm transition-opacity group-hover:visible group-hover:opacity-100">
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
