"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/appLinks";

type Platform = "ios" | "android" | "other";

function detectPlatform(): Platform {
  const ua = window.navigator.userAgent;
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  if (/Android/.test(ua)) return "android";
  return "other";
}

export function OpenPostClient({ postId }: { postId: string }) {
  const [platform, setPlatform] = useState<Platform>("other");
  const leftPage = useRef(false);
  const deepLink = `com.mypetbook.app://post/${encodeURIComponent(postId)}`;

  useEffect(() => {
    const detected = detectPlatform();
    setPlatform(detected);
    if (detected === "other") return;

    const onVisibilityChange = () => {
      if (document.hidden) leftPage.current = true;
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    const storeUrl = detected === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
    const fallbackTimer = window.setTimeout(() => {
      if (!leftPage.current) window.location.href = storeUrl;
    }, 1500);

    window.location.href = deepLink;

    return () => {
      window.clearTimeout(fallbackTimer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [deepLink]);

  const storeUrl = platform === "ios" ? APP_STORE_URL : PLAY_STORE_URL;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-muted px-6 text-center">
      <Image
        src="/icon.png"
        alt="MyPetBook"
        width={72}
        height={72}
        className="rounded-2xl shadow-sm"
      />
      <div>
        <h1 className="text-2xl font-bold">Opening MyPetBook…</h1>
        <p className="mt-2 text-muted-foreground">
          If the app doesn&apos;t open automatically, tap below.
        </p>
      </div>
      <Button asChild size="lg">
        <a href={deepLink}>Open in App</a>
      </Button>
      <a href={storeUrl} className="text-sm text-primary underline underline-offset-4">
        Don&apos;t have the app? Get it here
      </a>
    </main>
  );
}
