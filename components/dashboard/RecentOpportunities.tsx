"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  MapPin,
} from "lucide-react";

import type { Opportunity } from "@/data/opportunities";
import { getOpportunities } from "@/lib/opportunitiesStorage";

export default function RecentOpportunities() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    setOpportunities(getOpportunities().slice(0, 5));
  }, []);

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Recent Opportunities
          </h2>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Recently added opportunities on NoorPath.
          </p>
        </div>

        <Link
          href="/opportunities"
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          View All
          <ArrowRight size={16} />
        </Link>

      </div>

      {/* Empty */}

      {opportunities.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 py-16 text-center dark:border-zinc-700">

          <Building2
            size={42}
            className="mx-auto mb-4 text-gray-400"
          />

          <h3 className="text-lg font-semibold dark:text-white">
            No Opportunities Yet
          </h3>

          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Opportunities will appear here once they are added.
          </p>

        </div>
      )}

      <div className="space-y-4">

        {opportunities.map((job) => (

          <div
            key={job.id}
            className="group flex flex-col gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-emerald-500 hover:shadow-md dark:border-zinc-800 md:flex-row md:items-center md:justify-between"
          >

            {/* Left */}

            <div className="flex items-start gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">
                <Building2 size={22} />
              </div>

              <div>

                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {job.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {job.company}
                </p>

                <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">

                  <span className="flex items-center gap-1">
                    <MapPin size={15} />
                    {job.location}
                  </span>

                  <span className="flex items-center gap-1">
                    <BriefcaseBusiness size={15} />
                    {job.type}
                  </span>

                  <span className="flex items-center gap-1">
                    <Clock3 size={15} />
                    {job.postedAt}
                  </span>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="flex items-center gap-3">

              {job.remote && (
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  Remote
                </span>
              )}

              <Link
                href={`/opportunities/${job.id}`}
                className="flex items-center gap-2 rounded-xl border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
              >
                View
                <ArrowRight size={15} />
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}