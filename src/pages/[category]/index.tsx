import { clsx } from "clsx";
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
        allowFullScreen
      />
    </div>
  );
};

const CreditsSection = ({ projectName }: { projectName: string }) => {
  return (
    <section className="grid grid-cols-2 items-center justify-center gap-4 py-32 text-right md:text-left">
      <h4 className="text-center font-serif text-2xl uppercase tracking-widest">
        {projectName}
      </h4>

      <ul className="flex flex-col gap-4">
        <li>
          <span className="block font-normal uppercase">Director</span>
          <span>Chris LeClerc</span>
        </li>
        <li>
          <span className="block font-normal uppercase">
            Production Company
          </span>
          <span>Territory 6</span>
        </li>
        <li>
          <span className="block font-normal uppercase">Color</span>
          <span>Alex Verholak</span>
        </li>
        <li className="block">
          <span className="block font-normal uppercase">Format</span>
          <div className="flex flex-col">
            <span>Alexa Mini</span>
            <span>Arri Master Primes</span>
            <span>Cooke Speed Panchros</span>
          </div>
        </li>
      </ul>
    </section>
  );
};

const ImageGallery = () => {
  const arrayOfImages = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-2 gap-4">
      {arrayOfImages.map((image, i) => {
        const className = i % 5 === 0 ? "col-span-2" : "col-span-1";
        return (
          <div
            className={clsx("aspect-video bg-black", className)}
            key={image}
          />
        );
      })}
    </div>
  );
};

const Project: NextPage<ProjectPage> = () => {
  return (
    <div className="flex flex-col gap-2">
      <VimeoPlayer />
      <CreditsSection projectName="Voices" />
      <ImageGallery />
    </div>
  );
};

export default Project;

export const getStaticProps: GetStaticProps = (ctx) => {
  const { category } = ctx.params as { category: string };

  return {
    props: {
      category,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          category: "cat1",
        },
      },
      {
        params: {
          category: "cat2",
        },
      },
    ],
    fallback: false,
  };
};
