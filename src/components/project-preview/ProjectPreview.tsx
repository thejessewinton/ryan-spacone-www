import { getPreviewUrl } from "utils/get-url";
import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";

export const ProjectPreview = ({
  preview,
}: {
  preview: ProjectDocumentData["preview"];
}) => {
  return (
    <iframe
      src={getPreviewUrl(preview.html as string)}
      allowFullScreen
      className="absolute h-[170%] min-h-full w-auto min-w-full max-w-none opacity-0 transition-opacity duration-700 group-hover:opacity-100"
    />
  );
};
