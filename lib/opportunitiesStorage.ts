import type { Opportunity } from "@/data/opportunities";
import { opportunities as defaultOpportunities } from "@/data/opportunities";

const STORAGE_KEY = "noorpath-opportunities";


export function getOpportunities(): Opportunity[] {
  if (typeof window === "undefined") {
    return defaultOpportunities;
  }

  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(defaultOpportunities)
    );

    return defaultOpportunities;
  }

  return JSON.parse(stored);
}


export function addOpportunity(
  opportunity: Opportunity
) {
  const opportunities = getOpportunities();

  const updated = [
    opportunity,
    ...opportunities,
  ];

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}


export function removeOpportunity(
  id: number
) {
  const opportunities = getOpportunities();

  const updated = opportunities.filter(
    (item) => item.id !== id
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}


export function clearOpportunities() {
  localStorage.removeItem(STORAGE_KEY);
}