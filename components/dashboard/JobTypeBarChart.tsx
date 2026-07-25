"use client";

import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { BriefcaseBusiness } from "lucide-react";

import { getOpportunities } from "@/lib/opportunitiesStorage";
import type { Opportunity } from "@/data/opportunities";

interface JobTypeData {
  type: string;
  total: number;
}

export default function JobTypeBarChart() {
  const [data, setData] = useState<JobTypeData[]>([]);

  useEffect(() => {
    const opportunities: Opportunity[] = getOpportunities();

    const counts = {
      "Full-time": 0,
      "Part-time": 0,
      Internship: 0,
      Contract: 0,
    };

    opportunities.forEach((job) => {
      counts[job.type]++;
    });

    setData([
      {
        type: "Full-time",
        total: counts["Full-time"],
      },
      {
        type: "Part-time",
        total: counts["Part-time"],
      },
      {
        type: "Internship",
        total: counts["Internship"],
      },
      {
        type: "Contract",
        total: counts["Contract"],
      },
    ]);
  }, []);

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      {/* Header */}

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-emerald-100 p-3 dark:bg-emerald-900/30">
          <BriefcaseBusiness
            size={22}
            className="text-emerald-700 dark:text-emerald-500"
          />
        </div>

        <div>

          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Job Types
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Distribution of employment types
          </p>

        </div>

      </div>

      {/* Chart */}

      <div className="h-[320px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 5,
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="type"
              tick={{ fontSize: 13 }}
            />

            <YAxis
              allowDecimals={false}
            />

            <Tooltip />

            <Bar
              dataKey="total"
              fill="#10b981"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">

        {data.map((item) => (
          <div
            key={item.type}
            className="rounded-xl bg-gray-50 p-4 text-center dark:bg-zinc-800"
          >

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.type}
            </p>

            <h3 className="mt-1 text-2xl font-bold text-emerald-600">
              {item.total}
            </h3>

          </div>
        ))}

      </div>

    </section>
  );
}