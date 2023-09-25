import { ScrollObserver } from "components/scroll-observer/ScrollObserver";
import Link from "next/link";

export const CategoryNav = () => {
  return (
    <ScrollObserver>
      <div className="container mx-auto p-20">
        <nav className="flex justify-between">
          <Link
            href="/category/narrative"
            className="tracking-loose group relative flex w-1/2 items-center justify-center text-right font-serif text-sm font-normal uppercase text-neutral-600 md:text-base"
          >
            Narrative
          </Link>
          <Link
            href="/category/commercial"
            className="tracking-loose group relative flex w-1/2 items-center justify-center text-left font-serif text-sm font-normal uppercase text-neutral-600 md:text-base"
          >
            Commercial
          </Link>
        </nav>
      </div>
    </ScrollObserver>
  );
};
