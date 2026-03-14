"use client";

import { usePathname } from "next/navigation";
import Layout from "./Layout";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuth = pathname?.startsWith("/auth");

  if (isAuth) {
    return <>{children}</>;
  }

  return <Layout>{children}</Layout>;
}
