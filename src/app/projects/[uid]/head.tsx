import { getProject } from "utils/prismic";

const Head = async ({ params }: { params: { uid: string } }) => {
  const { data } = await getProject(params.uid);

  return <title>{`${data.meta_title as string} — Ryan Spacone`}</title>;
};

export default Head;
