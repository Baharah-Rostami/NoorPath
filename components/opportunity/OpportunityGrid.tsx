import OpportunityCard from "./OpportunityCard";
import { Opportunity } from "@/data/opportunities";

interface OpportunityGridProps {
  opportunities: Opportunity[];
  clearFilters: () => void;
}

export default function OpportunityGrid({
  opportunities,
  clearFilters,
}: OpportunityGridProps) {
  if (opportunities.length === 0) {
    return (
      <div className="mt-20 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 bg-white py-20 text-center dark:border-zinc-700 dark:bg-zinc-900">
        <h3 className="text-2xl font-bold dark:text-white">
          No Opportunities Found
        </h3>

        <p className="mt-3 max-w-md text-gray-500 dark:text-gray-400">
          Try changing your search or filters to discover more opportunities.
        </p>

        <button
          onClick={clearFilters}
          className="mt-8 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Clear Filters
        </button>
      </div>
    );
  }

  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {opportunities.map((opportunity) => (
        <OpportunityCard
          key={opportunity.id}
          opportunity={opportunity}
        />
      ))}
    </div>
  );
}