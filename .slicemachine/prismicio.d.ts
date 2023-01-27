// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for About documents */
interface AboutDocumentData {
    /**
     * Image field in *About*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: about.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Bio field in *About*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.bio
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    bio: prismicT.RichTextField;
    /**
     * Representation field in *About*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: about.representation[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    representation: prismicT.GroupField<Simplify<AboutDocumentDataRepresentationItem>>;
    /**
     * Meta Title field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *About*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Item in About → Representation
 *
 */
export interface AboutDocumentDataRepresentationItem {
    /**
     * Title field in *About → Representation*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.representation[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Details field in *About → Representation*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: about.representation[].details
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    details: prismicT.RichTextField;
}
/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<AboutDocumentData>, "about", Lang>;
/** Content for Category documents */
interface CategoryDocumentData {
    /**
     * Title field in *Category*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: category.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Projects field in *Category*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: category.projects[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    projects: prismicT.GroupField<Simplify<CategoryDocumentDataProjectsItem>>;
    /**
     * Meta Title field in *Category*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Category*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: category.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Item in Category → Projects
 *
 */
export interface CategoryDocumentDataProjectsItem {
    /**
     * Project field in *Category → Projects*
     *
     * - **Field Type**: Content Relationship
     * - **Placeholder**: *None*
     * - **API ID Path**: category.projects[].project
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    project: prismicT.RelationField<"project">;
}
/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<CategoryDocumentData>, "category", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * Title field in *Project*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Cover field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.cover
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    cover: prismicT.ImageField<"widescreen">;
    /**
     * Video field in *Project*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: project.video
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    video: prismicT.EmbedField;
    /**
     * Credits field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.credits[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    credits: prismicT.GroupField<Simplify<ProjectDocumentDataCreditsItem>>;
    /**
     * Stills field in *Project*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: project.stills[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    stills: prismicT.GroupField<Simplify<ProjectDocumentDataStillsItem>>;
    /**
     * Meta Title field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.meta_title
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Project*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.meta_description
     * - **Tab**: SEO
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Item in Project → Credits
 *
 */
export interface ProjectDocumentDataCreditsItem {
    /**
     * Label field in *Project → Credits*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.credits[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Details field in *Project → Credits*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.credits[].details
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    details: prismicT.RichTextField;
}
/**
 * Item in Project → Stills
 *
 */
export interface ProjectDocumentDataStillsItem {
    /**
     * Image field in *Project → Stills*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.stills[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
/** Content for Site Settings documents */
interface SiteSettingsDocumentData {
    /**
     * Slice Zone field in *Site Settings*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.slices[]
     * - **Tab**: Navigation
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SiteSettingsDocumentDataSlicesSlice>;
    /**
     * Socials field in *Site Settings*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.socials[]
     * - **Tab**: Socials
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    socials: prismicT.GroupField<Simplify<SiteSettingsDocumentDataSocialsItem>>;
    /**
     * Meta Title field in *Site Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.meta_title
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_title: prismicT.KeyTextField;
    /**
     * Meta Description field in *Site Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.meta_description
     * - **Tab**: Meta
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
}
/**
 * Slice for *Site Settings → Slice Zone*
 *
 */
type SiteSettingsDocumentDataSlicesSlice = NavigationItemSlice;
/**
 * Item in Site Settings → Socials
 *
 */
export interface SiteSettingsDocumentDataSocialsItem {
    /**
     * Label field in *Site Settings → Socials*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.socials[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Site Settings → Socials*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: site_settings.socials[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Site Settings document from Prismic
 *
 * - **API ID**: `site_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SiteSettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SiteSettingsDocumentData>, "site_settings", Lang>;
export type AllDocumentTypes = AboutDocument | CategoryDocument | ProjectDocument | SiteSettingsDocument;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
    /**
     * Label field in *NavigationItem → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavigationItemSliceDefaultItem {
    /**
     * Label field in *NavigationItem → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *NavigationItem → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavigationItemSliceDefaultPrimary>, Simplify<NavigationItemSliceDefaultItem>>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismicT.SharedSlice<"navigation_item", NavigationItemSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { AboutDocumentData, AboutDocumentDataRepresentationItem, AboutDocument, CategoryDocumentData, CategoryDocumentDataProjectsItem, CategoryDocument, ProjectDocumentData, ProjectDocumentDataCreditsItem, ProjectDocumentDataStillsItem, ProjectDocument, SiteSettingsDocumentData, SiteSettingsDocumentDataSlicesSlice, SiteSettingsDocumentDataSocialsItem, SiteSettingsDocument, AllDocumentTypes, NavigationItemSliceDefaultPrimary, NavigationItemSliceDefaultItem, NavigationItemSliceDefault, NavigationItemSliceVariation, NavigationItemSlice };
    }
}
