import { LeftArrow, RightArrow } from "components/icons/Icons";
import Link from "next/link";
import type {
  PhotoSetDocument,
  ProjectDocument,
} from "../../../.slicemachine/prismicio";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";

export const ProjectNav = ({
  previous,
  next,
}: {
  previous: ProjectDocument | PhotoSetDocument | undefined;
  next: ProjectDocument | PhotoSetDocument | undefined;
}) => {
  return (
    <ScrollObserver>
      <div className="divide-x-neutral-200 grid h-24 grid-cols-2 divide-x overflow-hidden">
        {previous && (
          <Link
            href={previous.url as string}
            className="group flex items-center justify-center gap-4 text-lg"
            aria-disabled={!previous}
          >
            <LeftArrow className="transition-all group-hover:-translate-x-2" />
            <h3 className="font-serif uppercase group-hover:text-brand">
              Previous
            </h3>
          </Link>
        )}
        {next && (
          <Link
            href={next.url as string}
            className="group flex items-center justify-center gap-4 text-lg"
            aria-disabled={!next}
          >
            <h3 className="font-serif uppercase group-hover:text-brand">
              Next
            </h3>
            <LeftArrow className="rotate-180 transition-all group-hover:translate-x-2" />
          </Link>
        )}
      </div>
    </ScrollObserver>
  );
};
