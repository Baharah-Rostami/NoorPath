"use client";

import { useEffect, useState } from "react";
import { getSavedIds, toggleSaved } from "@/lib/savedOpportunities";

export default function useSavedOpportunities() {
  const [savedIds, setSavedIds] = useState<number[]>([]);

  useEffect(() => {
    setSavedIds(getSavedIds());
  }, []);

  const handleToggle = (id: number) => {
    toggleSaved(id);
    setSavedIds(getSavedIds());
  };

  return {
    savedIds,
    handleToggle,
  };
}