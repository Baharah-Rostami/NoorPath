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
      <div className="relative min-h-[300px] md:h-64 w-full">
        <Image
          src="/images/office.jpg"
          alt="Office"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-linear-to-r from-emerald-900/70 via-emerald-800/35 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 md:px-12">
          <h1 className="max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">
            Good Morning, Baharah
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-200 md:mt-4 md:text-base md:leading-7">
            Welcome back to NoorPath. Discover new opportunities,
            track your progress, and take the next step toward
            your career goals.
          </p>

          <div className="mt-6 flex flex-col gap-3 text-sm text-white sm:flex-row sm:flex-wrap sm:gap-6">

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
        <div className="absolute bottom-5 right-5 md:right-6 md:top-1/2 md:bottom-auto md:-translate-y-1/2">

          <div className="rounded-full border-4 border-[#659287] shadow-xl">

            <Image
              src="/images/avatar.jpg"
              alt="Profile"
              width={90}
              height={90}
              className="h-20 w-20 rounded-full object-cover md:h-[130px] md:w-[130px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}