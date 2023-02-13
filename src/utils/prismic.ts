import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/client.mjs";
import * as prismic from "@prismicio/client";
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
      "project.cover",
      "project.uid",
      "project.preview",
    ],
  });
});

export const getProject = cache(async (uid: string) => {
  const project = await client.getByUID("project", uid);

  const tag = project.tags[0] as string;

  const previousProject = await client.get({
    predicates: prismic.predicate.at("document.tags", [tag]),
    pageSize: 1,
    after: project.id,
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });

  const nextProject = await client.get({
    predicates: prismic.predicate.at("document.tags", [tag]),
    pageSize: 1,
    after: project.id,
  });

  return {
    project,
    previousProject: previousProject.results[0] as ProjectDocument,
    nextProject: nextProject.results[0] as ProjectDocument,
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

  const previousStillsSet = await client.get({
    predicates: prismic.predicate.at("document.type", "stills_set"),
    pageSize: 1,
    orderings: "my.stills_set.date",
  });

  const nextStillsSet = await client.get({
    predicates: prismic.predicate.at("document.type", "stills_set"),
    pageSize: 1,
    after: stillsSet.id,
    orderings: "my.stills_set.date desc",
  });

  return {
    stillsSet,
    previousSet: previousStillsSet.results[0] as StillsSetDocument,
    nextSet: nextStillsSet.results[0] as StillsSetDocument,
  };
});
