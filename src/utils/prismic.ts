import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/client.mjs";
import * as prismic from "@prismicio/client";
import type {
  CategoryDocument,
  PhotoSetDocument,
  ProjectDocument,
} from "../../.slicemachine/prismicio";

const endpoint = getRepositoryEndpoint(env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME);

export const client = createClient(endpoint, {
  routes: [
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

export const getSiteSettings = async () => {
  return await client.getSingle("site_settings");
};

export const getAboutPage = async () => {
  return await client.getSingle("about");
};

export const getProjects = async () => {
  return await client.getByType("project");
};

export const getCategory = async (category: string) => {
  return await client.getByUID<
    CategoryDocument & {
      data: {
        projects: { project: ProjectDocument }[];
      };
    }
  >("category", category, {
    fetchLinks: ["project.title", "project.cover", "project.uid"],
  });
};

export const getProject = async (uid: string) => {
  const project = await client.getByUID("project", uid);

  const previousProject = await client.get({
    predicates: prismic.predicate.at("document.type", "project"),
    pageSize: 1,
    fetchLinks: ["project.title", "project.cover", "project.stills"],
    orderings: "my.project.date",
  });

  const nextProject = await client.get({
    predicates: prismic.predicate.at("document.type", "project"),
    pageSize: 1,
    fetchLinks: ["project.title", "project.cover", "project.stills"],
    after: project.id,
    orderings: "my.project.date desc",
  });

  return {
    project,
    previousProject: previousProject.results[0] as ProjectDocument,
    nextProject: nextProject.results[0] as ProjectDocument,
  };
};

export const getPhotoSets = async () => {
  return await client.getByType("photo_set");
};

export const getPhotoSet = async (uid: string) => {
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
};
