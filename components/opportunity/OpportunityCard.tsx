"use client";

import Link from "next/link";
import type { Opportunity } from "@/data/Opportunity";
import {
    Bookmark,
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
    return (
        <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#659287] hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
            {/* Top */}
            <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                        <Building2 size={28} />
                    </div>

                    <div>
                        <h2 className="text-lg font-bold text-gray-900 dark:text-white">
                            {opportunity.title}
                        </h2>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {opportunity.company}
                        </p>
                    </div>
                </div>

                <button className="rounded-xl p-2 transition hover:bg-emerald-100 dark:hover:bg-zinc-800">
                    <Bookmark
                        size={20}
                        className="text-gray-500 hover:text-emerald-600"
                    />
                </button>
            </div>

            {/* Featured */}
            {opportunity.featured && (
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                    <Star size={14} />
                    Featured
                </div>
            )}

            {/* Info */}
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                    <MapPin size={17} />
                    {opportunity.location}
                </div>

                <div className="flex items-center gap-2">
                    <DollarSign size={17} />
                    {opportunity.salary}
                </div>

                <div className="flex items-center gap-2">
                    <Briefcase size={17} />
                    {opportunity.type}
                </div>

                <div className="flex items-center gap-2">
                    <Clock3 size={17} />
                    {opportunity.postedAt}
                </div>
            </div>

            {/* Experience */}
            <div className="mt-5">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {opportunity.experience}
                </span>

                {opportunity.remote && (
                    <span className="ml-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                        Remote
                    </span>
                )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs dark:bg-zinc-800"
                    >
                        {skill}
                    </span>
                ))}
            </div>

            <p className="mt-6 line-clamp-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {opportunity.description}
            </p>


            <div className="mt-8 flex items-center justify-between">
                <button className="rounded-xl border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-500 hover:text-white">
                    Save
                </button>

                <Link
                    href={`/opportunities/${opportunity.id}`}
                    className="flex items-center gap-2 rounded-xl bg-[#659287] px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                    View Details
                    <ArrowRight size={17} />
                </Link>
            </div>
        </div>
    );
}