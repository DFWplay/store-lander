// components/Exposure.tsx
"use client";

import { useEffect } from "react";
import { PHEvent } from "@/lib/ph";

type Props = {
  experiment: string;
  variant: string;
  slug: string;
};

export function Exposure({ experiment, variant, slug }: Props) {
  useEffect(() => {
    PHEvent("$experiment_started", { experiment, variant, slug });
  }, [experiment, variant, slug]);

  return null;
}

