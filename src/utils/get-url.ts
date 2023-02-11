export const getImageUrl = (url: string) => {
  return `${url}`;
};

export const getBlurUrl = (url: string) => {
  return `${url}&blur=200`;
};

export const getVideoUrl = (url: string) => {
  const id = url.split("/").pop();
  if (!id) throw new Error("Could not get ID from URL");

  return `https://player.vimeo.com/video/${id}?&autoplay=1&title=0&byline=0&portrait=0&badge=0`;
};

export const getPreviewUrl = (url: string) => {
  const urlArray = url.split("/");
  // get second to last item from id
  const id = urlArray[urlArray.length - 2];
  if (!id) throw new Error("Could not get ID from URL");

  return `https://player.vimeo.com/video/797781305?h=f88cf0b616&background=1&responsive=0&amp;app_id=122963`;
};
