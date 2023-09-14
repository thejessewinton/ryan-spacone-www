import type {
  ProjectDocument,
  SiteSettingsDocumentDataSlicesSlice,
  SiteSettingsDocumentDataSocialsItem,
  StillsSetDocument,
} from "../../prismicio-types";

export type NavigationProps = SiteSettingsDocumentDataSlicesSlice[];
export type SocialsProps = SiteSettingsDocumentDataSocialsItem[];
export type ProjectProps = ProjectDocument["data"];
export type StillsSetProps = StillsSetDocument["data"];
