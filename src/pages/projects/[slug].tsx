import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

type ProjectPage = InferGetStaticPropsType<typeof getStaticProps>;

const Project: NextPage<ProjectPage> = ({ slug }) => {
  return (
    <div>
      <h1>Slug</h1>
      {slug}
    </div>
  );
};

export default Project;

export const getStaticProps: GetStaticProps = (ctx) => {
  const { slug } = ctx.params as { slug: string };

  return {
    props: {
      slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          slug: "test-slug",
        },
      },
    ],
    fallback: false,
  };
};
