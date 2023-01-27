import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/client.mjs";

const endpoint = getRepositoryEndpoint(env.NEXT_PUBLIC_PRISMIC_REPOSITORY_NAME);

export const prismic = createClient(endpoint, {
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
  return await prismic.getSingle("site_settings");
};

export const getAboutPage = async () => {
  return await prismic.getSingle("about");
};

export const getProjects = async () => {
  return await prismic.getByType("project");
};

export const getCategory = async (category: string) => {
  return await prismic.getByUID("category", category, {
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
  return await prismic.getByUID("project", uid);
};
