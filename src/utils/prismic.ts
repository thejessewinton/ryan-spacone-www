import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/server.mjs";
import type {
  CategoryDocument,
  HomeDocument,
  StillsSetDocument,
  ProjectDocument,
  StillsDocument,
} from "../../.slicemachine/prismicio";
import { cache } from "react";

const endpoint = getRepositoryEndpoint(env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME);

export const client = createClient(endpoint, {
  routes: [
    {
      type: "home",
      path: "/",
    },
    {
      type: "about",
      path: "/:uid",
    },
    {
      type: "stills",
      path: "/:uid",
    },
    {
      type: "stills_set",
      path: "/stills/:uid",
    },
    {
      type: "project",
      path: "/projects/:uid",
    },
    {
      type: "category",
      path: "/category/:uid",
    },
  ],
});

export const getSiteSettings = cache(async () => {
  return await client.getSingle("site_settings");
});

export const getHomePage = cache(async () => {
  return await client.getSingle<
    HomeDocument & {
      data: {
        projects: { project: ProjectDocument }[];
      };
    }
  >("home", {
    fetchLinks: [
      "project.title",
      "project.client",
      "project.cover",
      "project.uid",
      "project.preview",
    ],
  });
});

export const getAboutPage = cache(async () => {
  return await client.getSingle("about");
});

export const getProjects = cache(async () => {
  return await client.getByType("project");
});

export const getCategory = cache(async (category: string) => {
  return await client.getByUID<
    CategoryDocument & {
      data: {
        projects: { project: ProjectDocument }[];
      };
    }
  >("category", category, {
    fetchLinks: [
      "project.title",
      "project.client",
      "project.cover",
      "project.uid",
      "project.preview",
    ],
  });
});

export const getProject = cache(async (uid: string) => {
  const project = await client.getByUID<
    ProjectDocument & {
      data: {
        category: CategoryDocument;
      };
    }
  >("project", uid, {
    fetchLinks: ["category.uid"],
  });

  const categoryUid = project.data.category.uid;

  const allProjectsInCategory = await client.getByUID<
    CategoryDocument & {
      data: {
        projects: {
          project: {
            url: string;
            uid: string;
          };
        }[];
      };
    }
  >("category", categoryUid);

  const currentProject = allProjectsInCategory.data.projects.findIndex(
    (project) => project.project.uid === uid
  );

  const firstProject =
    allProjectsInCategory.data.projects[
      allProjectsInCategory.data.projects.length -
        allProjectsInCategory.data.projects.length
    ]?.project.url;
  const previousProject = allProjectsInCategory.data.projects[
    currentProject - 1
  ]?.project.url as string;
  const nextProject = allProjectsInCategory.data.projects[currentProject + 1]
    ?.project.url as string;

  return {
    project,
    firstProject,
    previousProject,
    nextProject,
  };
});

export const getStillsPage = cache(async () => {
  return await client.getSingle<
    StillsDocument & {
      data: {
        sets: { set: StillsSetDocument }[];
      };
    }
  >("stills", {
    fetchLinks: [
      "stills_set.title",
      "stills_set.cover",
      "stills_setstills_set.uid",
      "stills_set.preview",
    ],
  });
});

export const getStillsSet = cache(async (uid: string) => {
  const stillsSet = await client.getByUID("stills_set", uid);

  const allStillsSets = await getStillsPage();
  const currentSet = allStillsSets.data.sets.findIndex(
    (set) => set.set.uid === uid
  );

  const firstSet = allStillsSets.data.sets[
    allStillsSets.data.sets.length - allStillsSets.data.sets.length
  ]?.set.url as string;

  const previousSet = allStillsSets.data.sets[currentSet - 1]?.set
    .url as string;
  const nextSet = allStillsSets.data.sets[currentSet + 1]?.set.url as string;

  return {
    firstSet,
    stillsSet,
    previousSet,
    nextSet,
  };
});
