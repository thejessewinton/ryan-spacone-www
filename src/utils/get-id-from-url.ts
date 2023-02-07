export const getIdFromUrl = (url: string) => {
  const id = url.split("/").pop();
  if (!id) throw new Error("Could not get ID from URL");
  return id;
};
