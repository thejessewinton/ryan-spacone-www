import { getPreviewUrl } from "utils/get-url";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";
import { clsx } from "clsx";

export const ProjectPreview = ({
  preview,
  showOnHover = false,
}: {
  preview: ProjectDocumentData["preview"];
  showOnHover?: boolean;
}) => {
  return (
    <iframe
      src={getPreviewUrl(preview.html as string)}
      allowFullScreen
      loading="lazy"
      className={clsx(
        "absolute top-1/2 left-1/2 aspect-video min-h-full min-w-full translate-y-[-50%] translate-x-[-50%] transition-opacity duration-700",
        showOnHover
          ? "opacity-0 group-hover:opacity-100"
          : "opacity-0 group-hover:opacity-100 md:opacity-100"
      )}
    />
  );
};
