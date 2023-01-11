import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

type ProjectPage = InferGetStaticPropsType<typeof getStaticProps>;

const VimeoPlayer = () => {
  return (
    <div className="relative aspect-video w-full bg-black">
      <iframe
        src="https://player.vimeo.com/video/652183103?title=0&byline=0&portrait=0&dnt=1?h=e441594c15&dnt=1&app_id=122963"
        className="h-full w-full"
      />
    </div>
  );
};

const CreditsSection = ({ projectName }: { projectName: string }) => {
  return (
    <section className="flex items-center justify-center gap-4 p-6">
      <h4 className="font-serif text-3xl uppercase">{projectName}</h4>
      <div className="flex flex-col gap-2">
        DIRECTOR Chris Leclerc PRODUCTION COMPANY Territory 6 COLOR Alex
        Verholak FORMAT Alexa Mini Arri Master Primes Cooke Speed Panchros
      </div>
    </section>
  );
};

const Project: NextPage<ProjectPage> = ({ slug }) => {
  return (
    <div className="flex flex-col gap-2">
      <VimeoPlayer />
      <CreditsSection projectName="Voices" />
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
