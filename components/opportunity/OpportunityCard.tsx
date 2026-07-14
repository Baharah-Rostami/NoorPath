"use client";

import Link from "next/link";
import type { Opportunity } from "@/data/opportunities";
import useSavedOpportunities from "@/hooks/useSavedOpportunities";
import {
  Bookmark,
  BookmarkCheck,
  Building2,
  MapPin,
  DollarSign,
  Clock3,
  Briefcase,
  ArrowRight,
  Star,
} from "lucide-react";

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({
  opportunity,
}: OpportunityCardProps) {
  const { savedIds, handleToggle } = useSavedOpportunities();

  const saved = savedIds.includes(opportunity.id);
  return (
    <div
      className="group rounded-2xl border border-gray-200  bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#659287] hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900
      ">

      <div className="flex items-start justify-between">
        <div className="flex gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100  text-emerald-700 dark:bg-emerald-900/30
          ">
            <Building2 size={24} />
          </div>
          <div>

            <h2 className=" line-clamp-1 text-base font-bold text-gray-900 dark:text-white
            ">
              {opportunity.title}
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {opportunity.company}
            </p>
          </div>
        </div>

        <button
          onClick={() => handleToggle(opportunity.id)}
          className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-zinc-800"
        >
          {saved ? (
            <BookmarkCheck
              size={18}
              className="text-[#659287]"
            />
          ) : (
            <Bookmark
              size={18}
              className="text-gray-500 hover:text-[#659287]"
            />
          )}
        </button>
      </div>

      {/* Badges */}

      <div className="mt-4 flex flex-wrap gap-2">

        {opportunity.featured && (
          <span
            className="flex items-center gap-1 rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300
            ">
            <Star size={13} />
            Featured
          </span>
        )}

        <span className=" rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300
          ">
          {opportunity.experience}
        </span>


        {opportunity.remote && (
          <span
            className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700  dark:bg-emerald-900/30 dark:text-emerald-300
            ">
            Remote
          </span>
        )}

      </div>


      {/* Information */}

      <div className=" mt-5 grid grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300
      ">

        <div className="flex items-center gap-2">
          <MapPin size={15} />
          {opportunity.location}
        </div>


        <div className="flex items-center gap-2">
          <Briefcase size={15} />
          {opportunity.type}
        </div>


        <div className="flex items-center gap-2">
          <DollarSign size={15} />
          {opportunity.salary}
        </div>


        <div className="flex items-center gap-2">
          <Clock3 size={15} />
          {opportunity.postedAt}
        </div>

      </div>

      {/* Description */}

      <p className=" mt-4 line-clamp-2 text-sm leading-5 text-gray-500 dark:text-gray-400
        ">
        {opportunity.description}
      </p>

      {/* Skills */}

      <div className="mt-4 flex flex-wrap gap-2">

        {opportunity.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-gray-100 px-2.5 py-1 text-xs dark:bg-zinc-800 dark:text-gray-300
            ">
            {skill}
          </span>
        ))}

      </div>

      {/* Actions */}

      <div className="
      mt-5 flex items-center justify-between
      border-t border-gray-100 pt-4
      dark:border-zinc-800
      ">

        <button
          onClick={() => handleToggle(opportunity.id)}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition
        ${saved
              ? "bg-[#659287] text-white"
              : "border border-[#659287] text-[#659287] hover:bg-[#659287] hover:text-white"
            }
    `}
        >
          {saved ? "Saved" : "Save"}
        </button>


        <Link
          href={`/opportunities/${opportunity.id}`}
          className="flex items-center gap-2 rounded-lg bg-[#659287] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#52766d]
          ">
          View Details
          <ArrowRight size={15} />
        </Link>

      </div>
    </div>
  );
}