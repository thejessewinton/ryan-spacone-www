import type { ProjectDocumentData } from "../../../.slicemachine/prismicio";

const getIdFromUrl = (url: string) => {
  const id = url.split("/").pop();
  if (!id) throw new Error("Could not get ID from URL");
  return id;
};

export const VimeoPlayer = ({
  video,
}: {
  video: ProjectDocumentData["video"];
}) => {
  const id = getIdFromUrl(video.embed_url);
  const src = `https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0`;
  return (
    <div className="relative aspect-video w-full bg-neutral-900">
      <iframe
        src={src}
        className="absolute inset-0 h-full w-full"
        allowFullScreen
      />
    </div>
  );
};
