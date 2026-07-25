"use client";

import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

export default function DashboardBanner() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="relative overflow-hidden rounded-3xl">

      {/* Background */}
      <div className="relative h-[260px] w-full">

        <Image
          src="/images/office.jpg"
          alt="Office"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-linear-to-r from-emerald-900/70 via-emerald-800/35 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12">
          <h1 className="max-w-2xl text-3xl font-bold text-white md:text-5xl">
            Good Morning, Baharah
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-200 md:text-base">
            Welcome back to NoorPath. Discover new opportunities,
            track your progress, and take the next step toward
            your career goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white">

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              {today}
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Herat, Afghanistan
            </div>

            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={18} />
              Frontend Developer
            </div>

          </div>

        </div>

        {/* Avatar */}
        <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">

          <div className="rounded-full border-4 border-white shadow-xl">

            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              width={130}
              height={130}
              className="rounded-full object-cover"
            />

          </div>

        </div>

      </div>

    </section>
  );
}