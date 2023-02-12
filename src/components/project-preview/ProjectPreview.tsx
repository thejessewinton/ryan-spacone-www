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
        "absolute h-[169%] min-h-full w-auto min-w-full max-w-none transition-opacity duration-700",
        showOnHover
          ? "opacity-0 group-hover:opacity-100"
          : "opacity-0 group-hover:opacity-100 md:opacity-100"
      )}
    />
  );
};
