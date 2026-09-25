import type { Metadata } from "next";
import { OpenPostClient } from "./OpenPostClient";

export const metadata: Metadata = {
  title: "Open this post",
  description: "View this post in the MyPetBook app.",
  robots: { index: false, follow: false },
};

export default function PostPage({ params }: { params: { id: string } }) {
  return <OpenPostClient postId={params.id} />;
}
