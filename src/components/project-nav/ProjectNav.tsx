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
      <div className="grid grid-cols-2 gap-4 overflow-hidden pt-6">
        {previous && (
          <Link
            href={previous.url as string}
            className="group flex items-center justify-center gap-4 text-lg"
            aria-disabled={!previous}
          >
            <LeftArrow className="transition-all duration-700 group-hover:-translate-x-2" />
            <h3 className="font-brand uppercase group-hover:text-brand">
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
            <h3 className="font-brand uppercase group-hover:text-brand">
              Next
            </h3>
            <RightArrow className="transition-all duration-700 group-hover:translate-x-2" />
          </Link>
        )}
      </div>
    </ScrollObserver>
  );
};
