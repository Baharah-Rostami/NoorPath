"use client";
import { useEffect, useState } from "react";
import { getOpportunities } from "@/lib/opportunitiesStorage";
import { getSavedIds } from "@/lib/savedOpportunities";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  BriefcaseBusiness,
  Bookmark,
  Globe,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

export default function AboutPage() {
  const [totalJobs, setTotalJobs] = useState(0);
  const [savedJobs, setSavedJobs] = useState(0);
  const [remoteJobs, setRemoteJobs] = useState(0);

  useEffect(() => {
    const jobs = getOpportunities();

    setTotalJobs(jobs.length);
    setSavedJobs(getSavedIds().length);
    setRemoteJobs(jobs.filter((job) => job.remote).length);
  }, []);
  return (
    <main className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-teal-50 dark:from-zinc-950 dark:via-zinc-950 dark:to-emerald-950">

      {/* Floating Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px] animate-pulse" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-[150px] animate-pulse" />

        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-teal-300/20 blur-[140px] animate-pulse" />

      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-600 to-teal-600 text-white shadow-lg">

            <Sparkles size={22} />

          </div>

          <div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              NoorPath
            </h2>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              Career Platform
            </p>

          </div>
        </div>

        <Link
          href="/opportunities"
          className="hidden rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-emerald-700 md:block"
        >
          Browse Jobs
        </Link>

      </header>

      {/* HERO */}
      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-white/70 px-5 py-2 text-sm font-medium text-emerald-700 backdrop-blur-xl dark:border-emerald-900 dark:bg-zinc-900/60 dark:text-emerald-400">

          <Sparkles size={16} />

          Empowering Careers Across Afghanistan

        </div>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-7xl">
          Your Future

          <br />

          <span className="bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Starts With NoorPath
          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600 dark:text-gray-400">

          NoorPath is a modern platform that connects students,
          graduates, and professionals with jobs, internships,
          scholarships, and career opportunities while helping
          organizations discover talented individuals.

        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            href="/opportunities"
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 px-8 py-4 font-semibold text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-emerald-500/40"
          >

            Explore Opportunities

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-2"
            />

          </Link>

          <Link
            href="/contact"
            className="rounded-2xl border border-gray-300 bg-white/60 px-8 py-4 font-semibold backdrop-blur-xl transition hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/60 dark:hover:bg-zinc-900"
          >
            Contact Us
          </Link>

        </div>

        {/* Floating Statistics */}

        <div className="mt-20 grid w-full gap-6 md:grid-cols-4">

          {[
            {
              icon: BriefcaseBusiness,
              number: "25+",
              title: "Jobs",
            },
            {
              icon: Bookmark,
              number: "100+",
              title: "Applications",
            },
            {
              icon: Globe,
              number: "10+",
              title: "Cities",
            },
            {
              icon: TrendingUp,
              number: "95%",
              title: "Success Rate",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="group rounded-[28px] border border-white/40 bg-white/60 p-8 backdrop-blur-2xl shadow-xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/60"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 text-white transition group-hover:rotate-6">

                  <Icon size={30} />

                </div>

                <h2 className="mt-6 text-4xl font-bold text-gray-900 dark:text-white">
                  {item.number}
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>

              </div>

            );

          })}

        </div>

        {/* Scroll */}

        <div className="mt-20 flex animate-bounce flex-col items-center text-gray-500">
          <span className="mb-2 text-sm">
            Discover More
          </span>

          <ChevronDown size={28} />

        </div>
      </section>
      {/* WHY NOORPATH */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">

        {/* Decorative Background */}

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-300/20 blur-[120px]" />
        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-[130px]" />
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
              Why NoorPath?
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              More Than A Job Board.
              <br />
              Your Career Companion.

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-400">

              NoorPath isn't just a place to search for jobs.
              It helps students, graduates, and professionals
              organize opportunities, discover companies,
              save interesting positions, and confidently
              build their future.

            </p>

            <div className="mt-12 space-y-6">

              {[
                "Discover verified opportunities from trusted organizations.",
                "Save opportunities and return whenever you're ready.",
                "Explore internships, scholarships and full-time careers.",
                "Designed specifically for Afghan students and professionals.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-4"
                >

                  <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-500 text-white">
                    ✓
                  </div>

                  <p className="text-gray-700 dark:text-gray-300">
                    {item}
                  </p>

                </div>

              ))}

            </div>
          </div>

          {/* Right */}

          <div className="grid gap-6">

            {[
              {
                title: "Smart Discovery",
                text: "Find opportunities tailored to your skills and interests.",
                emoji: "🎯",
              },
              {
                title: "Save & Track",
                text: "Bookmark opportunities and never lose them.",
                emoji: "💚",
              },
              {
                title: "Career Growth",
                text: "Build experience through internships and jobs.",
                emoji: "🚀",
              },
            ].map((card) => (

              <div
                key={card.title}
                className="group rounded-4xl border border-white/30 bg-white/60 p-8 shadow-xl backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-emerald-300/40 dark:border-zinc-800 dark:bg-zinc-900/60"
              >

                <div className="flex items-center gap-5">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 text-3xl shadow-lg transition duration-300 group-hover:rotate-6">

                    {card.emoji}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {card.title}
                    </h3>

                    <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">
                      {card.text}
                    </p>

                  </div>
                </div>
              </div>

            ))}

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="mx-auto max-w-7xl px-6 pb-28">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            Our Purpose
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900 dark:text-white">
            Driven By Purpose
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">

            Everything we build is focused on making career
            opportunities easier to discover, organize and access.

          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Mission */}

          <div className="group relative overflow-hidden rounded-[36px] border border-white/30 bg-linear-to-br from-white/70 to-emerald-50/80 p-10 shadow-2xl backdrop-blur-2xl transition duration-500 hover:-translate-y-3 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />

            <div className="relative">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-emerald-500 to-teal-500 text-4xl shadow-lg">
                🎯
              </div>

              <h3 className="mt-8 text-3xl font-bold dark:text-white">
                Our Mission
              </h3>

              <p className="mt-6 leading-9 text-gray-600 dark:text-gray-400">

                To provide a modern digital platform that connects
                talented individuals with meaningful career
                opportunities while helping organizations discover
                skilled professionals quickly and efficiently.

              </p>

            </div>
          </div>

          {/* Vision */}

          <div className="group relative overflow-hidden rounded-[36px] border border-white/30 bg-linear-to-br from-white/70 to-cyan-50/80 p-10 shadow-2xl backdrop-blur-2xl transition duration-500 hover:-translate-y-3 dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900">
            <div className="absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-cyan-500 to-teal-500 text-4xl shadow-lg">
                🌍
              </div>

              <h3 className="mt-8 text-3xl font-bold dark:text-white">
                Our Vision
              </h3>

              <p className="mt-6 leading-9 text-gray-600 dark:text-gray-400">

                To become Afghanistan's leading career platform,
                empowering every student and professional to discover,
                prepare for, and achieve their dream career through one
                trusted digital ecosystem.

              </p>

            </div>
          </div>
        </div>
      </section>
      {/* PREMIUM FEATURES */}

      <section className="relative mx-auto max-w-7xl px-6 py-28">

        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            Platform Features
          </span>

          <h2 className="mt-6 text-5xl font-bold dark:text-white">
            Everything You Need In One Platform
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            NoorPath provides modern tools to help you discover,
            organize and track career opportunities with ease.
          </p>

        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {[
            {
              icon: "💼",
              title: "Verified Jobs",
              text: "Browse trusted opportunities from companies and NGOs.",
            },
            {
              icon: "⭐",
              title: "Save Favorites",
              text: "Bookmark opportunities and apply whenever you're ready.",
            },
            {
              icon: "🌍",
              title: "Remote Careers",
              text: "Explore remote jobs from anywhere in Afghanistan.",
            },
            {
              icon: "📈",
              title: "Career Growth",
              text: "Discover internships and full-time positions.",
            },
          ].map((item) => (

            <div
              key={item.title}
              className="group rounded-4xl border border-white/30 bg-white/60 p-8 backdrop-blur-2xl shadow-xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 hover:shadow-emerald-400/30 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-emerald-500 to-teal-500 text-4xl shadow-lg transition duration-500 group-hover:scale-110">

                {item.icon}

              </div>

              <h3 className="mt-8 text-2xl font-bold dark:text-white">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
                {item.text}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* LIVE PLATFORM STATS */}

      <section className="relative py-28">
        <div className="absolute inset-0 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-600" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-5xl font-bold text-white">
              NoorPath In Numbers
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
              Live statistics from the platform.
            </p>

          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

            {[
              {
                number: totalJobs,
                title: "Available Opportunities",
              },
              {
                number: remoteJobs,
                title: "Remote Jobs",
              },
              {
                number: savedJobs,
                title: "Saved Opportunities",
              },
              {
                number: "100%",
                title: "Free Platform",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-4xl border border-white/20 bg-white/10 p-10 text-center backdrop-blur-2xl transition duration-500 hover:-translate-y-3 hover:bg-white/20"
              >

                <h2 className="text-6xl font-extrabold text-white">
                  {item.number}
                </h2>

                <p className="mt-5 text-lg text-emerald-100">
                  {item.title}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* WHY STUDENTS LOVE IT */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">

          <span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
            Community
          </span>

          <h2 className="mt-6 text-5xl font-bold dark:text-white">
            Why Students Love NoorPath
          </h2>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            {
              emoji: "🚀",
              title: "Fast & Modern",
              text: "Built with the latest technologies for a smooth experience.",
            },
            {
              emoji: "💚",
              title: "Simple To Use",
              text: "Clean interface designed for students and professionals.",
            },
            {
              emoji: "🎯",
              title: "Focused On Careers",
              text: "Everything is designed around helping users find opportunities.",
            },
          ].map((card) => (

            <div
              key={card.title}
              className="group rounded-[36px] border border-white/30 bg-white/60 p-6 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-emerald-300/30 dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <div className="text-4xl transition duration-500 group-hover:scale-110">
                {card.emoji}
              </div>

              <h3 className="mt-8 text-3xl font-bold dark:text-white">
                {card.title}
              </h3>

              <p className="mt-6 leading-8 text-gray-600 dark:text-gray-400">
                {card.text}
              </p>

            </div>

          ))}

        </div>
      </section>

    </main>
  );
}