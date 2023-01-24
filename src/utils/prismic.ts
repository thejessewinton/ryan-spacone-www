import { createClient, getRepositoryEndpoint } from "@prismicio/client";
import { env } from "env/server.mjs";

const endpoint = getRepositoryEndpoint(env.PRISMIC_REPOSITORY_NAME);

export const prismic = createClient(endpoint);

export const getSiteSettings = async () => {
  return await prismic.getSingle("site_settings");
};

export const getAboutPage = async () => {
  return await prismic.getSingle("about");
};
