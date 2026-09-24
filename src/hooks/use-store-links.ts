import * as React from "react";
import {
  APP_STORE_COUNTRIES,
  AppStoreCountry,
  DOWNLOAD_SECTION_ID,
  PLAY_STORE_URL,
  getAppStoreUrl,
} from "@/lib/appLinks";

type Device = "ios" | "android" | "desktop";

function detectDevice(): Device {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  // iPadOS reports itself as a Mac, but Macs have no touch screen.
  if (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1) return "ios";
  return "desktop";
}

function detectCountry(): AppStoreCountry {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone === "Asia/Karachi") return "pk";
    if (CANADA_TIME_ZONES.has(timeZone)) return "ca";
  } catch {}

  // Fall back to the region in the browser language, e.g. "en-CA" or "ur-PK".
  for (const lang of navigator.languages ?? [navigator.language]) {
    const region = lang.split("-")[1]?.toLowerCase();
    if (APP_STORE_COUNTRIES.includes(region as AppStoreCountry)) {
      return region as AppStoreCountry;
    }
  }

  return APP_STORE_COUNTRIES[0];
}

const CANADA_TIME_ZONES = new Set([
  "America/St_Johns",
  "America/Halifax",
  "America/Glace_Bay",
  "America/Moncton",
  "America/Goose_Bay",
  "America/Toronto",
  "America/Montreal",
  "America/Nipigon",
  "America/Thunder_Bay",
  "America/Iqaluit",
  "America/Pangnirtung",
  "America/Atikokan",
  "America/Winnipeg",
  "America/Rainy_River",
  "America/Resolute",
  "America/Rankin_Inlet",
  "America/Regina",
  "America/Swift_Current",
  "America/Edmonton",
  "America/Cambridge_Bay",
  "America/Yellowknife",
  "America/Inuvik",
  "America/Creston",
  "America/Dawson_Creek",
  "America/Fort_Nelson",
  "America/Vancouver",
  "America/Whitehorse",
  "America/Dawson",
]);

export function useStoreLinks() {
  const [device, setDevice] = React.useState<Device>("desktop");
  const [country, setCountry] = React.useState<AppStoreCountry>(
    APP_STORE_COUNTRIES[0]
  );

  React.useEffect(() => {
    setDevice(detectDevice());
    setCountry(detectCountry());
  }, []);

  const appStoreUrl = getAppStoreUrl(country);

  // Phones go straight to their store; desktop scrolls to both buttons.
  const installUrl =
    device === "ios"
      ? appStoreUrl
      : device === "android"
        ? PLAY_STORE_URL
        : `#${DOWNLOAD_SECTION_ID}`;

  return {
    appStoreUrl,
    playStoreUrl: PLAY_STORE_URL,
    installUrl,
    installOpensNewTab: device !== "desktop",
  };
}
