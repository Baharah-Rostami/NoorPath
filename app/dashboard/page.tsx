import DashboardBanner from "@/components/dashboard/DashboardBanner";
import StatsCards from "@/components/dashboard/StatsCard";
import RecentOpportunities from "@/components/dashboard/RecentOpportunities";
import ProfileCompletion from "@/components/dashboard/ProfileCompletion";
import CategoryPieChart from "@/components/dashboard/CategoryPieChart";
import JobTypeBarChart from "@/components/dashboard/JobTypeBarChart";
export default function DashboardPage() {
  return (
    <main className="space-y-8">
      <DashboardBanner />

      <StatsCards />

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentOpportunities />
        </div>

        <ProfileCompletion />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <CategoryPieChart />
        <JobTypeBarChart />
      </section>
    </main>
  );
}