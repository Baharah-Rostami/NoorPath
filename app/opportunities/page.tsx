"use client";

import { useMemo, useState } from "react";

import SearchBar from "@/components/opportunity/OpportunityFilters";
import OpportunityGrid from "@/components/opportunity/OpportunityGrid";
import { opportunities } from "@/data/opportunities";

export default function OpportunitiesPage() {
    const [search, setSearch] = useState("");

    const [location, setLocation] = useState("");

    const [category, setCategory] = useState("");

    const [jobType, setJobType] = useState("");

    const [experience, setExperience] = useState("");

    const [remoteOnly, setRemoteOnly] = useState(false);

    const filteredOpportunities = useMemo(() => {
        return opportunities.filter((job) => {
            const matchesSearch =
                search === "" ||
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.company.toLowerCase().includes(search.toLowerCase()) ||
                job.skills.some((skill) =>
                    skill.toLowerCase().includes(search.toLowerCase())
                );

            const matchesLocation =
                location === "" || job.location === location;

            const matchesCategory =
                category === "" || job.category === category;

            const matchesType =
                jobType === "" || job.type === jobType;

            const matchesExperience =
                experience === "" ||
                job.experience === experience;

            const matchesRemote =
                !remoteOnly || job.remote;

            return (
                matchesSearch &&
                matchesLocation &&
                matchesCategory &&
                matchesType &&
                matchesExperience &&
                matchesRemote
            );
        });
    }, [
        search,
        location,
        category,
        jobType,
        experience,
        remoteOnly,
    ]);

    return (
        <main className="min-h-screen bg-gray-50 p-4 dark:bg-zinc-950 md:p-8">

            {/* Header */}

            <div className="mb-8">

                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Opportunities
                </h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Discover jobs, internships and career opportunities.
                </p>

            </div>

            {/* Search */}

            <SearchBar
                search={search}
                setSearch={setSearch}
                location={location}
                setLocation={setLocation}
                category={category}
                setCategory={setCategory}
                jobType={jobType}
                setJobType={setJobType}
                experience={experience}
                setExperience={setExperience}
                remoteOnly={remoteOnly}
                setRemoteOnly={setRemoteOnly}
            />

            {/* Stats */}

            <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                <div>
                    <h2 className="text-xl font-semibold dark:text-white">
                        {filteredOpportunities.length} Opportunities Found
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Showing results based on your search and filters.
                    </p>
                </div>
                {/* Future Sort Dropdown */}
                <div className="flex items-center gap-3">
                    <button className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
                        Newest
                    </button>
                </div>
            </div>

            {/* Opportunities Grid */}
            <OpportunityGrid
                opportunities={filteredOpportunities}
                clearFilters={() => {
                    setSearch("");
                    setLocation("");
                    setCategory("");
                    setJobType("");
                    setExperience("");
                    setRemoteOnly(false);
                }}
            />
        </main>
    );
}