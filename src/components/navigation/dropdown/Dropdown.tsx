import Link from "next/link";

export const Dropdown = ({
  items,
}: {
  items: { name: string; href: string }[];
}) => {
  return (
    <div className="invisible absolute z-10 flex flex-col gap-4 rounded-sm border border-neutral-100 bg-white p-4 opacity-0 shadow-sm transition-opacity group-hover:visible group-hover:opacity-100">
      {items.map((item) => {
        return (
          <Link href={item.href} key={item.name} className="text-sm uppercase">
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
