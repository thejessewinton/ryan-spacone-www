import { HoverLine } from "components/hover-line/HoverLine";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";

export const CategoryNav = () => {
  return (
    <ScrollObserver>
      <div className="container mx-auto py-20">
        <nav className="flex flex-col justify-between md:flex-row">
          <Link
            href="/category/narrative"
            className="tracking-loose group relative flex items-center justify-center text-lg font-normal uppercase text-neutral-600"
          >
            Narrative
            <HoverLine />
          </Link>
          <Link
            href="/category/narrative"
            className="tracking-loose group relative flex items-center justify-center text-lg font-normal uppercase text-neutral-600"
          >
            Commercial
            <HoverLine />
          </Link>
        </nav>
      </div>
    </ScrollObserver>
  );
};
