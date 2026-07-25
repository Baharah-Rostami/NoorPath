"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { PieChart as PieChartIcon } from "lucide-react";

import { getOpportunities } from "@/lib/opportunitiesStorage";
import type { Opportunity } from "@/data/opportunities";

const COLORS = [
  "#10b981",
  "#059669",
  "#34d399",
  "#6ee7b7",
  "#047857",
  "#14b8a6",
  "#22c55e",
  "#84cc16",
];

interface CategoryData {
  name: string;
  value: number;
}

export default function CategoryPieChart() {
  const [data, setData] = useState<CategoryData[]>([]);

  useEffect(() => {
    const opportunities: Opportunity[] = getOpportunities();

    const counts: Record<string, number> = {};

    opportunities.forEach((job) => {
      counts[job.category] = (counts[job.category] || 0) + 1;
    });

    const chartData = Object.entries(counts).map(([name, value]) => ({
      name,
      value,
    }));

    setData(chartData);
  }, []);

  return (
    <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">

      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-emerald-100 p-3 dark:bg-emerald-900/30">
          <PieChartIcon
            size={22}
            className="text-emerald-700 dark:text-emerald-500"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Opportunities by Category
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Distribution of all opportunities
          </p>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={3}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-zinc-800"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index % COLORS.length],
                }}
              />

              <span className="text-sm text-gray-700 dark:text-gray-300">
                {item.name}
              </span>
            </div>

            <span className="font-semibold text-gray-900 dark:text-white">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}