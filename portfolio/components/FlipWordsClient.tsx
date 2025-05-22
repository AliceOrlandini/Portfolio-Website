"use client";

import dynamic from "next/dynamic";

const FlipWords = dynamic(
  () => import("@/components/ui/flip-words").then(mod => mod.FlipWords),
  { ssr: true }
);

export default FlipWords;
