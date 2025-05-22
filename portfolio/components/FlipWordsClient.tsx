"use client";

import dynamic from "next/dynamic";

const FlipWords = dynamic(
  () => import("@/components/ui/flip-words").then(mod => mod.FlipWords),
  { ssr: false, loading: () => <span> Esperienze</span> }
);

export default FlipWords;
