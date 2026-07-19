"use client";

import OpportunityCard from "@/components/opportunity/OpportunityCard";
import { opportunities } from "@/data/opportunities";
import useSavedOpportunities from "@/hooks/useSavedOpportunities";
import { useMemo } from "react";

export default function SavedPage() {
console.log("SavedPage rendered");
  const { savedIds, handleToggle } = useSavedOpportunities();

const savedOpportunities = useMemo(() => {
  return opportunities.filter((item) =>
    savedIds.includes(item.id)
  );
}, [savedIds]);

  if (savedOpportunities.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">
          No saved opportunities
        </h2>

        <p className="mt-2 text-gray-500">
          Save an opportunity and it will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {savedOpportunities.map((item) => (
        <OpportunityCard
          key={item.id}
          opportunity={item}
          saved={savedIds.includes(item.id)}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}