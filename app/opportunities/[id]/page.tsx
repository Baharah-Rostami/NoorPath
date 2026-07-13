import { opportunities } from "@/data/opportunities";
import OpportunityDetails from "@/components/opportunity/OpportunityDetails";
import { notFound } from "next/navigation";

interface OpportunityPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OpportunityPage({
  params,
}: OpportunityPageProps) {
  const { id } = await params;

  const opportunity = opportunities.find(
    (job) => job.id === Number(id)
  );

  if (!opportunity) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 dark:bg-zinc-950 md:p-8">
      <OpportunityDetails opportunity={opportunity} />
    </main>
  );
}