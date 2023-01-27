import type {
  ProjectDocument,
  SiteSettingsDocumentDataSlicesSlice,
  SiteSettingsDocumentDataSocialsItem,
} from "../../.slicemachine/prismicio";

export type NavigationProps = SiteSettingsDocumentDataSlicesSlice[];
export type SocialsProps = SiteSettingsDocumentDataSocialsItem[];
export type ProjectProps = ProjectDocument["data"];
