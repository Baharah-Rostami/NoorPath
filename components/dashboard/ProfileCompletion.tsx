"use client";

import {
  CheckCircle2,
  Circle,
  User,
  ArrowRight,
} from "lucide-react";

export default function ProfileCompletion() {
  const profile = {
    name: true,
    email: true,
    location: true,
    skills: true,
    resume: true,
    photo: false,
    bio: false,
  };

  const items = [
    {
      label: "Personal information",
      completed: profile.name,
    },
    {
      label: "Email added",
      completed: profile.email,
    },
    {
      label: "Location selected",
      completed: profile.location,
    },
    {
      label: "Skills added",
      completed: profile.skills,
    },
    {
      label: "Resume uploaded",
      completed: profile.resume,
    },
    {
      label: "Profile photo",
      completed: profile.photo,
    },
    {
      label: "Short bio",
      completed: profile.bio,
    },
  ];

  const completed = items.filter(
    (item) => item.completed
  ).length;

  const percentage = Math.round(
    (completed / items.length) * 100
  );

  return (
    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      {/* Header */}

      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30">
          <User size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Profile Completion
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Complete your profile to stand out.
          </p>
        </div>

      </div>

      {/* Percentage */}

      <div className="mt-8 text-center">

        <div className="text-5xl font-bold text-emerald-600">
          {percentage}%
        </div>

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Your profile is almost ready.
        </p>

      </div>

      {/* Progress */}

      <div className="mt-6">
        <div className="h-3 overflow-hidden rounded-full bg-gray-200 dark:bg-zinc-800">

          <div
            className="h-full rounded-full bg-emerald-600 transition-all duration-700"
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>
      </div>

      {/* Checklist */}

      <div className="mt-8 space-y-4">

        {items.map((item) => (

          <div
            key={item.label}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              {item.completed ? (
                <CheckCircle2
                  size={18}
                  className="text-emerald-600"
                />
              ) : (
                <Circle
                  size={18}
                  className="text-gray-400"
                />
              )}

              <span
                className={`text-sm ${
                  item.completed
                    ? "text-gray-800 dark:text-gray-200"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {item.label}
              </span>

            </div>
          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="mt-8 rounded-2xl bg-emerald-50 p-4 dark:bg-emerald-900/20">

        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
          Completing your profile helps employers understand your
          skills and increases your chances of finding the right
          opportunity.
        </p>

        <button
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Complete Profile

          <ArrowRight size={18} />

        </button>

      </div>
    </section>
  );
}