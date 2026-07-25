import DashboardBanner from "@/components/dashboard/DashboardBanner";
import StatsCards from "@/components/dashboard/StatsCard";

export default function DashboardPage() {
  return (
   <main className="space-y-8">

    <DashboardBanner />
    <StatsCards/>
</main>
  );
}