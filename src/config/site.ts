import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://testingdevops.rest",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
];

export const SOURCE_CODE_GITHUB_REPO = "https://github.com/TesT-098-ops";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/ncdai/chanhdai.com";

export const UTM_PARAMS = {
  utm_source: "testingdevops.rest",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
