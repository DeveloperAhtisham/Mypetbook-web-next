const APP_STORE_ID = "id6752717406";

// Countries where the iOS app is released. The first one is the fallback.
export const APP_STORE_COUNTRIES = ["pk", "ca"] as const;
export type AppStoreCountry = (typeof APP_STORE_COUNTRIES)[number];

export const getAppStoreUrl = (country: AppStoreCountry = "pk") =>
  `https://apps.apple.com/${country}/app/mypetbook-app/${APP_STORE_ID}`;

export const APP_STORE_URL = getAppStoreUrl();

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.mypetbook.app";

// Section on the home page that shows both store buttons.
export const DOWNLOAD_SECTION_ID = "download";
