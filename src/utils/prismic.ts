import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/client.mjs";
import * as prismic from "@prismicio/client";
import type {
  CategoryDocument,
  HomeDocument,
  PhotoSetDocument,
  ProjectDocument,
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
    fetchLinks: ["project.title", "project.cover", "project.uid"],
  });
});

export const getProject = cache(async (uid: string) => {
  const project = await client.getByUID("project", uid);

  const previousProject = await client.get({
    predicates: prismic.predicate.at("document.type", "project"),
    pageSize: 1,
    fetchLinks: ["project.title", "project.cover", "project.stills"],
    after: project.id,
    orderings: {
      field: "document.last_publication_date",
      direction: "desc",
    },
  });

  const nextProject = await client.get({
    predicates: prismic.predicate.at("document.type", "project"),
    pageSize: 1,
    fetchLinks: ["project.title", "project.cover", "project.stills"],
    after: project.id,
  });

  return {
    project,
    previousProject: previousProject.results[0] as ProjectDocument,
    nextProject: nextProject.results[0] as ProjectDocument,
  };
});

export const getPhotoSets = cache(async () => {
  return await client.getByType("photo_set");
});

export const getPhotoSet = cache(async (uid: string) => {
  const photoSet = await client.getByUID("photo_set", uid);

  const previousPhotoSet = await client.get({
    predicates: prismic.predicate.at("document.type", "photo_set"),
    pageSize: 1,
    orderings: "my.photo_set.date",
  });

  const nextPhotoSet = await client.get({
    predicates: prismic.predicate.at("document.type", "photo_set"),
    pageSize: 1,
    after: photoSet.id,
    orderings: "my.photo_set.date desc",
  });

  return {
    photoSet,
    previousProject: previousPhotoSet.results[0] as PhotoSetDocument,
    nextPhotoSet: nextPhotoSet.results[0] as PhotoSetDocument,
  };
});
