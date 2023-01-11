import Link from "next/link";

const navigation = [
  {
    name: "Film",
    href: "#",
    current: true,
    children: [
      {
        name: "Narrative",
        href: "#narrative",
      },
      {
        name: "Documentary",
        href: "#",
      },
    ],
  },
  { name: "Photo", href: "#", current: false },
  { name: "About", href: "#", current: false },
];

const Dropdown = ({ items }: { items: { name: string; href: string }[] }) => {
  return (
    <div className="invisible absolute z-10 flex flex-col gap-4 rounded-sm border border-neutral-100 bg-white p-4 opacity-0 shadow-sm transition-opacity group-hover:visible group-hover:opacity-100">
      {items.map((item) => {
        return (
          <Link
            href={item.href}
            key={item.name}
            className="text-sm font-light uppercase text-neutral-800"
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};

export const Navigation = () => {
  return (
    <nav className="flex space-x-8">
      {navigation.map((item) => (
        <Link
          href={item.href}
          key={item.name}
          className="group relative text-sm font-light uppercase text-neutral-800"
        >
          {item.name}
          {item.children && <Dropdown items={item.children} />}
        </Link>
      ))}
    </nav>
  );
};
