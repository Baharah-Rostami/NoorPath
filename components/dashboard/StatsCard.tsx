"use client";

import { useEffect, useState } from "react";

import {
  Briefcase,
  Bookmark,
  Globe,
  TrendingUp,
} from "lucide-react";

import { getOpportunities } from "@/lib/opportunitiesStorage";
import { getSavedIds } from "@/lib/savedOpportunities";

import type { Opportunity } from "@/data/opportunities";


export default function StatsCards() {

  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [savedCount, setSavedCount] = useState(0);


  useEffect(() => {

    setOpportunities(
      getOpportunities()
    );


    setSavedCount(
      getSavedIds().length
    );

  }, []);



  const stats = [
    {
      title: "Total Opportunities",
      value: opportunities.length,
      subtitle: "+2 today",
      icon: Briefcase,
    },

    {
      title: "Saved Opportunities",
      value: savedCount,
      subtitle: "Bookmarked",
      icon: Bookmark,
    },

    {
      title: "Remote Jobs",
      value: opportunities.filter(
        (job)=>job.remote
      ).length,
      subtitle: "Available",
      icon: Globe,
    },

    {
      title: "Featured Opportunities",
      value: opportunities.filter(
        (job)=>job.featured
      ).length,
      subtitle: "Trending",
      icon: TrendingUp,
    },
  ];



  return (
    <section
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6
      ">

      {
        stats.map((stat)=>{

          const Icon = stat.icon;


          return (
            <div
              key={stat.title}
              className=" bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md  transition
              "
            >

              <div className=" flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500 dark:text-gray-400
                  ">
                    {stat.title}
                  </p>


                  <h2 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white
                  ">
                    {stat.value}
                  </h2>


                  <p className="text-xs text-[#43786c] mt-2
                  ">
                    {stat.subtitle}
                  </p>

                </div>

                <div className="p-3 rounded-xlbg-green-100 dark:bg-green-900/30
                ">

                  <Icon
                    size={24}
                    className="text-green-700 dark:text-[#659287]
                    "/>

                </div>
              </div>
            </div>
          );

        })
      }

    </section>
  );
}