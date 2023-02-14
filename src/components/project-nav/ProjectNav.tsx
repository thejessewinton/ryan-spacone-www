import { LeftArrow } from "components/icons/Icons";
import Link from "next/link";
import type {
  ProjectDocument,
  StillsSetDocument,
} from "../../../.slicemachine/prismicio";
import { ScrollObserver } from "components/scroll-observer/ScrollObserver";

export const ProjectNav = ({
  previous,
  next,
  first,
}: {
  previous: ProjectDocument | StillsSetDocument | undefined;
  next: ProjectDocument | StillsSetDocument | undefined;
  first: ProjectDocument | StillsSetDocument | undefined;
}) => {
  return (
    <ScrollObserver>
      <div className="my-12 grid h-24 grid-cols-2 overflow-hidden md:my-24">
        {previous ? (
          <Link
            href={previous.url as string}
            className="group flex items-center justify-center gap-4 text-lg"
          >
            <LeftArrow className="transition-all group-hover:-translate-x-2" />
            <h3 className="font-serif text-sm uppercase italic group-hover:text-brand">
              Previous
            </h3>
          </Link>
        ) : (
          <div className="group flex cursor-not-allowed items-center justify-center gap-4 text-lg opacity-75">
            <LeftArrow />
            <h3 className="font-serif text-sm uppercase italic">Previous</h3>
          </div>
        )}
        {next ? (
          <Link
            href={next.url as string}
            className="group flex items-center justify-center gap-4 text-lg"
          >
            <h3 className="font-serif text-sm uppercase italic group-hover:text-brand">
              Next
            </h3>
            <LeftArrow className="rotate-180 transition-all group-hover:translate-x-2" />
          </Link>
        ) : (
          <Link
            href={first?.url as string}
            className="group flex items-center justify-center gap-4 text-lg"
          >
            <h3 className="font-serif text-sm uppercase italic group-hover:text-brand">
              Next
            </h3>
            <LeftArrow className="rotate-180 transition-all group-hover:translate-x-2" />
          </Link>
        )}
      </div>
    </ScrollObserver>
  );
};
