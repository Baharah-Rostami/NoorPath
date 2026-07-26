"use client";
import { usePathname } from "next/navigation";
import { Search, Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
type TopbarProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Topbar({
  setSidebarOpen,
}: TopbarProps) {
  const pathname = usePathname();

  const pageTitles: Record<string, string> = {
    "/": "Dashboard",
    "/about": "About",
    "/opportunities": "Opportunities",
    "/applications": "Applications",
    "/contact": "Contact",
  };

  const title = pageTitles[pathname] || "NoorPath";

  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6 text-[#659287] dark:border-[#2d715a] dark:bg-[#2B5748] dark:text-white">

      <div className="flex items-center gap-4">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden"
        >
          <Menu size={24} />
        </button>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>

      <div className="hidden md:flex w-[350px] items-center rounded-full bg-gray-100 px-4 py-2 dark:bg-zinc-800">
        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full bg-transparent px-3 outline-none dark:text-white dark:placeholder:text-zinc-400"
        />
      </div>


      <div className="flex items-center gap-5">
        <ThemeToggle />

        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-[#659287] shadow-md">
            <Image
              src="/images/avatar.jpg"
              alt="Bahar"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="hidden sm:block">
            <p className="font-medium">
              Bahar
            </p>

            <p className="text-xs text-gray-500">
              Job Seeker
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}