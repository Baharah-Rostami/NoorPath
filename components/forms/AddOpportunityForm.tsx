"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addOpportunity } from "@/lib/opportunitiesStorage";
import { useRouter } from "next/navigation";
import {
  opportunitySchema,
  OpportunityFormData,
  categories,
  jobTypes,
  experienceLevels,
} from "@/lib/validation/opportunitySchema";

export default function AddOpportunityForm() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OpportunityFormData>({
    resolver: zodResolver(opportunitySchema),

    defaultValues: {
      title: "",
      company: "",
      location: "",
      category: undefined,
      type: undefined,
      experience: undefined,
      salary: "",
      remote: false,
      description: "",
      skills: "",
    },
  });
const onSubmit = async (data: OpportunityFormData) => {
  const newOpportunity = {
    id: Date.now(),

    title: data.title,
    company: data.company,
    location: data.location,
    category: data.category,
    type: data.type,
    experience: data.experience,
    salary: data.salary,
    remote: data.remote,

    postedAt: "Today",

    description: data.description,

    featured: false,

    skills: data.skills
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean),
  };

  addOpportunity(newOpportunity);

  setSubmitted(true);

  reset();

  setTimeout(() => {
    setSubmitted(false);
    router.push("/opportunities");
    router.refresh();
  }, 2000);
};

  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Add New Opportunity
        </h1>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Fill in the information below to publish a new opportunity.
        </p>
      </div>

      {submitted && (
        <div className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
          Opportunity submitted successfully.
        </div>
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        <div className="grid gap-6 md:grid-cols-2">

          {/* Title */}

          <div>
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Job Title
            </label>

            <input
              type="text"
              placeholder="Frontend Developer"
              {...register("title")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />

            {errors.title && (
              <p className="mt-2 text-sm text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Company */}

          <div>
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Company
            </label>

            <input
              type="text"
              placeholder="NoorTech"
              {...register("company")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />

            {errors.company && (
              <p className="mt-2 text-sm text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>
          {/* Location */}

          <div>
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Location
            </label>

            <input
              type="text"
              placeholder="Herat"
              {...register("location")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />

            {errors.location && (
              <p className="mt-2 text-sm text-red-500">
                {errors.location.message}
              </p>
            )}
          </div>

          {/* Category */}

          <div>
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Category
            </label>

            <select
              {...register("category")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            >
              <option value="">Select Category</option>

              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              ))}
            </select>

            {errors.category && (
              <p className="mt-2 text-sm text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Job Type */}

          <div>
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Job Type
            </label>

            <select
              {...register("type")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            >
              <option value="">Select Job Type</option>

              {jobTypes.map((type) => (
                <option
                  key={type}
                  value={type}
                >
                  {type}
                </option>
              ))}
            </select>

            {errors.type && (
              <p className="mt-2 text-sm text-red-500">
                {errors.type.message}
              </p>
            )}
          </div>

          {/* Experience */}

          <div>
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Experience Level
            </label>

            <select
              {...register("experience")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            >
              <option value="">Select Experience</option>

              {experienceLevels.map((level) => (
                <option
                  key={level}
                  value={level}
                >
                  {level}
                </option>
              ))}
            </select>

            {errors.experience && (
              <p className="mt-2 text-sm text-red-500">
                {errors.experience.message}
              </p>
            )}
          </div>

          {/* Salary */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-semibold dark:text-white">
              Salary
            </label>

            <input
              type="text"
              placeholder="$700 - $900"
              {...register("salary")}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
            />

            {errors.salary && (
              <p className="mt-2 text-sm text-red-500">
                {errors.salary.message}
              </p>
            )}
          </div>

        </div>
        {/* Description */}

        <div>
          <label className="mb-2 block text-sm font-semibold dark:text-white">
            Description
          </label>

          <textarea
            rows={6}
            placeholder="Describe the opportunity..."
            {...register("description")}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />

          {errors.description && (
            <p className="mt-2 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Skills */}

        <div>
          <label className="mb-2 block text-sm font-semibold dark:text-white">
            Skills
          </label>

          <input
            type="text"
            placeholder="React, Next.js, TypeScript"
            {...register("skills")}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
          />

          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Separate skills with commas.
          </p>

          {errors.skills && (
            <p className="mt-2 text-sm text-red-500">
              {errors.skills.message}
            </p>
          )}
        </div>

        {/* Remote */}

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-4 dark:border-zinc-700">
          <input
            id="remote"
            type="checkbox"
            {...register("remote")}
            className="h-5 w-5 accent-emerald-600"
          />

          <label
            htmlFor="remote"
            className="font-medium dark:text-white"
          >
            This is a remote opportunity
          </label>
        </div>

        {/* Buttons */}

        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-end">

          <button
            type="button"
            onClick={() => reset()}
            className="rounded-xl border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-100 dark:border-zinc-700 dark:text-white dark:hover:bg-zinc-800"
          >
            Reset Form
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Add Opportunity"}
          </button>

        </div>

      </form>
    </div>
  );
}