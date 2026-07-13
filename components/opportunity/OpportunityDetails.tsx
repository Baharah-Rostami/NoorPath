"use client";

import Link from "next/link";
import type { Opportunity } from "@/data/opportunities";
import {
  ArrowLeft,
  Building2,
  MapPin,
  DollarSign,
  Clock3,
  Briefcase,
  Bookmark,
  Star,
  CheckCircle,
} from "lucide-react";

interface OpportunityDetailsProps {
  opportunity: Opportunity;
}

export default function OpportunityDetails({
  opportunity,
}: OpportunityDetailsProps) {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Back Button */}
      <Link
        href="/opportunities"
        className="mb-8 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition hover:border-[#659287] hover:text-[#659287] dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
      >
        <ArrowLeft size={18} />
        Back to Opportunities
      </Link>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* LEFT CONTENT */}
        <div className="space-y-8 lg:col-span-2">

          {/* Hero Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">

              <div className="flex items-start gap-5">

                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                  <Building2 size={38} />
                </div>

                <div>

                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {opportunity.title}
                  </h1>

                  <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
                    {opportunity.company}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">

                    {opportunity.featured && (
                      <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                        <Star size={16} />
                        Featured
                      </span>
                    )}

                    {opportunity.remote && (
                      <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        Remote
                      </span>
                    )}

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {opportunity.experience}
                    </span>

                  </div>

                </div>

              </div>

              <button className="rounded-xl border border-[#659287] px-5 py-3 font-semibold text-[#659287] transition hover:bg-[#659287] hover:text-white">
                <Bookmark size={18} className="inline mr-2" />
                Save Job
              </button>

            </div>
          </div>

          {/* Job Information */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

            <h2 className="mb-6 text-2xl font-bold dark:text-white">
              Job Information
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5 dark:bg-zinc-800">
                <MapPin className="text-[#659287]" size={24} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Location
                  </p>
                  <h4 className="font-semibold dark:text-white">
                    {opportunity.location}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5 dark:bg-zinc-800">
                <DollarSign className="text-[#659287]" size={24} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Salary
                  </p>
                  <h4 className="font-semibold dark:text-white">
                    {opportunity.salary}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5 dark:bg-zinc-800">
                <Briefcase className="text-[#659287]" size={24} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Employment Type
                  </p>
                  <h4 className="font-semibold dark:text-white">
                    {opportunity.type}
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-5 dark:bg-zinc-800">
                <Clock3 className="text-[#659287]" size={24} />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Posted
                  </p>
                  <h4 className="font-semibold dark:text-white">
                    {opportunity.postedAt}
                  </h4>
                </div>
              </div>

            </div>

          </div>

          {/* Skills */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

            <h2 className="mb-6 text-2xl font-bold dark:text-white">
              Required Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {opportunity.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#659287]/10 px-4 py-2 text-sm font-semibold text-[#659287]"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
                    {/* Description */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="mb-6 text-2xl font-bold dark:text-white">
              Job Description
            </h2>

            <p className="leading-8 text-gray-600 dark:text-gray-300">
              {opportunity.description}
            </p>

            <div className="mt-8">
              <h3 className="mb-5 text-xl font-semibold dark:text-white">
                What You'll Do
              </h3>

              <div className="space-y-4">
                {[
                  "Collaborate with cross-functional teams.",
                  "Deliver high-quality work on schedule.",
                  "Participate in planning and team meetings.",
                  "Improve existing systems and workflows.",
                  "Follow industry best practices.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="mt-1 text-[#659287]"
                    />
                    <p className="text-gray-600 dark:text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Apply Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

            <button className="mb-4 w-full rounded-2xl bg-[#659287] py-4 text-lg font-semibold text-white transition hover:bg-[#52766d]">
              Apply Now
            </button>

            <button className="w-full rounded-2xl border border-[#659287] py-4 text-lg font-semibold text-[#659287] transition hover:bg-[#659287] hover:text-white">
              Save Opportunity
            </button>

          </div>

          {/* Company Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

            <h3 className="mb-6 text-xl font-bold dark:text-white">
              Company Information
            </h3>

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                <Building2 size={30} />
              </div>

              <div>
                <h4 className="text-lg font-semibold dark:text-white">
                  {opportunity.company}
                </h4>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {opportunity.category}
                </p>
              </div>

            </div>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Location
                </span>

                <span className="font-medium dark:text-white">
                  {opportunity.location}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Employment
                </span>

                <span className="font-medium dark:text-white">
                  {opportunity.type}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Experience
                </span>

                <span className="font-medium dark:text-white">
                  {opportunity.experience}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">
                  Posted
                </span>

                <span className="font-medium dark:text-white">
                  {opportunity.postedAt}
                </span>
              </div>

            </div>
          </div>

          {/* Quick Facts */}
          <div className="rounded-3xl bg-[#659287] p-6 text-white">

            <h3 className="mb-4 text-xl font-bold">
              Why Apply?
            </h3>

            <ul className="space-y-3 text-sm leading-7">
              <li>✓ Competitive salary</li>
              <li>✓ Career growth opportunities</li>
              <li>✓ Friendly working environment</li>
              <li>✓ Professional development</li>
              <li>✓ Modern workplace culture</li>
            </ul>

          </div>

        </div>
      </div>
    </div>
  );
}