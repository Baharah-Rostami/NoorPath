"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  MapPin,
  Briefcase,
  Layers3,
  Star,
  X,
} from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;

  location: string;
  setLocation: (value: string) => void;

  category: string;
  setCategory: (value: string) => void;

  jobType: string;
  setJobType: (value: string) => void;

  experience: string;
  setExperience: (value: string) => void;

  remoteOnly: boolean;
  setRemoteOnly: (value: boolean) => void;
}

export default function SearchBar({
  search,
  setSearch,

  location,
  setLocation,

  category,
  setCategory,

  jobType,
  setJobType,

  experience,
  setExperience,

  remoteOnly,
  setRemoteOnly,
}: SearchBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  function clearFilters() {
    setLocation("");
    setCategory("");
    setJobType("");
    setExperience("");
    setRemoteOnly(false);
  }

  return (
    <div className="relative w-full">
      {/* Search Bar */}
      <div className="flex flex-col gap-3 rounded-3xl border border-gray-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 lg:flex-row lg:items-center">

        {/* Search */}
        <div className="flex flex-1 items-center gap-3 rounded-2xl bg-gray-100 px-4 py-3 dark:bg-zinc-800">
          <Search className="text-gray-400" size={20} />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search jobs, companies or skills..."
            className="w-full bg-transparent outline-none placeholder:text-gray-400 dark:text-white"
          />
        </div>

        {/* Right Buttons */}
        <div className="flex gap-3">

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 transition hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>

          {/* Search Button */}
          <button
            className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Search
          </button>

        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="mt-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold dark:text-white">
              Filters
            </h2>

            <button
              onClick={() => setShowFilters(false)}
              className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-zinc-800"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

            {/* Location */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium dark:text-white">
                <MapPin size={16} />
                Location
              </label>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <option value="">All</option>
                <option>Kabul</option>
                <option>Herat</option>
                <option>Mazar-i-Sharif</option>
                <option>Kandahar</option>
                <option>Jalalabad</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium dark:text-white">
                <Layers3 size={16} />
                Category
              </label>

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <option value="">All</option>
                <option>Technology</option>
                <option>Design</option>
                <option>Education</option>
                <option>Finance</option>
                <option>Healthcare</option>
                <option>NGO</option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium dark:text-white">
                <Briefcase size={16} />
                Job Type
              </label>

              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <option value="">All</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="mb-2 flex items-center gap-2 text-sm font-medium dark:text-white">
                <Star size={16} />
                Experience
              </label>

              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white p-3 outline-none focus:border-emerald-500 dark:border-zinc-700 dark:bg-zinc-800"
              >
                <option value="">All</option>
                <option>Entry</option>
                <option>Junior</option>
                <option>Mid</option>
                <option>Senior</option>
              </select>
            </div>
          </div>

          {/* Remote */}
          <div className="mt-6 flex items-center gap-3">
            <input
              id="remote"
              type="checkbox"
              checked={remoteOnly}
              onChange={(e) => setRemoteOnly(e.target.checked)}
              className="h-5 w-5 accent-emerald-600"
            />

            <label
              htmlFor="remote"
              className="font-medium dark:text-white"
            >
              Remote Opportunities Only
            </label>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">

            <button
              onClick={clearFilters}
              className="rounded-xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              Clear Filters
            </button>

            <button
              onClick={() => setShowFilters(false)}
              className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700"
            >
              Apply Filters
            </button>

          </div>

        </div>
      )}
    </div>
  );
}