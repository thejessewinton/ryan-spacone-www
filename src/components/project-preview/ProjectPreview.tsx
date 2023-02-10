import { getPreviewUrl } from "utils/get-url";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";

export const ProjectPreview = ({
  preview,
}: {
  preview: ProjectDocumentData["preview"];
}) => {
  return (
    <iframe
      src={getPreviewUrl(preview.embed_url)}
      className="absolute inset-0 aspect-widescreen h-full w-full overflow-hidden object-fill opacity-0 transition-opacity duration-1000 group-hover:opacity-100"
      allowFullScreen
    />
  );
};
