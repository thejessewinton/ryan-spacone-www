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

export const getProjectsByCategory = async (category: string) => {
  return await prismic.getByTag(category);
};

export const getProject = async (uid: string) => {
  return await prismic.getByUID("project", uid);
};
