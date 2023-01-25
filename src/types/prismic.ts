import type {
  ProjectDocument,
  SiteSettingsDocumentDataNavigationItem,
  SiteSettingsDocumentDataSocialsItem,
} from "../../.slicemachine/prismicio";

export type NavigationProps = SiteSettingsDocumentDataNavigationItem[];
export type SocialsProps = SiteSettingsDocumentDataSocialsItem[];
export type ProjectProps = ProjectDocument["data"];
