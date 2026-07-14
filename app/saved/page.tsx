"use client";

import { opportunities } from "@/data/opportunities";
import useSavedOpportunities from "@/hooks/useSavedOpportunities";
import OpportunityCard from "@/components/opportunity/OpportunityCard";

export default function SavedPage() {
  const { savedIds } = useSavedOpportunities();

  const savedJobs = opportunities.filter(job =>
    savedIds.includes(job.id)
  );

  if (savedJobs.length === 0) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            No saved opportunities
          </h2>

          <p className="mt-2 text-gray-500">
            Save jobs to view them later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {savedJobs.map(job => (
        <OpportunityCard
          key={job.id}
          opportunity={job}
        />
      ))}
    </div>
  );
}