import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/client.mjs";
import * as prismic from "@prismicio/client";

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
  return await client.getByUID("category", category, {
    fetchLinks: [
      "project.title",
      "project.category",
      "project.image",
      "project.description",
      "project.uid",
    ],
  });
};

export const getProject = async (uid: string) => {
  const project = await client.getByUID("project", uid);

  const previousProject = await client.get({
    predicates: prismic.predicate.at("document.type", "project"),
    pageSize: 1,
    after: project.id,
    orderings: "my.project.date desc",
    lang: "*",
  });

  const nextProject = await client.get({
    predicates: prismic.predicate.at("document.type", "project"),
    pageSize: 1,
    after: project.id,
    orderings: "my.project.date",
    lang: "*",
  });

  return {
    project,
    previousProject: previousProject.results[0],
    nextProject: nextProject.results[0],
  };
};
