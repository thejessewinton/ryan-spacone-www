import { HoverLine } from "components/hover-line/HoverLine";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";

export const CategoryNav = () => {
  return (
    <ScrollObserver>
      <div className="container mx-auto px-10 py-20">
        <nav className="grid grid-cols-2 justify-between">
          <Link
            href="/category/narrative"
            className="tracking-loose group relative flex items-center justify-center text-center font-serif text-sm font-normal uppercase text-neutral-600 md:text-base"
          >
            Narrative
            <HoverLine />
          </Link>
          <Link
            href="/category/commercial"
            className="tracking-loose group relative flex items-center justify-center text-center font-serif text-sm font-normal uppercase text-neutral-600 md:text-base"
          >
            Commercial
            <HoverLine />
          </Link>
        </nav>
      </div>
    </ScrollObserver>
  );
};
